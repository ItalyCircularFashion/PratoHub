const { PrismaClient } = require('@prisma/client');
const fs = require('node:fs'); const path = require('node:path');
const db = new PrismaClient();
function splitSql(sql) {
 const result = []; let start = 0; let quoted = false;
 for (let i = 0; i < sql.length; i++) {
  if (sql[i] === "'") {
   if (quoted && sql[i + 1] === "'") { i++; continue; }
   quoted = !quoted;
  } else if (sql[i] === ';' && !quoted) {
   const s = sql.slice(start, i).trim(); if (s) result.push(s); start = i + 1;
  }
 }
 if (quoted || sql.slice(start).trim()) throw new Error('Invalid seed SQL');
 return result;
}
async function main() {
 for (const f of ['01_taxonomy.sql','02_materials.sql','03_technologies.sql','04_manteco.sql']) {
  const sql = fs.readFileSync(path.join(__dirname,f),'utf8').replace(/^--.*$/gm,'');
  const statements = splitSql(sql);
  await db.$transaction(async tx => { for (const s of statements) await tx.$executeRawUnsafe(s); });
  console.log('Seed applied:', f);
 }
}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>db.$disconnect());
