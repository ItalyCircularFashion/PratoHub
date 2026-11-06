import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4187/PratoHub/' },
  webServer: {
    command: 'npm run build && PORT=4187 node scripts/serve.mjs',
    url: 'http://127.0.0.1:4187/PratoHub/',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
