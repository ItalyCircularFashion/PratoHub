import { test, expect } from '@playwright/test';
import assert from 'node:assert/strict';

test('home e percorsi principali', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('h1')).toContainText('Un distretto');
  await expect(page.getByRole('navigation', { name: 'Navigazione principale' })).toContainText('Ecobalyse');
  for (const path of ['news/', 'news/distretto-prato/', 'news/sostenibilita/', 'news/tecnologie-tessili/', 'market/', 'aziende/', 'aziende/filature/', 'aziende/tessiture/', 'aziende/tintorie/', 'aziende/rifinizioni/', 'community/', 'community/discussions/', 'community/questions/', 'events/', 'ecobalyse/', 'progetto/', 'privacy/']) {
    const response = await page.goto(path);
    assert.equal(response.status(), 200, `${path}`);
    await expect(page.locator('h1')).toHaveCount(1);
  }
});

test('ecobalyse è link-out senza iframe né fetch API', async ({ page }) => {
  await page.goto('ecobalyse/');
  await expect(page.locator('iframe')).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Apri la versione corrente/ })).toHaveAttribute('href', 'https://ecobalyse.beta.gouv.fr/#/textile/simulator');
  const scripts = await page.locator('script[src]').evaluateAll(nodes => nodes.map(n => n.getAttribute('src')));
  expect(scripts.some(src => src && src.includes('ecobalyse'))).toBe(false);
});

test('registro fonti primarie con 7 righe', async ({ page }) => {
  await page.goto('progetto/');
  const rows = page.locator('.fonti-table tbody tr');
  await expect(rows).toHaveCount(7);
  await expect(page.locator('.fonti-table')).toContainText('Textile Exchange');
  await expect(page.locator('.fonti-table')).toContainText('Molto alta');
  await page.goto('market/');
  await expect(page.locator('.fonti-table tbody tr')).toHaveCount(7);
});

test('scheda articolo e scheda azienda', async ({ page }) => {
  await page.goto('news/prato-circolarita-filiera-tessile/');
  await expect(page.locator('h1')).toContainText('circolarità');
  await expect(page.locator('#fonti a').first()).toBeVisible();
  await page.goto('aziende/gruppo-colle/');
  await expect(page.locator('h1')).toContainText('Gruppo Colle');
});
