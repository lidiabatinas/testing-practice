import { expect, test } from '@playwright/test';
import { DropdownUtils } from './PageObjects/DropdownUtils';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/pages/iot-dashboard');
});

test.describe('Checks if graph date can be selected', () => {
  const buttonSelector = '#electricity-date-selector';

  test('it opens and select the week', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-0');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'week');
  });

  test('it opens and select the month', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-1');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'month');
  });

  test('it opens and select the year', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-2');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'year');
  });
});

test.describe('Checks if theme can be changed', () => {
  const buttonSelector = '.header-container:first-child button';

  test('Selected theme will be corporate', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-9');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'Corporate');
  });

  test('Selected theme will be cosmic', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-8');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'Cosmic');
  });

  test('Selected theme will be dark', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-7');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'Dark');
  });

  test('Selected theme will be light', async ({ page }) => {
    await DropdownUtils.selectDropdownValue(page, buttonSelector, '#nb-option-6');
    await DropdownUtils.assertSelectedValue(page, buttonSelector, 'Light');
  });
});
