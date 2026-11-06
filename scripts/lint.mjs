import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
let count = 0;
for (const folder of ['portal', 'scripts', 'tests']) {
  for (const file of await walk(path.join(root, folder))) {
    if (/\.(?:mjs|js)$/.test(file)) {
      const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
      if (result.status !== 0) throw new Error(result.stderr);
      count += 1;
    }
    if (file.endsWith('.css')) {
      const css = await readFile(file, 'utf8');
      if (/var\s+var\(|\}\}|\{\{/.test(css)) throw new Error(`CSS token error: ${file}`);
    }
  }
}
console.log(`LINT PASS: ${count} JavaScript modules checked; CSS token guards clean.`);
