import { expect, Page, test } from '@playwright/test';
import { DropdownHelpers } from '../helpers/DropdownHelpers';
import { urls } from '../constants/urls';
import { dasboard } from '../constants/selectors';
import { theme } from '../constants/selectors';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  await page.goto(urls.dashboardPage);
});

test.describe('Checks if graph date can be selected', () => {
  const buttonSelector = dasboard.graphDateButton;

  test('select the week option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, dasboard.weekOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'week');
  });

  test('select the mounth option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, dasboard.monthOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'month');
  });

  test('select the year option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, dasboard.yearOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'year');
  });
});

test.describe('Checks if theme can be changed', () => {
  const buttonSelector = theme.themeButton;

  test('Selected theme will be corporate', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, theme.corporateTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Corporate');
  });

  test('Selected theme will be cosmic', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, theme.cosmicTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Cosmic');
  });

  test('Selected theme will be dark', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, theme.darkTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Dark');
  });

  test('Selected theme will be light', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, buttonSelector, theme.lightTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Light');
  });

  // test('Select theme will be light', async ({ page }) => {
  //const lightItem = await getOptionFromDropdownList(page, '.header-container:first-child button', 0);
  //await lightItem.click();
  // await expect(lightItem).toHaveText('Light');
  // });

  test('Select theme will be dark', async ({ page }) => {
    const dropDownMenu = page.locator('ngx-header .header-container:first-child button');
    await dropDownMenu.click();
    DropdownHelpers.selectDropdownOptionByIndex(page, '.option-list', 1);
    await expect(dropDownMenu).toHaveText('Dark');
  });
});
