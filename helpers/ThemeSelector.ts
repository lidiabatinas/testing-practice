import { expect, Locator, Page } from '@playwright/test';
import { ThemeOption } from '../models/theme';

export class ThemeSelector {
  themeButton: Locator;
  corporateItem: Locator;
  cosmicItem: Locator;
  darkItem: Locator;
  lightItem: Locator;

  constructor(page: Page) {
    this.themeButton = page.locator('.header-container').first().locator('button');
    this.corporateItem = page.locator('#nb-option-9');
    this.cosmicItem = page.locator('#nb-option-8');
    this.darkItem = page.locator('#nb-option-7');
    this.lightItem = page.locator('#nb-option-6');
  }

  async selectTheme(theme: ThemeOption) {
    await this.themeButton.click();

    switch (theme) {
      case 'Corporate':
        await this.corporateItem.click();
        break;
      case 'Cosmic':
        await this.cosmicItem.click();
        break;
      case 'Dark':
        await this.darkItem.click();
        break;
      case 'Light':
        await this.lightItem.click();
        break;
    }
  }

  async assertSelectedTheme(theme: ThemeOption) {
    await expect(this.themeButton).toContainText(theme);
  }
}
