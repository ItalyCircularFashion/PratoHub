import 'reflect-metadata';
import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma.service';

describe('WP01 admin su schema PostgreSQL di test isolato', () => {
 let app: INestApplication; let db: PrismaService; let manager: PrismaClient;
 const originalUrl=process.env.DATABASE_URL; const oldToken=process.env.PRATOHUB_ADMIN_TOKEN; const oldActor=process.env.PRATOHUB_ADMIN_ACTOR;
 const schema='wp01_test_'+randomBytes(8).toString('hex'); const token=randomBytes(32).toString('hex');
 const base='/api/v1/admin/taxonomy'; const root='TX-99'; const child='TX-99.01'; const leaf='TX-99.01.01';
 const actor='Operatore DEMO di test isolato';
 beforeAll(async () => {
  if (!originalUrl) throw new Error('DATABASE_URL deve indicare il DB dedicato');
  const u=new URL(originalUrl); if (u.hostname !== '127.0.0.1' || u.port !== '55432' || u.pathname !== '/pratohub') throw new Error('Test consentiti solo sul DB dedicato');
  manager=new PrismaClient({datasources:{db:{url:originalUrl}}});
  await manager.$executeRawUnsafe(`CREATE SCHEMA "${schema}"`);
  u.searchParams.set('schema',schema); process.env.DATABASE_URL=u.toString();
  const repo=path.resolve(__dirname,'../../..');
  execFileSync(path.join(repo,'node_modules/.bin/prisma'),['migrate','deploy','--schema',path.join(repo,'database/schema.prisma')],{cwd:repo,env:process.env,stdio:'ignore'});
  execFileSync(process.execPath,[path.join(repo,'database/seeds/seed.js')],{cwd:repo,env:process.env,stdio:'ignore'});
  process.env.PRATOHUB_ADMIN_TOKEN=token; process.env.PRATOHUB_ADMIN_ACTOR=actor;
  const module=await Test.createTestingModule({imports:[AppModule]}).compile(); app=module.createNestApplication({logger:false}); app.setGlobalPrefix('api/v1'); await app.init(); db=app.get(PrismaService);
 }, 120000);
 afterAll(async () => {
  if (app) await app.close();
  if (manager) { await manager.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`); await manager.$disconnect(); }
  if (originalUrl === undefined) delete process.env.DATABASE_URL; else process.env.DATABASE_URL=originalUrl;
  if (oldToken === undefined) delete process.env.PRATOHUB_ADMIN_TOKEN; else process.env.PRATOHUB_ADMIN_TOKEN=oldToken;
  if (oldActor === undefined) delete process.env.PRATOHUB_ADMIN_ACTOR; else process.env.PRATOHUB_ADMIN_ACTOR=oldActor;
 });
 it('nega richieste anonime, token errato e configurazione incompleta', async () => {
  await request(app.getHttpServer()).get(base).expect(401);
  await request(app.getHttpServer()).post(base).send({code:root,label_it:'DEMO'}).expect(401);
  await request(app.getHttpServer()).get(base).set('Authorization','Bearer '+randomBytes(32).toString('hex')).expect(401);
  delete process.env.PRATOHUB_ADMIN_TOKEN;
  await request(app.getHttpServer()).get(base).set('Authorization','Bearer '+token).expect(401);
  process.env.PRATOHUB_ADMIN_TOKEN=token; delete process.env.PRATOHUB_ADMIN_ACTOR;
  await request(app.getHttpServer()).get(base).set('Authorization','Bearer '+token).expect(401);
  process.env.PRATOHUB_ADMIN_ACTOR='REPLACE_WITH_REAL_OPERATOR_ID';
  await request(app.getHttpServer()).get(base).set('Authorization','Bearer '+token).expect(401);
  process.env.PRATOHUB_ADMIN_ACTOR=actor;
 });
 it('crea tre livelli DEMO, convalida input, aggiorna, disattiva e audita atomicamente', async () => {
  const api=request(app.getHttpServer()); const auth='Bearer '+token;
  expect((await api.get(base).set('Authorization',auth).expect(200)).body.items).toHaveLength(41);
  await api.post(base).set('Authorization',auth).send({code:root,label_it:'  '}).expect(400);
  await api.post(base).set('Authorization',auth).send({code:'TX-xx',label_it:'DEMO'}).expect(400);
  await api.post(base).set('Authorization',auth).send({code:child,parent_code:'TX-01',label_it:'DEMO'}).expect(400);
  await api.post(base).set('Authorization',auth).send({code:child,parent_code:root,label_it:'DEMO'}).expect(400);
  await api.post(base).set('Authorization',auth).send({code:root,label_it:'DEMO radice',taxonomy_version:'other'}).expect(400);
  const r=await api.post(base).set('Authorization',auth).send({code:root,label_it:'DEMO radice'}).expect(201);
  await api.post(base).set('Authorization',auth).send({code:child,parent_code:root,label_it:'DEMO processo'}).expect(201);
  const l=await api.post(base).set('Authorization',auth).send({code:leaf,parent_code:child,label_it:'DEMO specializzazione'}).expect(201);
  await api.post(base).set('Authorization',auth).send({code:root,label_it:'DEMO duplicato'}).expect(409);
  await api.patch(base+'/'+leaf).set('Authorization',auth).send({code:'TX-99.01.02'}).expect(400);
  await api.patch(base+'/'+leaf).set('Authorization',auth).send({sort_order:32768}).expect(400);
  await api.patch(base+'/'+leaf).set('Authorization',auth).send({label_it:'DEMO aggiornato',label_en:null,sort_order:2}).expect(200);
  await api.delete(base+'/'+root).set('Authorization',auth).expect(409);
  await api.delete(base+'/TX-11.01.01').set('Authorization',auth).expect(409);
  await api.delete(base+'/'+leaf).set('Authorization',auth).expect(200);
  await api.post(base).set('Authorization',auth).send({code:leaf,parent_code:child,label_it:'DEMO riuso'}).expect(409);
  await api.patch(base+'/'+leaf).set('Authorization',auth).send({label_it:'DEMO riattivazione'}).expect(409);
  await api.delete(base+'/'+child).set('Authorization',auth).expect(200);
  await api.post(base).set('Authorization',auth).send({code:'TX-99.01.02',parent_code:child,label_it:'DEMO'}).expect(400);
  await api.delete(base+'/'+root).set('Authorization',auth).expect(200);
  expect((await api.get(base+'/'+leaf).set('Authorization',auth).expect(200)).body).toMatchObject({active:false,label_it:'DEMO aggiornato'});
  expect((await api.get('/api/v1/taxonomy').expect(200)).body.items).toHaveLength(41);
  const events=await db.audit_events.findMany({where:{entity_id:l.body.id},orderBy:{id:'asc'}});
  expect(events.map(e=>e.action)).toEqual(['CREATE','UPDATE','ARCHIVE']);
  expect(events.every(e=>e.actor===actor)).toBe(true);
  expect(events[1].before_jsonb).toMatchObject({label_it:'DEMO specializzazione',active:true});
  expect(events[2].after_jsonb).toMatchObject({label_it:'DEMO aggiornato',active:false});
  await expect(db.taxonomy_nodes.delete({where:{id:r.body.id}})).rejects.toThrow();
  await expect(db.taxonomy_nodes.update({where:{id:l.body.id},data:{code:'TX-99.01.03'}})).rejects.toThrow();
  expect(await db.taxonomy_nodes.count({where:{id:l.body.id,active:false}})).toBe(1);
 });
 it('annulla la creazione se la scrittura audit fallisce', async () => {
  await db.$executeRaw`ALTER TABLE audit_events ADD CONSTRAINT test_audit_refuse CHECK (actor <> 'Operatore DEMO di test isolato') NOT VALID`;
  try {
   await request(app.getHttpServer()).post(base).set('Authorization','Bearer '+token).send({code:'TX-98',label_it:'DEMO rollback'}).expect(500);
   expect(await db.taxonomy_nodes.findUnique({where:{taxonomy_version_code:{taxonomy_version:'PRATOHUB-TX-1.0',code:'TX-98'}}})).toBeNull();
  } finally { await db.$executeRaw`ALTER TABLE audit_events DROP CONSTRAINT test_audit_refuse`; }
 });
 it('limita le richieste amministrative', async () => {
  let limited=false;
  for (let i=0; i<130; i++) { const response=await request(app.getHttpServer()).get(base); if (response.status===429) { limited=true; break; } }
  expect(limited).toBe(true);
 });
});
