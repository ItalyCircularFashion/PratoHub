import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', port: 5173,
    // Development only. Production on Pages is a static public catalog;
    // it never attempts to contact a visitor's localhost or the draft API.
    proxy: { '/api': { target: 'http://127.0.0.1:3000', changeOrigin: true } },
  },
});
