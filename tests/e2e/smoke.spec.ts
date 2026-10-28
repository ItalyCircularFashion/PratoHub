import { test, expect } from '@playwright/test';

const root = '/PratoHub/';
test('home, intelligence and navigation without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  const missing: string[] = [];
  page.on('response', r => { if (r.url().includes('/PratoHub/') && r.status() >= 400) missing.push(`${r.status()} ${r.url()}`); });
  await page.goto(root);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('La filiera tessile');
  await page.getByRole('link', { name: /Vai a Intelligence/ }).click();
  await expect(page.getByRole('heading', { name: /Conoscenza in prospettiva/ })).toBeVisible();
  await expect(page.getByText('Nessun contenuto disponibile')).toBeVisible();
  await page.getByRole('searchbox', { name: 'Cerca nell’archivio' }).fill('tessuto');
  await expect(page.getByText('0 contenuti disponibili')).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: /Conoscenza in prospettiva/ })).toBeVisible();
  expect(errors).toEqual([]); expect(missing).toEqual([]);
});

test('network filters, reset, taxonomy hierarchy and unapproved records', async ({ page }) => {
  await page.goto(`${root}#/network`);
  await expect(page.getByText('Nessun profilo disponibile')).toBeVisible();
  await expect(page.locator('body')).not.toContainText('Manteco');
  await page.getByLabel('Macroarea').selectOption('TX-06');
  await page.getByLabel('Processo').selectOption('TX-06.01');
  await page.getByLabel('Specializzazione').selectOption('TX-06.01.01');
  await page.getByLabel('Materiale').selectOption('WO');
  await page.getByLabel('Località').fill('Prato');
  await expect(page.getByText('0 profili trovati')).toBeVisible();
  await page.getByRole('button', { name: 'Azzera filtri' }).click();
  await expect(page.getByLabel('Macroarea')).toHaveValue('');
  await expect(page.getByLabel('Processo')).toBeDisabled();
  await page.getByRole('link', { name: /Esplora intanto la filiera/ }).click();
  await page.getByRole('button', { name: /Tessitura TX-06/ }).click();
  await page.getByRole('button', { name: /Tessitura ortogonale/ }).click();
  await expect(page.getByText('Tessitura di campionature')).toBeVisible();
  await expect(page.getByText('Produzione di tessuti operati')).toBeVisible();
  await page.goto(`${root}#/network/azienda/non-pubblicata`);
  await expect(page.getByText('Il profilo aziendale non è disponibile.')).toBeVisible();
  await page.goto(`${root}#/pagina-inesistente`);
  await expect(page.getByText('Questa pagina non esiste o non è disponibile.')).toBeVisible();
});

test('mobile menu and responsive geometry', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(root);
  const toggle = page.locator('.menu-toggle');
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation', { name: 'Navigazione mobile' }).getByRole('link', { name: 'Network' }).click();
  await expect(page.getByRole('heading', { name: /Le competenze della filiera/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Menu/ })).toHaveAttribute('aria-expanded', 'false');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
