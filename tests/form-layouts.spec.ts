import { expect, test } from '@playwright/test';
import { InputHelpers } from '../helpers/InputHelpers';
import { USING_THE_GRID_FORM } from '../constants/selectors';
import { BASIC_FORM } from '../constants/selectors';
import { URLS } from '../constants/urls';
import { TEST_EMAIL, TEST_PASSWORD } from '../constants/data';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  const baseUrls = URLS.localhost;
  await page.goto(baseUrls);
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});
//verify elements is present, visible, editable
test('verify element is present, visible, editable', async ({ page }) => {
  //find locator by id
  await page.locator(USING_THE_GRID_FORM.emailGridForm).click();
  await expect(page.locator(USING_THE_GRID_FORM.emailGridForm)).toBeVisible();
  await expect(page.locator(USING_THE_GRID_FORM.emailGridForm)).toBeEditable();
});

// GRID FORMS TESTS
test.describe('Checks grid forms', () => {
  test('Validate email input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const emailInput = page.locator(USING_THE_GRID_FORM.emailGridForm);

    await emailInput.fill(TEST_EMAIL);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(emailInput, TEST_EMAIL);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const passwordInput = page.locator(USING_THE_GRID_FORM.passwordGridForm);

    await passwordInput.fill(TEST_PASSWORD);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(passwordInput, TEST_PASSWORD);
  });
});

// BASIC FORMS
test.describe('Checks basic forms', () => {
  test('Validate email input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const emailInput = page.locator(BASIC_FORM.emailBasicForms);

    await emailInput.fill(TEST_EMAIL);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(emailInput, TEST_EMAIL);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const passwordInput = page.locator(BASIC_FORM.passwordBasicForms);

    await passwordInput.fill(TEST_PASSWORD);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(passwordInput, TEST_PASSWORD);
  });
});
