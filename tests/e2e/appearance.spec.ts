import { test, expect } from '@playwright/test';

const root = '/PratoHub/';
const routes = ['/', '/dashboard', '/?mode=demo', '/filiera?node=TX-06.01.01', '/network', '/brief', '/privacy', '/progetto', '/intelligence'];

// Measure painted text against solid ancestor backgrounds, not CSS token names.
// This is a bounded regression check, not a complete accessibility certification.
async function contrastFailures(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    type Color = [number, number, number, number];
    const parse = (value: string): Color => {
      const channels = value.match(/[\d.]+/g)?.map(Number) ?? [];
      if (channels.length < 3) throw new Error(`Unsupported computed color: ${value}`);
      return [channels[0], channels[1], channels[2], channels[3] ?? 1];
    };
    const background = (element: Element): Color => {
      const result: Color = [0, 0, 0, 1]; let remaining = 1;
      for (let current: Element | null = element; current && remaining > 0; current = current.parentElement) {
        const color = parse(getComputedStyle(current).backgroundColor);
        for (let i = 0; i < 3; i++) result[i] += remaining * color[3] * color[i];
        remaining *= 1 - color[3];
      }
      for (let i = 0; i < 3; i++) result[i] += remaining * 255;
      return result;
    };
    const luminance = (color: Color) => color.slice(0, 3).map(channel => {
      const value = channel / 255; return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
    }).reduce((sum, channel, i) => sum + channel * [.2126, .7152, .0722][i], 0);
    const failures: string[] = []; let checked = 0;
    const check = (element: Element, text: string, pseudo?: string) => {
      const style = getComputedStyle(element, pseudo);
      const foreground = parse(style.color); const bg = background(element);
      for (let i = 0; i < 3; i++) foreground[i] = foreground[i] * foreground[3] + bg[i] * (1 - foreground[3]);
      const values = [luminance(foreground), luminance(bg)].sort((a, b) => a - b);
      const ratio = (values[1] + .05) / (values[0] + .05);
      const size = parseFloat(style.fontSize); const bold = parseInt(style.fontWeight, 10) >= 700;
      const minimum = size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5;
      checked++;
      if (ratio < minimum) failures.push(`${element.tagName}.${element.className}${pseudo ?? ''}: ${ratio.toFixed(2)} < ${minimum}: ${text.trim().slice(0, 65)}`);
    };
    const visible = (element: Element) => {
      const style = getComputedStyle(element);
      return element.getClientRects().length > 0 && style.visibility !== 'hidden' && style.display !== 'none' && !element.closest('[aria-hidden="true"]');
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode; const element = node.parentElement;
      if (!element || !node.textContent?.trim() || !visible(element) || element.closest('script, style, select, svg')) continue;
      const range = document.createRange(); range.selectNodeContents(node);
      if (range.getBoundingClientRect().width > 0) check(element, node.textContent);
    }
    for (const element of document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select')) {
      if (!visible(element)) continue;
      if (element.value || element.tagName === 'SELECT') check(element, element.value || 'select');
      if ('placeholder' in element && element.placeholder && !element.value) check(element, element.placeholder, '::placeholder');
    }
    return { checked, failures: [...new Set(failures)] };
  });
}

for (const colorScheme of ['light', 'dark'] as const) {
  for (const width of [1440, 390]) {
    test.describe(`appearance: ${colorScheme}, ${width}px`, () => {
      test.use({ colorScheme, reducedMotion: 'reduce', viewport: { width, height: 900 } });
      test('primary routes keep readable text, valid assets and no horizontal overflow', async ({ page }) => {
        const runtimeErrors: string[] = []; const failedAssets: string[] = [];
        page.on('pageerror', error => runtimeErrors.push(error.message));
        page.on('response', response => { if (response.status() >= 400) failedAssets.push(response.url()); });
        for (const route of routes) {
          await page.goto(`${root}#${route}`);
          await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
          await page.evaluate(() => document.fonts.ready);
          for (const summary of await page.locator('.share-tools summary').all()) await summary.click();
          const result = await contrastFailures(page);
          expect(result.checked, `No text measured on ${route}`).toBeGreaterThan(20);
          expect.soft(result.failures, `${colorScheme}, ${width}px, ${route}`).toEqual([]);
          expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px ${route}`).toBe(true);
          if (width <= 480 && route === '/progetto') {
            const cards = page.locator('.ph-feature-grid');
            await expect(cards).toBeVisible();
            expect(await cards.evaluate(element => getComputedStyle(element).gridTemplateColumns.split(' ').length)).toBe(1);
          }
        }
        expect(runtimeErrors).toEqual([]); expect(failedAssets).toEqual([]);
      });
      test('secondary-button hover and footer keyboard focus remain visible', async ({ page }) => {
        await page.goto(`${root}#/dashboard`);
        const secondary = page.locator('.button-secondary').first();
        await secondary.hover();
        expect((await contrastFailures(page)).failures.filter(failure => failure.includes('button-secondary'))).toEqual([]);
        await page.goto(`${root}#/network`); await page.reload();
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        await page.keyboard.press('Tab'); await expect(page.locator('.skip-link')).toBeFocused();
        expect((await contrastFailures(page)).failures.filter(failure => failure.includes('skip-link'))).toEqual([]);
        const footerLink = page.locator('.site-footer a').first();
        await footerLink.focus();
        await expect(footerLink).toBeFocused();
        const focus = await footerLink.evaluate(element => {
          const style = getComputedStyle(element);
          const luminance = (color: string) => {
            const channels = color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
            if (!channels || channels.length !== 3) throw new Error(`Unsupported focus color: ${color}`);
            return channels.map(channel => {
              const value = channel / 255;
              return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
            }).reduce((sum, channel, i) => sum + channel * [.2126, .7152, .0722][i], 0);
          };
          let background = element;
          while (background.parentElement && getComputedStyle(background).backgroundColor === 'rgba(0, 0, 0, 0)') background = background.parentElement;
          const values = [luminance(style.outlineColor), luminance(getComputedStyle(background).backgroundColor)].sort((a, b) => a - b);
          return { visible: element.matches(':focus-visible'), width: parseFloat(style.outlineWidth), contrast: (values[1] + .05) / (values[0] + .05) };
        });
        expect(focus.visible).toBe(true); expect(focus.width).toBeGreaterThanOrEqual(2);
        expect(focus.contrast).toBeGreaterThanOrEqual(3);
      });
    });
  }
}
