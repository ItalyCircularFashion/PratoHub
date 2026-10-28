import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: '/PratoHub/', plugins: [react()], server: { host: '127.0.0.1', port: 5173 } });
