import { expect, Page, test } from '@playwright/test';
import { DropdownHelpers } from '../helpers/DropdownHelpers';
import { urls } from '../constants/urls';
import { dashboard } from '../constants/selectors';
import { theme } from '../constants/selectors';
import { dropdown } from '../constants/selectors';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  await page.goto(urls.dashboardPage);
});

test.describe('Checks if graph date can be selected', () => {
  test('select the week option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, dashboard.graphDateButton, dashboard.weekOption);
    await DropdownHelpers.assertSelectedValue(page, dashboard.graphDateButton, 'week');
  });

  test('select the mounth option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, dashboard.graphDateButton, dashboard.monthOption);
    await DropdownHelpers.assertSelectedValue(page, dashboard.graphDateButton, 'month');
  });

  test('select the year option from week/year/month dropdown from Dashboardpage', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, dashboard.graphDateButton, dashboard.yearOption);
    await DropdownHelpers.assertSelectedValue(page, dashboard.graphDateButton, 'year');
  });
});

test.describe('Checks if theme can be changed', () => {
  test('Selected theme will be corporate', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, theme.themeButton, theme.corporateTheme);
    await DropdownHelpers.assertSelectedValue(page, theme.themeButton, 'Corporate');
  });

  test('Selected theme will be cosmic', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, theme.themeButton, theme.cosmicTheme);
    await DropdownHelpers.assertSelectedValue(page, theme.themeButton, 'Cosmic');
  });

  test('Selected theme will be dark', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, theme.themeButton, theme.darkTheme);
    await DropdownHelpers.assertSelectedValue(page, theme.themeButton, 'Dark');
  });

  test('Selected theme will be light', async ({ page }) => {
    await DropdownHelpers.selectDropdownByName(page, theme.themeButton, theme.lightTheme);
    await DropdownHelpers.assertSelectedValue(page, theme.themeButton, 'Light');
  });

  // test('Select theme will be light', async ({ page }) => {
  //const lightItem = await getOptionFromDropdownList(page, '.header-container:first-child button', 0);
  //await lightItem.click();
  // await expect(lightItem).toHaveText('Light');
  // });

  test('Select theme will be dark', async ({ page }) => {
    const dropDownMenu = page.locator(dropdown.dropdownMenuButton);
    await dropDownMenu.click();
    DropdownHelpers.selectDropdownOptionByIndex(page, dropdown.dropdownOptionList1, 1);
    await expect(dropDownMenu).toHaveText('Dark');
  });
});
