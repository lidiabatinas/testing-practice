import { expect, Page } from '@playwright/test';

export class DropdownHelpers {
  static async selectDropdownValue(page: Page, dropdownButtonSelector: string, dropdownItemSelector: string) {
    await page.locator(dropdownButtonSelector).click();
    await page.locator(dropdownItemSelector).click();
  }

  static async assertSelectedValue(page: Page, dropdownButtonSelector: string, expectedButtonText: string) {
    await expect(page.locator(dropdownButtonSelector)).toContainText(expectedButtonText);
  }
}
