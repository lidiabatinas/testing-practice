import { expect, test } from '@playwright/test';
import { InputHelpers } from '../helpers/InputHelpers';

//navigate to Forms page
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});
//verify elements is present, visible, editable
test('verify element is present, visible, editable', async ({ page }) => {
  //find locator by id
  await page.locator('#inputEmail1').click();
  await expect(page.locator('#inputEmail1')).toBeVisible();
  await expect(page.locator('#inputEmail1')).toBeEditable();
});

// GRID FORMS TESTS
test.describe('Checks grid forms', () => {
  test('Validate email input', async ({ page }) => {
    // Instantiate the utils class
    const pageUtils = new InputHelpers();
    const emailInput = page.locator('#inputEmail1');
    const testEmail = 'testEmail@gmail.com';

    await emailInput.fill(testEmail);
    // call the method we defined on the utils class
    await pageUtils.assertInputValue(emailInput, testEmail);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const pageUtils = new InputHelpers();
    const passwordInput = page.locator('#inputPassword2');
    const testPassword = 'test1234';

    await passwordInput.fill(testPassword);
    // call the method we defined on the utils class
    await pageUtils.assertInputValue(passwordInput, testPassword);
  });
});

// BASIC FORMS
test.describe('Checks basic forms', () => {
  test('Validate email input', async ({ page }) => {
    // Instantiate the utils class
    const pageUtils = new InputHelpers();
    const emailInput = page.locator('#exampleInputEmail1');
    const testEmail = 'testEmail@gmail.com';

    await emailInput.fill(testEmail);
    // call the method we defined on the utils class
    await pageUtils.assertInputValue(emailInput, testEmail);
  });

  test('Validate password input', async ({ page }) => {
    // Instantiate the utils class
    const pageUtils = new InputHelpers();
    const passwordInput = page.locator('#exampleInputPassword1');
    const testPassword = 'test1234';

    await passwordInput.fill(testPassword);
    // call the method we defined on the utils class
    await pageUtils.assertInputValue(passwordInput, testPassword);
  });
});
