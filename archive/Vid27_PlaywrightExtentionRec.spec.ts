import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByPlaceholder('Search store').fill('ring');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await page.getByTitle('Close').click();
  await expect(page.locator('#topcartlink')).toContainText('1');
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
  await expect(page.getByLabel('Qty.')).toHaveValue('3');
});