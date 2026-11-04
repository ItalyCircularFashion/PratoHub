import { test, expect, type Page } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const root = '/PratoHub/';
test.use({ locale: 'en-US' });

declare global {
  interface Window {
    __cqCopy: { value: string; finish?: () => void };
  }
}

async function stubClipboard(page: Page, deferred = false) {
  await page.addInitScript(defer => {
    window.__cqCopy = { value: '' };
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value: string) => {
          window.__cqCopy.value = value;
          if (defer) await new Promise<void>(resolve => { window.__cqCopy.finish = resolve; });
        },
      },
    });
  }, deferred);
}

async function openShare(page: Page) {
  await page.goto(`${root}#/?mode=demo`);
  await page.locator('.share-tools summary').click();
  return page.locator('.share-tools');
}

test('copy confirmation does not describe a different, newly filtered link', async ({ page }) => {
  await stubClipboard(page);
  const share = await openShare(page);
  await share.getByRole('button', { name: 'Copia link', exact: true }).click();
  await expect(share.getByRole('status')).toHaveText('Link copiato.');
  const copied = await page.evaluate(() => window.__cqCopy.value);
  await page.getByRole('searchbox', { name: 'Cerca nei profili DEMO' }).fill('inesistente');
  await expect(share.getByRole('textbox', { name: 'Link pubblico' })).not.toHaveValue(copied);
  await expect(share.getByRole('status')).toHaveText('');
});

test('late clipboard completion cannot confirm a newer route', async ({ page }) => {
  await stubClipboard(page, true);
  const share = await openShare(page);
  await share.getByRole('button', { name: 'Copia link', exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(window.__cqCopy.finish))).toBe(true);
  const copied = await page.evaluate(() => window.__cqCopy.value);
  await page.getByRole('searchbox', { name: 'Cerca nei profili DEMO' }).fill('inesistente');
  await expect(share.getByRole('textbox', { name: 'Link pubblico' })).not.toHaveValue(copied);
  await page.evaluate(async () => {
    window.__cqCopy.finish?.();
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  });
  await expect(share.getByRole('status')).toHaveText('');
});

test('English navigation declares its language without relabelling Italian content', async ({ page }) => {
  await page.goto(root);
  await expect(page.locator('html')).toHaveAttribute('lang', 'it');
  const link = page.getByRole('navigation', { name: 'Navigazione principale' })
    .getByRole('link', { name: 'Supply chain', exact: true });
  await expect(link).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('La filiera tessile');
});

async function prepareBrief(page: Page, node = 'TX-06.01.01') {
  await page.goto(`${root}#/brief?node=${node}`);
  await page.getByLabel('Titolo della richiesta').fill('TEST CQ — documento locale');
}

async function enterPartialDate(page: Page) {
  const date = page.getByLabel('Data richiesta');
  await date.fill('2026-11-20'); await date.focus();
  await page.keyboard.press('ArrowLeft'); await page.keyboard.press('Backspace');
  await page.keyboard.press('Tab');
  expect(await date.evaluate((element: HTMLInputElement) => element.validity.badInput)).toBe(true);
  await expect(date).toHaveValue('');
  return date;
}

for (const format of ['JSON', 'TXT']) {
  test(`partial native date blocks ${format} export instead of silently omitting it`, async ({ page }) => {
    await prepareBrief(page); await enterPartialDate(page);
    let downloads = 0; page.on('download', () => downloads++);
    await page.getByRole('button', { name: format === 'JSON' ? 'Scarica JSON' : 'Scarica brief TXT' }).click();
    await expect(page.getByRole('alert')).toContainText('data valida');
    expect(downloads).toBe(0);
    await expect(page.getByLabel('Data richiesta')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('.brief-preview-content')).toHaveCount(0);
    await page.getByLabel('Data richiesta').fill('2026-11-20');
    await expect(page.getByRole('alert')).toHaveCount(0);
    const downloaded = page.waitForEvent('download');
    await page.getByRole('button', { name: format === 'JSON' ? 'Scarica JSON' : 'Scarica brief TXT' }).click();
    const file = await downloaded;
    const text = await readFile((await file.path())!, 'utf8');
    if (format === 'JSON') expect(JSON.parse(text).requestedDate).toBe('2026-11-20');
    else expect(text).toContain('Data richiesta: 2026-11-20');
  });
}

test('reset removes partial native date segments as well as React values', async ({ page }) => {
  await prepareBrief(page); const date = await enterPartialDate(page);
  await page.getByRole('button', { name: 'Svuota campi', exact: true }).click();
  await expect(page.getByLabel('Titolo della richiesta')).toHaveValue('');
  await expect(date).toHaveValue('');
  expect(await date.evaluate((element: HTMLInputElement) => element.validity.badInput)).toBe(false);
  await expect(page.getByRole('alert')).toHaveCount(0);
});

