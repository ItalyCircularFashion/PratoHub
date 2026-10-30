import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://127.0.0.1:5178',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {},
  },
  webServer: {
    command: 'npm exec --workspace @pratohub/web -- vite preview --base /PratoHub/ --host 127.0.0.1 --port 5178 --strictPort',
    url: 'http://127.0.0.1:5178/PratoHub/',
    reuseExistingServer: false,
  },
});
