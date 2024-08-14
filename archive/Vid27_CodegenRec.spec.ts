import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByPlaceholder('Search store').click();
  await page.getByPlaceholder('Search store').fill('ring');
  await page.getByPlaceholder('Search store').press('Enter');
  
  await expect(page.getByRole('heading', { name: 'Search' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Search');
});