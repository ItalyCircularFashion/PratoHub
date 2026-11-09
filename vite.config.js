import { resolve } from 'path';

const pages = [
  'index', 'news', 'article', 'discussions', 'thread',
  'questions', 'question', 'events', 'community',
  'market', 'company', 'notifications',
];

const __dirname = new URL('.', import.meta.url).pathname;

export default {
  root: '.',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map(p => [p, resolve(__dirname, `${p}.html`)])
      ),
    },
  },
  server: {
    port: 3000,
    open: '/index.html',
  },
};
