import { expect, Locator } from '@playwright/test';

export class InputHelpers {
  async assertInputValue(locator: Locator, value: string) {
    await expect(locator).toHaveValue(value);
  }
}
