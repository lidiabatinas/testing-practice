// import test from '@playwright/test';
// import { ThemeSelector } from './PageObjects/ThemeSelector';
// import { DropdownUtils } from './PageObjects/DropdownUtils';

// test.beforeEach(async ({ page }) => {
//   await page.goto('http://localhost:4200/');
// });

// test.describe('Checks if theme can be changed', () => {
//   test('Selected theme will be corporate', async ({ page }) => {
//     const themeObject = new ThemeSelector(page);
//     await themeObject.selectTheme('Corporate');
//     await themeObject.assertSelectedTheme('Corporate');
//   });

//   test('Selected theme will be cosmic', async ({ page }) => {
//     const themeObject = new ThemeSelector(page);
//     await themeObject.selectTheme('Cosmic');
//     await DropdownUtils.selectDropdownValue(page, '.header-container button', '#nb-option-8');
//     await themeObject.assertSelectedTheme('Cosmic');
//   });

//   test('Selected theme will be dark', async ({ page }) => {
//     const themeObject = new ThemeSelector(page);
//     await themeObject.selectTheme('Dark');
//   });

//   test('Selected theme will be light', async ({ page }) => {
//     const themeObject = new ThemeSelector(page);
//     await themeObject.selectTheme('Light');
//   });
// });
