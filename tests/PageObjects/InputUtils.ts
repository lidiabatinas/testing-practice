import { expect, Locator } from '@playwright/test';

export class InputUtils {
  async assertInputValue(locator: Locator, value: string) {
    await expect(locator).toHaveValue(value);
  }
}
