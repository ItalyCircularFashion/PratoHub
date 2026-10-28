import { test, expect } from '@playwright/test';
test('local placeholder renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'PratoHub Local Alpha' })).toBeVisible();
});
