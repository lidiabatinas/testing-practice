import { test } from '@playwright/test';
import { urls } from '../constants/urls';
import { ThemeSelector } from '../helpers/ThemeSelector';

test.beforeEach(async ({ page }) => {
  const baseUrls = urls.localhost;
  await page.goto(baseUrls);
});

test.describe('Checks if theme can be changed', () => {
  test('Selected theme will be corporate', async ({ page }) => {
    const themeObject = new ThemeSelector(page);
    await themeObject.selectTheme('Corporate');
    await themeObject.assertSelectedTheme('Corporate');
  });

  test('Selected theme will be cosmic', async ({ page }) => {
    const themeObject = new ThemeSelector(page);
    await themeObject.selectTheme('Cosmic');
    await themeObject.assertSelectedTheme('Cosmic');
  });

  test('Selected theme will be dark', async ({ page }) => {
    const themeObject = new ThemeSelector(page);
    await themeObject.selectTheme('Dark');
    await themeObject.assertSelectedTheme('Dark');
  });

  test('Selected theme will be light', async ({ page }) => {
    const themeObject = new ThemeSelector(page);
    await themeObject.selectTheme('Light');
    await themeObject.assertSelectedTheme('Light');
  });
});
