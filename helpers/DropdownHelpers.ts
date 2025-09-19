import { expect, Page } from '@playwright/test';

export class DropdownHelpers {
  static async selectDropdownByIndex(page: Page, dropdownButtonSelector: string, dropdownItemSelector: string) {
    await page.locator(dropdownButtonSelector).click();
    await page.locator(dropdownItemSelector).click();
  }

  static async assertSelectedValue(page: Page, dropdownButtonSelector: string, expectedButtonText: string) {
    await expect(page.locator(dropdownButtonSelector)).toContainText(expectedButtonText);
  }
}

export async function getOptionFromDropdownList(page: Page, dropdownItemSelector: string, index: number) {
  const dropdownParent = page.locator(dropdownItemSelector);
  const options = dropdownParent.locator(':scope > *');
  const optionsCount = await options.count();

  if (index < 0 || index >= optionsCount) {
    throw new Error(`index invalid: ${index}. List has ${optionsCount} elemets`);
  }

  return options.nth(index);
}
