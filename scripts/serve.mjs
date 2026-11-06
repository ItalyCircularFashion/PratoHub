import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = '/PratoHub/';
const port = Number(process.env.PORT || 4187);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.woff2': 'font/woff2' };
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    if (pathname === '/PratoHub') { response.writeHead(301, { Location: base }); response.end(); return; }
    if (!pathname.startsWith(base)) { response.writeHead(404); response.end('Not found'); return; }
    let file = path.resolve(root, pathname.slice(base.length));
    if (file !== root.slice(0, -1) && !file.startsWith(root)) { response.writeHead(403); response.end(); return; }
    let code = 200;
    try {
      if ((await stat(file)).isDirectory()) {
        if (!pathname.endsWith('/')) { response.writeHead(301, { Location: pathname + '/' }); response.end(); return; }
        file = path.join(file, 'index.html');
      }
      await stat(file);
    } catch { file = path.join(root, '404.html'); code = 404; }
    const body = await readFile(file);
    response.writeHead(code, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Content-Length': body.length, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(400); response.end('Invalid request'); }
});
server.listen(port, '127.0.0.1', () => console.log(`PratoHub preview: http://127.0.0.1:${port}${base}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
