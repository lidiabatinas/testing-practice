import { expect, Page, test } from '@playwright/test';
import { urls } from '../constants/urls';
import { loginForm } from '../constants/selectors';
import { InputHelpers } from '../helpers/InputHelpers';
import { email, password } from '../test-data/inputData';

//navigate to Auth-Login page
test.beforeEach(async ({ page }) => {
  await page.goto(urls.authLoginPage);
});

test.describe('Validate login cannot be submited without required data', () => {
  test('Input button is disabled if email and password are empty', async ({ page }) => {
    expect(page.locator(loginForm.logInButton)).toHaveAttribute('ng-reflect-disabled', 'true');
  });

  test('Input button is disabled if password is empty', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.assertInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.assertInputValue(page, loginForm.passwordLoginInput, '');

    expect(page.locator(loginForm.logInButton)).toHaveAttribute('ng-reflect-disabled', 'true');
  });

  test('Input button is disabled if email is empty', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.passwordLoginInput, password);
    await InputHelpers.assertInputValue(page, loginForm.passwordLoginInput, password);
    await InputHelpers.assertInputValue(page, loginForm.emailLoginInput, '');

    expect(page.locator(loginForm.logInButton)).toHaveAttribute('ng-reflect-disabled', 'true');
  });

  test('Email error is displayed if email input is blured and empty', async ({ page }) => {
    await InputHelpers.blurInput(page, loginForm.emailLoginInput);
    const emailInputError = page.locator(loginForm.emailInputError);

    await expect(emailInputError).toBeVisible();
    await expect(emailInputError).toContainText('Email is required!');
  });

  test('Email error is displayed if email is not a real email', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.emailLoginInput, 'testemail');
    await InputHelpers.blurInput(page, loginForm.emailLoginInput);
    const emailInputError = page.locator(loginForm.emailInputError);

    await expect(emailInputError).toBeVisible();
    await expect(emailInputError).toContainText('Email should be the real one!');
  });

  test('Error is displayed when password is empty', async ({ page }) => {
    await InputHelpers.focusInput(page, loginForm.passwordLoginInput);
    await InputHelpers.blurInput(page, loginForm.passwordLoginInput);
    const passwordInputError = page.locator(loginForm.passwordInputError);

    await expect(passwordInputError).toBeVisible();
    await expect(passwordInputError).toContainText('Password is required!');
  });

  test('Error is displayed when password is less than 4 characters', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.passwordLoginInput, 'asd');
    await InputHelpers.blurInput(page, loginForm.passwordLoginInput);
    const passwordInputError = page.locator(loginForm.passwordInputError);

    await expect(passwordInputError).toBeVisible();
    await expect(passwordInputError).toContainText('Password should contain from 4 to 50 characters');
  });
});

test.describe('Login form is submitted successfully', () => {
  test('Form can be submitted if fields have valid data', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.setInputValue(page, loginForm.passwordLoginInput, password);
    await InputHelpers.assertInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.assertInputValue(page, loginForm.passwordLoginInput, password);

    expect(page.locator(loginForm.logInButton)).toHaveAttribute('ng-reflect-disabled', 'false');
  });

  test('User is redirected to dashboard after login', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.setInputValue(page, loginForm.passwordLoginInput, password);
    await InputHelpers.assertInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.assertInputValue(page, loginForm.passwordLoginInput, password);

    await page.locator(loginForm.logInButton).click();
    await page.waitForURL(urls.dashboardPage);
  });

  test('Validate radio button is checked', async ({ page }) => {
    await InputHelpers.setInputValue(page, loginForm.emailLoginInput, email);
    await InputHelpers.setInputValue(page, loginForm.passwordLoginInput, password);
    await page.locator(loginForm.rememberMeCheckbox).click();
    await expect(page.locator(loginForm.rememberMeCheckbox)).toContainClass('checked');
  });
});
