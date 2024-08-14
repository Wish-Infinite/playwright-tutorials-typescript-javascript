import {test, expect } from "@playwright/test"

test("Login Setup", async({page})=>{
        //Login
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await page.context().storageState({path: "./playwright/.auth/auth.json"})
})