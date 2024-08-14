import { test, expect } from "@playwright/test"

// test.use({storageState:{ cookies: [], origins: [] }})

test.beforeEach(async ({ page }) => {
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})



test("Verify Apply leave card navigation on dasboard page", async ({ page }) => {
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Apply Leave' })).toBeVisible();
    await page.getByRole('button', { name: 'Apply Leave' }).click();
    await expect(page.getByRole('link', { name: 'My Leave' })).toContainText('My Leave');
})

