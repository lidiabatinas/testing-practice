import { expect, Locator } from '@playwright/test';

export class InputHelpers {
  async assertInputValue(locator: Locator, value: string) {
    await expect(locator, `Expected input to have value: ${value}`).toHaveValue(value);
  }
}