for (const node of ['TX-06.01.01', 'TX-06.01']) {
  test(`active Brief navigation preserves the draft and selected ${node}`, async ({ page }) => {
    await prepareBrief(page, node);
    await page.getByLabel('Quantità richiesta').fill('12,5');
    await page.getByLabel('Note e requisiti tecnici').fill('TEST CQ — non perdere questa nota');
    const mobile = await page.locator('.menu-toggle').isVisible();
    if (mobile) await page.locator('.menu-toggle').click();
    await page.getByRole('navigation', { name: mobile ? 'Navigazione mobile' : 'Navigazione principale' }).getByRole('link', { name: 'Brief', exact: true }).click();
    await expect(page).toHaveURL(/#\/brief$/);
    await expect(page.getByLabel('Titolo della richiesta')).toHaveValue('TEST CQ — documento locale');
    await expect(page.getByLabel('Quantità richiesta')).toHaveValue('12,5');
    await expect(page.getByLabel('Note e requisiti tecnici')).toHaveValue('TEST CQ — non perdere questa nota');
    await expect(page.getByLabel('Lavorazione (obbligatoria)')).toHaveValue(node);
  });
}

test('Brief errors describe the invalid control and the actual preview blocker', async ({ page }) => {
  await prepareBrief(page);
  const quantity = page.getByLabel('Quantità richiesta'); await quantity.fill('-1');
  await page.getByRole('button', { name: 'Scarica JSON' }).click();
  await expect(page.getByRole('alert')).toContainText('quantità');
  await expect(quantity).toHaveAttribute('aria-invalid', 'true');
  const describedBy = (await quantity.getAttribute('aria-describedby') || '').split(/\s+/);
  expect(describedBy).toContain('quantity-hint');
  expect(describedBy).toContain('brief-quantity-error');
  await expect(page.locator('#brief-quantity-error')).toContainText('quantità');
  await expect(page.locator('.brief-preview')).toContainText('Correggi i campi non validi');
  await expect(page.locator('.brief-preview')).not.toContainText('Compila titolo e lavorazione');
});

test('editing another field does not dismiss unresolved Brief errors', async ({ page }) => {
  await prepareBrief(page);
  const quantity = page.getByLabel('Quantità richiesta'); await quantity.fill('-1');
  await page.getByRole('button', { name: 'Scarica JSON' }).click();
  await expect(page.getByRole('alert')).toContainText('quantità');
  await page.getByLabel('Note e requisiti tecnici').fill('TEST CQ — modifica estranea alla quantità');
  await expect(page.getByRole('alert')).toContainText('quantità');
  await expect(quantity).toHaveAttribute('aria-invalid', 'true');
  await quantity.fill('10,5');
  await expect(page.getByRole('alert')).toHaveCount(0);
  await expect(quantity).not.toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('.brief-preview-content')).toContainText('10.5 m');
});

for (const colorScheme of ['light', 'dark'] as const) {
  test(`selected taxonomy keyboard focus contrasts with its inset fill in ${colorScheme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${root}#/filiera?node=TX-06.01.01`);
    const selected = page.locator('.taxonomy-option.active').first();
    for (let i = 0; i < 70 && !await selected.evaluate(element => element === document.activeElement); i++) await page.keyboard.press('Tab');
    await expect(selected).toBeFocused();
    const focus = await selected.evaluate(element => {
      const style = getComputedStyle(element);
      const luminance = (color: string) => {
        const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map(channel => {
          const value = channel / 255; return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
        });
        return channels.reduce((sum, value, i) => sum + value * [.2126, .7152, .0722][i], 0);
      };
      const values = [luminance(style.outlineColor), luminance(style.backgroundColor)].sort((a, b) => a - b);
      return { visible: element.matches(':focus-visible'), width: parseFloat(style.outlineWidth), offset: parseFloat(style.outlineOffset), contrast: (values[1] + .05) / (values[0] + .05) };
    });
    expect(focus.visible).toBe(true); expect(focus.width).toBeGreaterThanOrEqual(2);
    expect(focus.offset).toBeLessThan(0); expect(focus.contrast).toBeGreaterThanOrEqual(3);
  });
}

test('Intelligence exposes exactly one current category programmatically', async ({ page }) => {
  await page.goto(`${root}#/intelligence?category=normative`);
  const categories = page.getByRole('navigation', { name: 'Categorie editoriali' });
  await expect(categories.getByRole('link', { name: 'Normative', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(categories.locator('[aria-current="page"]')).toHaveCount(1);
  await categories.getByRole('link', { name: 'Tutti', exact: true }).click();
  await expect(categories.getByRole('link', { name: 'Tutti', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(categories.locator('[aria-current="page"]')).toHaveCount(1);
});
