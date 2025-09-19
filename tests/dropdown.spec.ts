import { expect, Page, test } from '@playwright/test';
import { DropdownHelpers, getOptionFromDropdownList } from '../helpers/DropdownHelpers';
import { URLS } from '../constants/urls';
import { DASHBOARDPAGE } from '../constants/selectors';
import { THEME } from '../constants/selectors';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  const dashboardpage = URLS.dashboardPage;
  await page.goto(dashboardpage);
});

test.describe('Checks if graph date can be selected', () => {
  const buttonSelector = DASHBOARDPAGE.graphDateButton;

  test('select the week option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, DASHBOARDPAGE.weekOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'week');
  });

  test('select the mounth option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, DASHBOARDPAGE.monthOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'month');
  });

  test('select the year option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, DASHBOARDPAGE.yearOption);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'year');
  });
});

test.describe('Checks if theme can be changed', () => {
  const buttonSelector = THEME.themeButton;

  test('Selected theme will be corporate', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, THEME.corporateTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Corporate');
  });

  test('Selected theme will be cosmic', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, THEME.cosmicTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Cosmic');
  });

  test('Selected theme will be dark', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, THEME.darkTheme);
    await DropdownHelpers.assertSelectedValue(page, buttonSelector, 'Dark');
  });

  test('Selected theme will be light', async ({ page }) => {
    await DropdownHelpers.selectDropdownByIndex(page, buttonSelector, THEME.lightTheme);
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
    const lightItem = await getOptionFromDropdownList(page, '.option-list', 1);
    await lightItem.click();
    await expect(dropDownMenu).toHaveText('Dark');
  });
});
