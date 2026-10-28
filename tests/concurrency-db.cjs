// Self-contained PostgreSQL concurrency regressions. Creates and destroys only its
// own ephemeral Docker container; never reads DATABASE_URL or uses project data.
const assert = require('node:assert/strict');
const { randomBytes, randomUUID } = require('node:crypto');
const { spawnSync } = require('node:child_process');
const { setTimeout: sleep } = require('node:timers/promises');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { PrismaClient } = require('@prisma/client');

const name = `pratohub-race-${randomBytes(8).toString('hex')}`;
function command(bin, args, env = process.env) {
  const r = spawnSync(bin, args, { encoding: 'utf8', env, timeout: 120000 });
  if (r.status !== 0) throw new Error(`${bin}: ${r.stderr}\n${r.stdout}`);
  return r.stdout.trim();
}
const gate = () => { let resolve; const promise = new Promise(r => { resolve = r; }); return { promise, resolve }; };
let created = false, a, b, observer;
async function main() {
  try {
    command('docker', ['run','-d','--name',name,'--label','pratohub.disposable.test=1','--tmpfs','/var/lib/postgresql/data:rw','-e','POSTGRES_USER=test','-e','POSTGRES_PASSWORD=ephemeral','-e','POSTGRES_DB=test','-p','127.0.0.1::5432','postgres:16-alpine']);
    created = true;
    const port = command('docker', ['port',name,'5432/tcp']).match(/^127\.0\.0\.1:(\d+)$/)?.[1];
    assert.ok(port && port !== '5432' && port !== '55432', 'Expected unique loopback port');
    for (let i = 0; i < 100; i++) {
      if (spawnSync('docker',['exec',name,'pg_isready','-U','test','-d','test'],{stdio:'ignore'}).status === 0) break;
      if (i === 99) throw new Error('PostgreSQL did not start');
      await sleep(100);
    }
    const url = `postgresql://test:ephemeral@127.0.0.1:${port}/test?schema=public`;
    console.log(command('node',['tests/taxonomy-source-db.cjs'],{...process.env,DATABASE_URL:url,PRATOHUB_TEST_CONTAINER:name}));
    command('./node_modules/.bin/prisma',['migrate','deploy','--schema','database/schema.prisma'],{...process.env,DATABASE_URL:url});
    a = new PrismaClient({datasources:{db:{url}}});
    b = new PrismaClient({datasources:{db:{url}}});
    observer = new PrismaClient({datasources:{db:{url}}});
    const q = (client, sql, ...args) => client.$executeRawUnsafe(sql, ...args);
    // Upgrade must stop on corruption actually produced by the old race, without
    // silently repairing rows. This schema and database belong to this test only.
    const upgradeSchema = `old_${randomBytes(8).toString('hex')}`;
    const upgradeUrl = new URL(url); upgradeUrl.searchParams.set('schema',upgradeSchema);
    const temp = fs.mkdtempSync(path.join(os.tmpdir(),'pratohub-old-migrations-'));
    const oldA = new PrismaClient({datasources:{db:{url:upgradeUrl.toString()}}});
    const oldB = new PrismaClient({datasources:{db:{url:upgradeUrl.toString()}}});
    try {
      await q(observer,`CREATE SCHEMA "${upgradeSchema}"`);
      fs.copyFileSync('database/schema.prisma',path.join(temp,'schema.prisma'));
      fs.mkdirSync(path.join(temp,'migrations'));
      for (const file of ['migration_lock.toml','202610280001_baseline','202610280002_site_owner_guard','202610280003_taxonomy_identity','202610280004_active_hierarchy_source_restrict']) {
        fs.cpSync(path.join('database/migrations',file),path.join(temp,'migrations',file),{recursive:true});
      }
      const upgradeEnv = {...process.env,DATABASE_URL:upgradeUrl.toString()};
      command('./node_modules/.bin/prisma',['migrate','deploy','--schema',path.join(temp,'schema.prisma')],upgradeEnv);
      const root = randomUUID(), child = randomUUID();
      await q(oldA,'INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ($1::uuid,$2,1,$3)',root,root,'Test');
      await oldA.$transaction(async tx => {
        await tx.$queryRawUnsafe('SELECT id FROM taxonomy_nodes WHERE id=$1::uuid',root);
        await q(oldB,'INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ($1::uuid,$2,2,$3::uuid,$4)',child,child,root,'Test');
        await q(tx,'UPDATE taxonomy_nodes SET active=false WHERE id=$1::uuid',root);
      },{isolationLevel:'RepeatableRead'});
      const invalid = 'SELECT count(*)::int AS n FROM taxonomy_nodes c JOIN taxonomy_nodes p ON p.id=c.parent_id WHERE c.active AND NOT p.active';
      assert.equal((await oldA.$queryRawUnsafe(invalid))[0].n,1,'Old race must reproduce');
      // psql exposes the original exception; Prisma's explicit transaction can
      // mask it with "current transaction is aborted" after the failing DO.
      const migration = fs.readFileSync('database/migrations/202610280005_taxonomy_concurrency/migration.sql','utf8');
      const direct = spawnSync('docker',['exec','-i',name,'psql','-U','test','-d','test','-v','ON_ERROR_STOP=1'],{
        input:`SET search_path TO "${upgradeSchema}";\n${migration}`,encoding:'utf8',timeout:30000
      });
      assert.notEqual(direct.status,0);
      assert.match(direct.stderr,/Existing taxonomy hierarchy is inconsistent/);
      assert.throws(() => command('./node_modules/.bin/prisma',['migrate','deploy','--schema','database/schema.prisma'],upgradeEnv), /202610280005_taxonomy_concurrency/);
      assert.equal((await oldA.$queryRawUnsafe(invalid))[0].n,1,'Failed migration must preserve original rows');
      console.log('PASS old race reproduced; migration rejected inconsistent data without repair');
    } finally {
      await Promise.all([oldA.$disconnect(),oldB.$disconnect()]);
      await q(observer,`DROP SCHEMA IF EXISTS "${upgradeSchema}" CASCADE`);
      fs.rmSync(temp,{recursive:true,force:true});
    }
    // Mutation statements must fail even when their WHERE clause matches no rows,
    // and even after the transaction has already established an old snapshot.
    for (const isolationLevel of ['RepeatableRead','Serializable']) {
      for (const sql of [
        "UPDATE taxonomy_nodes SET active=false WHERE code='no-such-node'",
        "INSERT INTO taxonomy_nodes(code,level,label_it) VALUES ('isolation-test',1,'test')",
        "UPDATE company_capabilities SET company_id=company_id WHERE false",
        "INSERT INTO company_capabilities(company_id,taxonomy_node_id) VALUES ('00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000002')",
        "UPDATE company_sites SET company_id=company_id WHERE false",
      ]) {
        await assert.rejects(a.$transaction(async tx => {
          await tx.$queryRawUnsafe('SELECT count(*) FROM taxonomy_nodes');
          await q(tx, sql);
        }, {isolationLevel}), /READ COMMITTED/i, `${isolationLevel}: ${sql}`);
      }
    }
    async function fixture() {
      const root = randomUUID(), mid = randomUUID(), leaf = randomUUID(), co = randomUUID(), other = randomUUID(), site = randomUUID();
      await q(a, 'INSERT INTO companies(id,slug,legal_name) VALUES ($1::uuid,$2,$3),($4::uuid,$5,$6)',co,`c-${co}`, 'Test',other,`c-${other}`,'Other');
      await q(a, 'INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ($1::uuid,$2,1,$3)',root,root,'Test');
      await q(a, 'INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ($1::uuid,$2,2,$3::uuid,$4)',mid,mid,root,'Test');
      await q(a, 'INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ($1::uuid,$2,3,$3::uuid,$4)',leaf,leaf,mid,'Test');
      await q(a, 'INSERT INTO company_sites(id,company_id,city) VALUES ($1::uuid,$2::uuid,$3)',site,co,'Test');
      return {root,mid,leaf,co,other,site};
    }
    // Established snapshots plus an intervening committed incompatible write:
    // both directions must be rejected before any stale row guard runs.
    for (const isolationLevel of ['RepeatableRead','Serializable']) {
      for (const kind of ['parent-first','child-first','inactive-first','capability-first','move-first','site-capability-first']) {
        const f = await fixture(), child = randomUUID();
        let external, stale;
        if (kind === 'parent-first' || kind === 'child-first') {
          const bare = randomUUID();
          await q(a,'INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ($1::uuid,$2,1,$3)',bare,bare,'Test');
          const ins = tx => q(tx,'INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ($1::uuid,$2,2,$3::uuid,$4)',child,child,bare,'Test');
          const deact = tx => q(tx,'UPDATE taxonomy_nodes SET active=false WHERE id=$1::uuid',bare);
          [external, stale] = kind === 'parent-first' ? [deact,ins] : [ins,deact];
        } else if (kind === 'inactive-first' || kind === 'capability-first') {
          const ins = tx => q(tx,'INSERT INTO company_capabilities(company_id,taxonomy_node_id) VALUES ($1::uuid,$2::uuid)',f.co,f.leaf);
          const deact = tx => q(tx,'UPDATE taxonomy_nodes SET active=false WHERE id=$1::uuid',f.leaf);
          [external, stale] = kind === 'inactive-first' ? [deact,ins] : [ins,deact];
        } else {
          const ins = tx => q(tx,'INSERT INTO company_capabilities(company_id,taxonomy_node_id,site_id) VALUES ($1::uuid,$2::uuid,$3::uuid)',f.co,f.leaf,f.site);
          const move = tx => q(tx,'UPDATE company_sites SET company_id=$1::uuid WHERE id=$2::uuid',f.other,f.site);
          [external, stale] = kind === 'move-first' ? [move,ins] : [ins,move];
        }
        await assert.rejects(a.$transaction(async tx => {
          await tx.$queryRawUnsafe('SELECT count(*) FROM taxonomy_nodes');
          await external(b);
          await stale(tx);
        }, {isolationLevel,timeout:15000}), /READ COMMITTED/i, `${isolationLevel} ${kind}`);
      }
      console.log(`PASS ${isolationLevel}: six established-snapshot races rejected`);
    }
    // Observe the contender waiting on an advisory lock, not a timing guess.
    async function waitForAdvisory(pid) {
      for (let i=0; i<100; i++) {
        const rows = await observer.$queryRawUnsafe("SELECT wait_event_type,wait_event FROM pg_stat_activity WHERE pid=$1",pid);
        if (rows[0]?.wait_event_type === 'Lock' && rows[0]?.wait_event === 'advisory') return;
        await sleep(30);
      }
      throw new Error('Contender did not wait for the advisory lock');
    }
    async function race(label, first, second, expected) {
      const ready = gate(), release = gate(), contender = gate();
      const firstTx = a.$transaction(async tx => { await first(tx); ready.resolve(); await release.promise; }, {timeout:15000});
      let secondTx;
      try {
        await Promise.race([ready.promise, firstTx.then(() => { throw new Error('first transaction ended early'); })]);
        secondTx = b.$transaction(async tx => {
          const rows = await tx.$queryRawUnsafe('SELECT pg_backend_pid() AS pid');
          contender.resolve(rows[0].pid);
          await second(tx);
        }, {timeout:15000});
        // Attach rejection immediately, avoiding an unhandled rejection if broken.
        const outcome = secondTx.then(() => null, error => error);
        await waitForAdvisory(await contender.promise);
        release.resolve();
        await firstTx;
        const error = await outcome;
        assert.ok(error, `${label}: contender unexpectedly committed`);
        assert.match(error.message, expected, label);
        console.log(`PASS ${label}`);
      } finally { release.resolve(); await firstTx.catch(()=>{}); if (secondTx) await secondTx.catch(()=>{}); }
    }
    for (const order of [0,1]) {
      let f = await fixture(); const child = randomUUID();
      const insertChild = tx => q(tx,'INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ($1::uuid,$2,2,$3::uuid,$4)',child,child,f.root,'Test');
      // Existing mid would independently prevent deactivation: use a separate root.
      const bare = randomUUID();
      await q(a,'INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ($1::uuid,$2,1,$3)',bare,bare,'Test');
      f.root = bare;
      const deactivate = tx => q(tx,'UPDATE taxonomy_nodes SET active=false WHERE id=$1::uuid',bare);
      await race(`parent/child ${order ? 'deactivate then insert' : 'insert then deactivate'}`, order ? deactivate : insertChild, order ? insertChild : deactivate, order ? /active.*parent/i : /active.*children/i);
      let bad = await observer.$queryRawUnsafe('SELECT count(*)::int AS n FROM taxonomy_nodes c JOIN taxonomy_nodes p ON p.id=c.parent_id WHERE c.active AND NOT p.active');
      assert.equal(bad[0].n,0);
      f = await fixture();
      const cap = tx => q(tx,'INSERT INTO company_capabilities(company_id,taxonomy_node_id) VALUES ($1::uuid,$2::uuid)',f.co,f.leaf);
      const inactive = tx => q(tx,'UPDATE taxonomy_nodes SET active=false WHERE id=$1::uuid',f.leaf);
      await race(`capability/active ${order ? 'deactivate then insert' : 'insert then deactivate'}`, order ? inactive : cap, order ? cap : inactive, order ? /active leaf/i : /referenced taxonomy leaf/i);
      bad = await observer.$queryRawUnsafe('SELECT count(*)::int AS n FROM company_capabilities c JOIN taxonomy_nodes t ON t.id=c.taxonomy_node_id WHERE NOT t.active OR t.level<>3');
      assert.equal(bad[0].n,0);
      f = await fixture();
      const sitecap = tx => q(tx,'INSERT INTO company_capabilities(company_id,taxonomy_node_id,site_id) VALUES ($1::uuid,$2::uuid,$3::uuid)',f.co,f.leaf,f.site);
      const move = tx => q(tx,'UPDATE company_sites SET company_id=$1::uuid WHERE id=$2::uuid',f.other,f.site);
      await race(`capability/site owner ${order ? 'move then insert' : 'insert then move'}`, order ? move : sitecap, order ? sitecap : move, order ? /site belongs to different company/i : /referenced site cannot move/i);
      bad = await observer.$queryRawUnsafe('SELECT count(*)::int AS n FROM company_capabilities c JOIN company_sites s ON s.id=c.site_id WHERE c.company_id<>s.company_id');
      assert.equal(bad[0].n,0);
    }
    console.log('PASS stronger isolation rejected and six real two-connection races preserved invariants');
  } finally {
    await Promise.all([a?.$disconnect(),b?.$disconnect(),observer?.$disconnect()]);
    if (created) command('docker',['rm','-f',name]);
  }
}
main().catch(error => { console.error(error); process.exitCode=1; });
