import { test, expect } from "@playwright/test"


test.beforeEach(async ({ page }) => {
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.getByPlaceholder('Username').fill('Admin');
    // await page.getByPlaceholder('Password').fill('admin123');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})


test("Verify timesheet card navigation on Dashboard page", async ({ page, context }) => {
    //await context.clearCookies();
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
})

test("Add Candidate for Recruitment", async ({ page }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill('Test');
    await page.getByPlaceholder('Last Name').fill('Automate');
    await page.getByPlaceholder('Middle Name').fill('Code');
    await page.getByPlaceholder('Type here').first().fill('testcodeautomate@gmail.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('#app')).toContainText('Test Code Automate');
  
})
