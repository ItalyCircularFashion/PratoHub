import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
const root = '/PratoHub/';

test('public dashboard is styled, honest and independent of localhost APIs', async ({ page }) => {
  const errors: string[] = []; const badResponses: string[] = []; const apiRequests: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) badResponses.push(response.url()); });
  page.on('request', request => { if (request.url().includes('/api/')) apiRequests.push(request.url()); });
  await page.goto(root);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('La filiera tessile');
  await expect(page.getByRole('heading', { name: 'Nessun profilo pubblico disponibile' })).toBeVisible();
  await expect(page.locator('.dashboard-company')).toHaveCount(0);
  expect(await page.evaluate(() => document.styleSheets.length)).toBeGreaterThan(0);
  expect(await page.locator('body').evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(245, 243, 236)');
  expect(await page.locator('main').count()).toBe(1);
  expect(errors).toEqual([]); expect(badResponses).toEqual([]); expect(apiRequests).toEqual([]);
});

test('DEMO is explicit and search, macroareas, reset and pressed state agree', async ({ page }) => {
  await page.goto(root);
  await page.getByRole('button', { name: 'Prova la modalità DEMO' }).click();
  await expect(page.locator('.dashboard-company')).toHaveCount(12);
  await expect(page.getByRole('heading', { name: 'Modalità DEMO — dati sintetici' })).toBeVisible();
  await expect(page.locator('main')).not.toContainText('Manteco');
  const tessitura = page.getByRole('button', { name: 'Tessitura', exact: true });
  await tessitura.click(); await expect(tessitura).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.dashboard-company')).toHaveCount(1);
  await page.getByRole('searchbox', { name: 'Cerca nei profili DEMO' }).fill('inesistente');
  await expect(page.locator('.dashboard-company')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Nessun risultato per questi filtri' })).toBeVisible();
  await page.getByRole('button', { name: 'Azzera filtri' }).click();
  await expect(page.locator('.dashboard-company')).toHaveCount(12);
  await expect(page.getByRole('button', { name: 'Tutte le macroaree' })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Torna ai dati pubblici' }).click();
  await expect(page.locator('.dashboard-company')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Nessun profilo pubblico disponibile' })).toBeVisible();
});

test('shared DEMO URL survives reload without changing the public directory', async ({ page }) => {
  await page.goto(`${root}#/?mode=demo&macroarea=TX-06`);
  await expect(page.locator('.dashboard-company')).toHaveCount(1);
  await page.reload(); await expect(page.locator('.dashboard-company')).toHaveCount(1);
  await page.goto(`${root}#/network`);
  await expect(page.getByText('Nessun profilo disponibile')).toBeVisible();
  await expect(page.locator('main')).not.toContainText('Laboratorio Trama');
});

test('CSV download contains the filtered synthetic result and provenance', async ({ page }) => {
  await page.goto(`${root}#/?mode=demo&macroarea=TX-06`);
  const downloaded = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Esporta risultati CSV' }).click();
  const download = await downloaded;
  expect(download.suggestedFilename()).toBe('pratohub-demo.csv');
  const text = await readFile((await download.path())!, 'utf8');
  expect(text).toContain('DEMO — dati sintetici');
  expect(text).toContain('Laboratorio Trama 06');
  expect(text.trim().split(/\r?\n/)).toHaveLength(2);
});

test('Filiera to Network keeps hierarchical filters in the URL and after reload', async ({ page }) => {
  await page.goto(`${root}#/filiera?node=TX-06.01.01`);
  await page.getByRole('link', { name: 'Cerca nel Network' }).click();
  await expect(page.getByLabel('Macroarea')).toHaveValue('TX-06');
  await expect(page.getByLabel('Processo', { exact: false })).toHaveValue('TX-06.01');
  await expect(page.getByLabel('Specializzazione')).toHaveValue('TX-06.01.01');
  await page.reload();
  await expect(page.getByLabel('Specializzazione')).toHaveValue('TX-06.01.01');
  await page.getByRole('button', { name: 'Azzera filtri' }).click();
  await expect(page.getByLabel('Macroarea')).toHaveValue('');
  await expect(page.getByLabel('Processo', { exact: false })).toBeDisabled();
  expect(new URL(page.url()).hash).toBe('#/network');
});

test('taxonomy search, required fields and local Brief export work end to end', async ({ page }) => {
  await page.goto(`${root}#/filiera`);
  await page.getByRole('searchbox', { name: 'Cerca nella filiera' }).fill('garzatura');
  await expect(page.getByText('1 voce corrispondente')).toBeVisible();
  await page.locator('.taxonomy-search-result').click();
  await page.getByRole('link', { name: 'Prepara un brief' }).click();
  await expect(page.getByLabel('Lavorazione (obbligatoria)')).toHaveValue('TX-08.01.01');
  await page.getByRole('button', { name: 'Scarica JSON' }).click();
  await expect(page.getByRole('alert')).toContainText('Indica un titolo');
  await page.getByLabel('Titolo della richiesta').fill('TEST CQ — campionatura');
  await page.getByLabel('Quantità richiesta').fill('10,5');
  await page.getByLabel('Note e requisiti tecnici').fill('<script>window.unexpected=true</script>');
  const downloaded = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Scarica JSON' }).click();
  const download = await downloaded;
  const data = JSON.parse(await readFile((await download.path())!, 'utf8'));
  expect(data.mode).toBe('local-document-not-submitted');
  expect(data.quantity).toEqual({ value: 10.5, unit: 'm' });
  expect(data.taxonomy.at(-1).code).toBe('TX-08.01.01');
  expect(await page.evaluate(() => 'unexpected' in window)).toBe(false);
  await page.getByRole('link', { name: 'Come sono trattati i dati' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Dati e strumenti');
  await expect(page.getByRole('heading', { name: 'Brief: nessun invio' })).toBeVisible();
});

test('mobile menu supports Escape, navigation and the skip link', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 }); await page.goto(root);
  const toggle = page.locator('.menu-toggle');
  await toggle.click(); await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape'); await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused(); await toggle.click();
  await page.getByRole('navigation', { name: 'Navigazione mobile' }).getByRole('link', { name: 'Filiera', exact: true }).click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('main')).toBeFocused();
  await page.goto(root); await page.keyboard.press('Tab'); await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('all primary screens stay within desktop, tablet and small mobile viewports', async ({ page }) => {
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/?mode=demo', '/network', '/filiera', '/brief', '/privacy', '/intelligence']) {
      await page.goto(`${root}#${route}`); await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px ${route}`).toBe(true);
    }
  }
});

test('missing records and routes have an explicit empty state', async ({ page }) => {
  await page.goto(`${root}#/network/azienda/non-pubblicata`);
  await expect(page.getByText('Il profilo aziendale non è disponibile.')).toBeVisible();
  await page.goto(`${root}#/pagina-inesistente`);
  await expect(page.getByText('Questa pagina non esiste o non è disponibile.')).toBeVisible();
});
