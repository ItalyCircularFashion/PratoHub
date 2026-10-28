// Inspect only the exact directory uploaded to Pages. Do not log matched content
// or filenames: either can itself contain private information.
import { lstat, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../apps/web/dist');
const findings = new Map();
let files = 0;
let indexPresent = false;

function flag(reason) {
  findings.set(reason, (findings.get(reason) ?? 0) + 1);
}

// These are bounded checks, not proof that all possible private data is absent.
const contentChecks = [
  ['private key marker', /-----BEGIN (?:(?:RSA |DSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY|PGP PRIVATE KEY BLOCK)-----/i],
  ['known draft company', /\bmanteco\b/i],
  ['draft entity marker', /(?:["']?(?:status|publication_status|publicationStatus)["']?\s*[:=]\s*["']draft["']|\b(?:company[_-]?draft|draft[_-]?compan(?:y|ies))\b)/i],
  ['SQL statement', /\b(?:CREATE\s+(?:TABLE|SCHEMA|INDEX|TRIGGER|FUNCTION|VIEW|TYPE)|ALTER\s+TABLE|INSERT\s+INTO|DROP\s+(?:TABLE|SCHEMA)|COPY\s+\S+\s+FROM\s+STDIN)\b/i],
  ['source map reference', /sourceMappingURL\s*=/i],
];

async function scan(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  for (const entry of entries) {
    const target = path.join(dir, entry.name);
    const stat = await lstat(target);
    if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
      flag('unsupported filesystem entry');
      continue;
    }
    if (stat.isDirectory()) {
      await scan(target);
      continue;
    }
    files++;
    if (target === path.join(root, 'index.html') && stat.size > 0) indexPresent = true;
    if (stat.nlink !== 1) flag('hard-linked file');
    if (/\.(?:sql|map|sqlite|sqlite3|db)(?:$|\.)/i.test(entry.name)) flag('SQL database or source map filename');
    // Encapsulated content cannot be reliably inspected by this scanner.
    if (/\.(?:zip|tar|tgz|gz|br|7z|rar|bz2|xz|zst)$/i.test(entry.name)) flag('archive or compressed file');
    const bytes = await readFile(target);
    const text = bytes.toString('latin1');
    for (const [label, pattern] of contentChecks) {
      if (pattern.test(text)) flag(label);
    }
  }
}

try {
  const rootStat = await lstat(root);
  if (!rootStat.isDirectory() || rootStat.isSymbolicLink()) throw new Error('invalid root');
  await scan(root);
  if (files === 0 || !indexPresent) flag('missing nonempty index.html or empty build');
  if (findings.size) {
    console.error('Public build scan failed:');
    for (const [reason, count] of [...findings].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) {
      console.error(`- ${reason}: ${count}`);
    }
    process.exitCode = 1;
  } else {
    console.log(`Public build scan passed (${files} files).`);
  }
} catch {
  // A missing/unreadable directory or file is not safe to publish.
  console.error('Public build scan failed: build directory missing or unreadable.');
  process.exitCode = 1;
}
