// Run: node database/seeds/test_manteco_isolated.js
// Starts and removes its own disposable PostgreSQL container; never uses DATABASE_URL.
const { execFileSync } = require('node:child_process');
const { randomBytes } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { PrismaClient } = require('@prisma/client');
const root = path.resolve(__dirname, '../..');
const name = 'pratohub-seed-test-' + randomBytes(8).toString('hex');
const password = randomBytes(16).toString('hex');
const company = '11111111-1111-4111-8111-111111111111';
const capability = '22222222-2222-4222-8222-222222222222';
const assertion = '33333333-3333-4333-8333-333333333331';
const other = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const gazette = 'https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07';
function docker(...args) { return execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore','pipe','pipe'] }).trim(); }
function statements(sql) {
 let start=0, quoted=false, out=[];
 for (let i=0;i<sql.length;i++) {
  if (sql[i]==="'") { if (quoted && sql[i+1]==="'") { i++; continue; } quoted=!quoted; }
  else if (sql[i]===';' && !quoted) { const s=sql.slice(start,i).trim(); if(s) out.push(s); start=i+1; }
 }
 if (quoted || sql.slice(start).trim()) throw new Error('Invalid seed SQL');
 return out;
}
// Only demo names/URLs are substituted; identifiers, structure and source matching remain identical.
const demo = fs.readFileSync(path.join(__dirname,'04_manteco.sql'),'utf8')
 .replaceAll('Manteco','Demo').replaceAll('manteco','demo');
const taxonomy = fs.readFileSync(path.join(__dirname,'01_taxonomy.sql'),'utf8');
async function apply(db, sql) {
 await db.$transaction(async tx => { for (const s of statements(sql.replace(/^--.*$/gm,''))) await tx.$executeRawUnsafe(s); }, {timeout:30000});
}
async function snapshot(db) {
 const tables=['taxonomy_nodes','materials','technologies','companies','company_sites','company_roles','company_capabilities','sources','fact_assertions','assertion_sources'];
 const result={};
 for (const t of tables) result[t]=await db.$queryRawUnsafe(`SELECT COALESCE(jsonb_agg(to_jsonb(x) ORDER BY to_jsonb(x)::text),'[]'::jsonb) AS rows FROM ${t} x`);
 return result;
}
async function reset(db) {
 for (const t of ['assertion_sources','fact_assertions','company_capabilities','company_roles','company_sites','companies','sources']) await db.$executeRawUnsafe(`DELETE FROM ${t}`);
}
async function main() {
 let db;
 try {
  docker('run','-d','--rm','--name',name,'--tmpfs','/var/lib/postgresql/data:rw','-e',`POSTGRES_PASSWORD=${password}`,'-e','POSTGRES_USER=seedtest','-e','POSTGRES_DB=seedtest','-p','127.0.0.1::5432','postgres:16-alpine');
  for (let i=0;i<60;i++) { try { docker('exec',name,'pg_isready','-U','seedtest','-d','seedtest'); break; } catch { await new Promise(r=>setTimeout(r,500)); if(i===59) throw new Error('PostgreSQL not ready'); } }
  const port=docker('port',name,'5432/tcp').match(/:(\d+)$/)?.[1];
  if (!port) throw new Error('No loopback port');
  const url=`postgresql://seedtest:${password}@127.0.0.1:${port}/seedtest?schema=public`;
  execFileSync(path.join(root,'node_modules/.bin/prisma'),['migrate','deploy','--schema',path.join(root,'database/schema.prisma')],{cwd:root,env:{...process.env,DATABASE_URL:url},stdio:'pipe'});
  db=new PrismaClient({datasources:{db:{url}}});
  await apply(db,taxonomy);
  const run=()=>apply(db,demo);
  // Exercise the real runner too, intercepting only its seed file read to use Demo.
  const runner=`const fs=require('node:fs'); const read=fs.readFileSync; fs.readFileSync=function(p,...a){ const v=read.call(this,p,...a); return typeof p==='string' && p.endsWith('/04_manteco.sql') && typeof v==='string' ? v.replaceAll('Manteco','Demo').replaceAll('manteco','demo') : v; }; require('./database/seeds/seed.js');`;
  const runActualRunner=()=>execFileSync(process.execPath,['-e',runner],{cwd:root,env:{...process.env,DATABASE_URL:url},stdio:'pipe'});
  await db.$executeRawUnsafe("INSERT INTO sources(url,title,publisher,source_kind) VALUES ('https://example.test/other-gazzetta','Demo unrelated','Gazzetta Ufficiale','THIRD_PARTY')");
  runActualRunner(); const first=await snapshot(db); runActualRunner(); assert.deepEqual(await snapshot(db),first,'full rows must remain identical on rerun');
  const links=await db.$queryRawUnsafe(`SELECT f.field_path,s.url FROM assertion_sources a JOIN fact_assertions f ON f.id=a.assertion_id JOIN sources s ON s.id=a.source_id WHERE s.publisher='Gazzetta Ufficiale'`);
  assert.equal(links.length,3); assert.ok(links.every(x=>x.url===gazette),'unrelated publisher source was linked');
  console.log('PASS: two runs, full-row idempotence and exact source URL');
  const cases=[
   ['company UUID collision', async()=>db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('${company}','demo-other','Demo altra impresa')`)],
   ['company slug collision', async()=>db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('${other}','demo','Demo altra impresa')`)],
   ['site identity mismatch', async()=>{ await db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name,trade_name,vat_number,tax_code,website_url,summary) VALUES ('${company}','demo','Demo S.p.A.','Demo','00297290975','03329250488','https://demo.com/','Sviluppo di tessuti e coordinamento di una rete produttiva tessile secondo MSystem.')`); await db.$executeRawUnsafe(`INSERT INTO company_sites(company_id,site_kind,city,is_primary) VALUES ('${company}','HEADQUARTERS','Demo altra sede',true)`); }],
   ['capability UUID collision', async()=>{ await db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('${other}','demo-other','Demo altra impresa')`); await db.$executeRawUnsafe(`INSERT INTO company_capabilities(id,company_id,taxonomy_node_id) SELECT '${capability}','${other}',id FROM taxonomy_nodes WHERE code='TX-11.01.01' AND taxonomy_version='PRATOHUB-TX-1.0'`); }],
   ['assertion UUID collision', async()=>{ await db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name) VALUES ('${other}','demo-other','Demo altra impresa')`); await db.$executeRawUnsafe(`INSERT INTO fact_assertions(id,company_id,scope,field_path,value_jsonb) VALUES ('${assertion}','${other}','COMPANY','legal_name','"Demo altra impresa"')`); }],
   ['source URL metadata mismatch', async()=>db.$executeRawUnsafe(`INSERT INTO sources(url,title,publisher,source_kind) VALUES ('${gazette}','Demo fonte errata','Demo altro editore','THIRD_PARTY')`)],
   ['company VAT collision', async()=>db.$executeRawUnsafe(`INSERT INTO companies(id,slug,legal_name,vat_number) VALUES ('${other}','demo-other','Demo altra impresa','00297290975')`)],
   ['capability execution mismatch', async()=>{ await run(); await db.$executeRawUnsafe(`UPDATE company_capabilities SET execution_mode='DIRECT' WHERE id='${capability}'`); }],
   ['assertion value mismatch for same company', async()=>{ await run(); await db.$executeRawUnsafe(`UPDATE fact_assertions SET value_jsonb='"Demo diverso"' WHERE id='${assertion}'`); }],
   ['disputed assertion mismatch', async()=>{ await run(); await db.$executeRawUnsafe(`UPDATE fact_assertions SET reviewer_note='Demo diverso' WHERE id='33333333-3333-4333-8333-333333333336'`); }],
   ['existing source link detail mismatch', async()=>{ await run(); await db.$executeRawUnsafe(`UPDATE assertion_sources SET supporting_detail='Demo diverso' WHERE assertion_id='33333333-3333-4333-8333-333333333336'`); }],
   ['privacy source mismatch', async()=>{ await run(); await db.$executeRawUnsafe(`UPDATE sources SET publisher='Demo diverso' WHERE url='https://demo.com/privacy-policy/'`); }],
  ];
  for (const [label, fixture] of cases) {
   await reset(db); await fixture(); const before=await snapshot(db);
   await assert.rejects(run, /Seed .* mismatch/, `${label} must fail on its guard`);
   assert.deepEqual(await snapshot(db),before,`${label} must roll back completely`);
   assert.throws(runActualRunner, /Command failed/, `${label} must fail through the real runner`);
   assert.deepEqual(await snapshot(db),before,`${label} must roll back through the real runner`);
   console.log('PASS:',label,'and rollback');
  }
 } finally {
  if (db) await db.$disconnect();
  try { docker('rm','-f',name); } catch { /* container may not have started */ }
 }
}
main().catch(e=>{ console.error(e); process.exitCode=1; });
