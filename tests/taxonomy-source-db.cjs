// Real PostgreSQL regression tests. Only a random schema in the dedicated DB is touched.
const assert = require('node:assert/strict');
const { randomBytes } = require('node:crypto');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { PrismaClient } = require('@prisma/client');

const url = new URL(process.env.DATABASE_URL || '');
// In addition to the dedicated local database, permit a specifically identified
// disposable test container, verified before connecting or creating any schema.
let disposable = false;
const container = process.env.PRATOHUB_TEST_CONTAINER || '';
if (/^pratohub-race-[0-9a-f]{16}$/.test(container)) {
  const info = spawnSync('docker', ['inspect', container], {encoding:'utf8'});
  if (info.status === 0) {
    const c = JSON.parse(info.stdout)[0];
    const binding = c.NetworkSettings.Ports?.['5432/tcp'];
    disposable = c.Config.Labels?.['pratohub.disposable.test'] === '1' &&
      c.Config.Image === 'postgres:16-alpine' && binding?.length === 1 &&
      binding[0].HostIp === '127.0.0.1' && binding[0].HostPort === url.port &&
      url.pathname === '/test' && url.username === 'test';
  }
}
if (!['postgres:', 'postgresql:'].includes(url.protocol) || url.hostname !== '127.0.0.1' ||
    !(disposable || (url.port === '55432' && url.pathname === '/pratohub'))) {
  throw new Error('DATABASE_URL must point to the dedicated database or verified disposable test container');
}
const schema = `guard_test_${randomBytes(12).toString('hex')}`;
const scoped = new URL(url); scoped.searchParams.set('schema', schema);
const env = { ...process.env, DATABASE_URL: scoped.toString() };
const manager = new PrismaClient({ datasources: { db: { url: url.toString() } } });
const db = new PrismaClient({ datasources: { db: { url: scoped.toString() } } });
function run(command, args) {
  const result = spawnSync(command, args, { env, encoding: 'utf8', timeout: 120000 });
  if (result.status !== 0) throw new Error(`${command} failed: ${result.stderr}\n${result.stdout}`);
  console.log(result.stdout.trim());
}
async function reject(tx, sql, message) {
  await tx.$executeRawUnsafe('SAVEPOINT negative_case');
  let error;
  try { await tx.$executeRawUnsafe(sql); } catch (e) { error = e; }
  await tx.$executeRawUnsafe('ROLLBACK TO SAVEPOINT negative_case');
  await tx.$executeRawUnsafe('RELEASE SAVEPOINT negative_case');
  assert.ok(error, `Expected rejection: ${sql}`);
  assert.match(error.message, message);
}
async function snapshot() {
  const tables = ['taxonomy_nodes','materials','technologies','companies','company_sites','company_roles','company_capabilities','capability_materials','capability_technologies','sources','fact_assertions','assertion_sources','company_contacts'];
  const out = {};
  for (const table of tables) out[table] = await db.$queryRawUnsafe(`SELECT to_jsonb(t)::text AS row FROM "${table}" t ORDER BY to_jsonb(t)::text`);
  return out;
}
async function main() {
  await manager.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  try {
    // Replay the first three historical migrations, populate evidence, then upgrade.
    const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'pratohub-migrations-'));
    try {
      fs.copyFileSync('database/schema.prisma', path.join(temp, 'schema.prisma'));
      fs.mkdirSync(path.join(temp, 'migrations'));
      for (const name of ['migration_lock.toml','202610280001_baseline','202610280002_site_owner_guard','202610280003_taxonomy_identity']) {
        fs.cpSync(path.join('database/migrations', name), path.join(temp, 'migrations', name), { recursive: true });
      }
      run('./node_modules/.bin/prisma', ['migrate','deploy','--schema',path.join(temp, 'schema.prisma')]);
    } finally { fs.rmSync(temp, { recursive: true, force: true }); }
    await db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('00000000-0000-4000-8000-000000000030','upgrade-test','Upgrade')`);
    await db.$executeRawUnsafe(`INSERT INTO sources(id,url,title,publisher,source_kind) VALUES ('00000000-0000-4000-8000-000000000031','https://test.invalid/upgrade','Existing','Test','COMPANY_WEBSITE')`);
    await db.$executeRawUnsafe(`INSERT INTO company_contacts(company_id,contact_type,contact_value,source_id) VALUES ('00000000-0000-4000-8000-000000000030','PHONE','123','00000000-0000-4000-8000-000000000031')`);
    const beforeUpgrade = await snapshot();
    run('./node_modules/.bin/prisma', ['migrate','deploy','--schema','database/schema.prisma']);
    assert.deepEqual(await snapshot(), beforeUpgrade, 'Upgrade must preserve existing rows and contact evidence');
    run('node', ['database/seeds/seed.js']);
    const first = await snapshot();
    run('node', ['database/seeds/seed.js']);
    assert.deepEqual(await snapshot(), first, 'Repeated seed must preserve every row');
    for (const code of ['TX-12.01.01', 'TX-12.01', 'TX-12']) {
      await db.$executeRawUnsafe(`UPDATE taxonomy_nodes SET active=false WHERE code='${code}'`);
    }
    const inactiveSnapshot = await snapshot();
    run('node', ['database/seeds/seed.js']);
    assert.deepEqual(await snapshot(), inactiveSnapshot, 'Seed must not reactivate inactive nodes or overwrite data');
    // Transaction is intentionally rolled back, including all fixture records.
    const rollback = new Error('intentional rollback');
    try {
      await db.$transaction(async tx => {
        await tx.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ('00000000-0000-4000-8000-000000000001','GUARD-1',1,'test')`);
        await tx.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ('00000000-0000-4000-8000-000000000002','GUARD-1.1',2,'00000000-0000-4000-8000-000000000001','test'), ('00000000-0000-4000-8000-000000000003','GUARD-1.2',2,'00000000-0000-4000-8000-000000000001','test')`);
        await tx.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(id,code,level,parent_id,label_it) VALUES ('00000000-0000-4000-8000-000000000004','GUARD-1.1.1',3,'00000000-0000-4000-8000-000000000002','test')`);
        await reject(tx, `UPDATE taxonomy_nodes SET active=false WHERE code='GUARD-1'`, /active.*children/i);
        await reject(tx, `UPDATE taxonomy_nodes SET active=false WHERE code='GUARD-1.1'`, /active.*children/i);
        await tx.$executeRawUnsafe(`UPDATE taxonomy_nodes SET active=false WHERE code='GUARD-1.2'`);
        await tx.$executeRawUnsafe(`UPDATE taxonomy_nodes SET active=active, label_it='still inactive' WHERE code='GUARD-1.2'`);
        await reject(tx, `UPDATE taxonomy_nodes SET active=true WHERE code='GUARD-1.2'`, /reactivat/i);
        await reject(tx, `INSERT INTO taxonomy_nodes(code,level,parent_id,label_it) VALUES ('GUARD-1.2.1',3,'00000000-0000-4000-8000-000000000003','test')`, /active.*parent/i);
        await tx.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(code,level,parent_id,label_it,active) VALUES ('GUARD-1.2.2',3,'00000000-0000-4000-8000-000000000003','inactive',false)`);
        await tx.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('00000000-0000-4000-8000-000000000010','guard-test','Test')`);
        await tx.$executeRawUnsafe(`INSERT INTO company_capabilities(company_id,taxonomy_node_id) VALUES ('00000000-0000-4000-8000-000000000010','00000000-0000-4000-8000-000000000004')`);
        await reject(tx, `UPDATE taxonomy_nodes SET active=false WHERE code='GUARD-1.1.1'`, /referenced taxonomy leaf/i);
        await tx.$executeRawUnsafe(`INSERT INTO sources(id,url,title,publisher,source_kind) VALUES ('00000000-0000-4000-8000-000000000020','https://test.invalid/guard','Test','Test','COMPANY_WEBSITE'), ('00000000-0000-4000-8000-000000000021','https://test.invalid/unreferenced','Test','Test','COMPANY_WEBSITE')`);
        await tx.$executeRawUnsafe(`INSERT INTO company_contacts(company_id,contact_type,contact_value,source_id) VALUES ('00000000-0000-4000-8000-000000000010','PUBLIC_EMAIL','test@example.invalid','00000000-0000-4000-8000-000000000020')`);
        await reject(tx, `DELETE FROM sources WHERE id='00000000-0000-4000-8000-000000000020'`, /foreign key/i);
        const contacts = await tx.$queryRawUnsafe(`SELECT source_id::text FROM company_contacts WHERE company_id='00000000-0000-4000-8000-000000000010'`);
        assert.equal(contacts[0].source_id, '00000000-0000-4000-8000-000000000020');
        await tx.$executeRawUnsafe(`DELETE FROM sources WHERE id='00000000-0000-4000-8000-000000000021'`);
        throw rollback;
      }, { timeout: 30000 });
    } catch (error) { if (error !== rollback) throw error; }
    assert.deepEqual(await snapshot(), inactiveSnapshot, 'Fixture transaction must leave no rows behind');
    // A stale REPEATABLE READ snapshot must never allow the old deactivation.
    // The concurrent child commits only inside this disposable schema.
    await db.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(id,code,level,label_it) VALUES ('00000000-0000-4000-8000-000000000040','RACE',1,'test')`);
    await assert.rejects(db.$transaction(async tx => {
      await tx.$queryRawUnsafe(`SELECT id FROM taxonomy_nodes WHERE code='RACE'`);
      await db.$executeRawUnsafe(`INSERT INTO taxonomy_nodes(code,level,parent_id,label_it) VALUES ('RACE.1',2,'00000000-0000-4000-8000-000000000040','test')`);
      await tx.$executeRawUnsafe(`UPDATE taxonomy_nodes SET active=false WHERE code='RACE'`);
    }, { isolationLevel: 'RepeatableRead', timeout: 30000 }), /READ COMMITTED/i,
    'Stale REPEATABLE READ mutation must be rejected, not just reported');
    const badRace = await db.$queryRawUnsafe(`SELECT count(*)::int AS n FROM taxonomy_nodes c JOIN taxonomy_nodes p ON p.id=c.parent_id WHERE c.active AND NOT p.active`);
    assert.equal(badRace[0].n, 0, 'No active child may have an inactive parent');
    console.log('PASS: REPEATABLE READ stale snapshot rejected');
    console.log('PASS: isolated replay, seed idempotence, negative SQL cases and rollback');
  } finally {
    await db.$disconnect();
    await manager.$executeRawUnsafe(`DROP SCHEMA "${schema}" CASCADE`);
    const remaining = await manager.$queryRawUnsafe(`SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1`, schema);
    assert.equal(remaining.length, 0, 'Disposable schema must be removed');
    await manager.$disconnect();
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
