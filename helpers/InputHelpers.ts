import { expect, Page } from '@playwright/test';

export class InputHelpers {
  static async assertInputValue(page: Page, locator: string, value: string) {
    await expect(page.locator(locator), `Expected input to have value: ${value}`).toHaveValue(value);
  }

  static async setInputValue(page: Page, locator: string, value: string) {
    await page.locator(locator).fill(value);
  }

  static async focusInput(page: Page, locator: string) {
    await page.locator(locator).focus();
  }

  static async blurInput(page: Page, locator: string) {
    await page.locator(locator).blur();
  }

  static async checkRadioButton(page: Page, locator: string) {
    await page.check(locator);
  }
}
