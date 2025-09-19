import { expect, test } from '@playwright/test';
import { InputHelpers } from '../helpers/InputHelpers';
import { gridForm } from '../constants/selectors';
import { basicForm } from '../constants/selectors';
import { urls } from '../constants/urls';
import { email, password } from '../constants/data';

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
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const emailInput = page.locator(gridForm.emailGridForm);

    await emailInput.fill(email);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(emailInput, email);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const passwordInput = page.locator(gridForm.passwordGridForm);

    await passwordInput.fill(password);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(passwordInput, password);
  });
});

// BASIC FORMS
test.describe('Checks basic forms', () => {
  test('Validate email input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const emailInput = page.locator(basicForm.emailBasicForms);

    await emailInput.fill(email);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(emailInput, email);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const inputHelpers = new InputHelpers();
    const passwordInput = page.locator(basicForm.passwordBasicForms);

    await passwordInput.fill(password);
    // call the method we defined on the utils class
    await inputHelpers.assertInputValue(passwordInput, password);
  });
});
