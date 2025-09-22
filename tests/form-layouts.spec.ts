import { expect, test } from '@playwright/test';
import { InputHelpers } from '../helpers/InputHelpers';
import { gridForm } from '../constants/selectors';
import { basicForm } from '../constants/selectors';
import { urls } from '../constants/urls';
import { email, password } from '../test-data/inputData';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  const baseUrls = urls.localhost;
  await page.goto(baseUrls);
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});
//verify elements is present, visible, editable
test('verify element is present, visible, editable', async ({ page }) => {
  //find locator by id
  await page.locator(gridForm.emailGridForm).click();
  await expect(page.locator(gridForm.emailGridForm)).toBeVisible();
  await expect(page.locator(gridForm.emailGridForm)).toBeEditable();
});

// GRID FORMS TESTS
test.describe('Checks grid forms', () => {
  test('Validate email input', async ({ page }) => {
    await InputHelpers.setInputValue(page, gridForm.emailGridForm, email);
    await InputHelpers.assertInputValue(page, gridForm.emailGridForm, email);
  });

  test('Validate password input', async ({ page }) => {
    await InputHelpers.setInputValue(page, gridForm.passwordGridForm, email);
    await InputHelpers.assertInputValue(page, gridForm.passwordGridForm, email);
  });
});

// BASIC FORMS
test.describe('Checks basic forms', () => {
  test('Validate email input', async ({ page }) => {
    await InputHelpers.setInputValue(page, basicForm.emailBasicForms, email);
    await InputHelpers.assertInputValue(page, basicForm.emailBasicForms, email);
  });

  test('Validate password input', async ({ page }) => {
    await InputHelpers.setInputValue(page, basicForm.passwordBasicForms, email);
    await InputHelpers.assertInputValue(page, basicForm.passwordBasicForms, email);
  });
});
