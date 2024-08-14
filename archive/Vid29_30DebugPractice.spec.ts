import {test, expect} from "@playwright/test";


test("Title Verification",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await expect(page).toHaveTitle("nopCommerce demo store. Login")
})

test("Successfull Login Verification", async({page, browserName})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    const url = page.url()
    await page.locator("id=Email").fill("wishinfinite01@gmail.com");
    await page.locator("id=Password").fill("abc");
    await page.pause();
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator(".ico-logout")).toBeVisible();
    await page.locator(".ico-logout").click();
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
})
