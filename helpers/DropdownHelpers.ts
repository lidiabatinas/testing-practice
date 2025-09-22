import { expect, Page } from '@playwright/test';

export class DropdownHelpers {
  static async selectDropdownByName(page: Page, dropdownButtonSelector: string, dropdownItemSelector: string) {
    await page.locator(dropdownButtonSelector).click();
    await page.locator(dropdownItemSelector).click();
  }

  static async assertSelectedValue(page: Page, dropdownButtonSelector: string, expectedButtonText: string) {
    await expect(page.locator(dropdownButtonSelector)).toContainText(expectedButtonText);
  }

  static async selectDropdownOptionByIndex(page: Page, dropdownItemSelector: string, index: number) {
    const dropdownParent = page.locator(dropdownItemSelector);
    const options = dropdownParent.locator('> *');
    const optionsCount = await options.count();

    if (index < 0 || index >= optionsCount) {
      throw new Error(`index invalid: ${index}. List has ${optionsCount} elemets`);
    }

    options.nth(index).click();
  }
}
