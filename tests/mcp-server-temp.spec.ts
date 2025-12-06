import { test, expect, request } from "@playwright/test";

test('Playwright MCP Server - Test', async ({ page }) => {
  await page.goto('https://wishinfinite.com/playground');
  await page.getByTestId('category-files').click();
  await page.getByTestId('file-upload').setInputFiles('to-upload/File1.txt');
  await expect(page.getByText('Selected: File1.txt')).toBeVisible();

  const re = await request.newContext()
  re.get('https://wishinfinite.com/mcp-server/files/File1.txt')
});