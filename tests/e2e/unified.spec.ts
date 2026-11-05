import { test, expect } from '@playwright/test';

const root = '/PratoHub/';

test('editorial home and operational dashboard coexist without replacing each other', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(root);
  await expect(page.locator('.ph-home')).toBeVisible();
  await expect(page.locator('.ph-textile-study img')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/La filiera tessile,\s*connessa\./);
  await page.getByRole('navigation', { name: 'Navigazione principale' }).getByRole('link', { name: 'Dashboard', exact: true }).click();
  await expect(page).toHaveURL(/#\/dashboard$/);
  await expect(page.getByRole('heading', { name: 'Nessun profilo pubblico disponibile' })).toBeVisible();
  await page.getByRole('button', { name: 'Prova la modalità DEMO' }).click();
  await expect(page.locator('.dashboard-company')).toHaveCount(12);
  await page.getByRole('button', { name: 'Torna ai dati pubblici' }).click();
  await expect(page).toHaveURL(/#\/dashboard$/);
  await expect(page.locator('.dashboard-company')).toHaveCount(0);
  await page.getByRole('navigation', { name: 'Navigazione principale' }).getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page.locator('.ph-home')).toBeVisible();
  expect(errors).toEqual([]);
});

test('legacy shared dashboard URLs still select the same filtered DEMO records', async ({ page }) => {
  await page.goto(`${root}#/?mode=demo&macroarea=TX-06`);
  await expect(page.locator('.dashboard-company')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Tessitura', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.reload();
  await expect(page.locator('.dashboard-company')).toHaveCount(1);
  await page.getByRole('button', { name: 'Azzera filtri' }).click();
  await expect(page.locator('.dashboard-company')).toHaveCount(12);
  await expect(page).toHaveURL(/#\/dashboard\?mode=demo$/);
});

test('learning map keeps all canonical macroarea codes and working deep links', async ({ page }) => {
  await page.goto(root);
  const map = page.locator('.learning-map');
  await expect(map).toBeVisible();
  const links = map.locator('a[href^="#/filiera?node="]');
  await expect(links).toHaveCount(12);
  const codes = await links.evaluateAll(nodes => nodes.map(node => new URLSearchParams(node.getAttribute('href')!.split('?')[1]).get('node')));
  expect([...codes].sort()).toEqual(Array.from({ length: 12 }, (_, i) => `TX-${String(i + 1).padStart(2, '0')}`));
  await map.locator('a[href="#/filiera?node=TX-06"]').click();
  await expect(page.locator('.taxonomy-option.active')).toContainText('Tessitura');
  await expect(page).toHaveURL(/#\/filiera\?node=TX-06$/);
});

test('glossary search, reset, category visibility and navigation use real terms', async ({ page }) => {
  await page.goto(`${root}#/intelligence?category=knowledge`);
  const glossary = page.locator('.learning-glossary');
  await expect(glossary).toBeVisible();
  const terms = glossary.locator('dt');
  const count = await terms.count();
  expect(count).toBeGreaterThanOrEqual(8);
  const search = glossary.getByRole('searchbox');
  await search.fill('OrDiTo');
  await expect(terms).not.toHaveCount(0);
  await search.fill('zz-termine-inesistente-zz');
  await expect(terms).toHaveCount(0);
  await expect(glossary.getByRole('status')).toContainText('0');
  await glossary.getByRole('button').click();
  await expect(terms).toHaveCount(count);
  await page.getByRole('navigation', { name: 'Categorie editoriali' }).getByRole('link', { name: 'Normative', exact: true }).click();
  await expect(glossary).toHaveCount(0);
  await page.getByRole('navigation', { name: 'Categorie editoriali' }).getByRole('link', { name: 'Tutti', exact: true }).click();
  await expect(page.locator('.learning-glossary dt')).toHaveCount(count);
});

test('tablet drawer exposes navigation and Escape restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(root);
  const toggle = page.locator('.menu-toggle');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  const menu = page.getByRole('navigation', { name: 'Navigazione mobile' });
  await expect(menu).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(toggle).toBeFocused();
});

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`unified home ${colorScheme}`, () => {
    test.use({ colorScheme, reducedMotion: 'reduce', locale: 'it-IT' });
    test('home and glossary stay readable and within all target viewports', async ({ page }) => {
      const errors: string[] = []; const failedAssets: string[] = []; const external: string[] = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('response', r => { if (r.status() >= 400) failedAssets.push(r.url()); });
      page.on('request', r => { if (new URL(r.url()).origin !== 'http://127.0.0.1:5178') external.push(r.url()); });
      for (const width of [1440, 768, 390, 320]) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of ['/', '/intelligence?category=knowledge']) {
          await page.goto(`${root}#${route}`);
          await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
          await page.evaluate(() => document.fonts.ready);
          await page.evaluate(() => new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r()))));
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${colorScheme} ${width}px ${route}`).toBe(true);
          if (route === '/') {
            expect(await page.locator('.ph-hero h1').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Space Grotesk');
            expect(await page.evaluate(() => document.fonts.check('500 16px "Space Grotesk"'))).toBe(true);
            await expect(page.locator('.learning-map')).toBeVisible();
          } else await expect(page.locator('.learning-glossary')).toBeVisible();
        }
      }
      expect(errors).toEqual([]); expect(failedAssets).toEqual([]); expect(external).toEqual([]);
    });
  });
}
