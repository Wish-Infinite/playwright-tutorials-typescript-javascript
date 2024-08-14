import { test } from "@playwright/test";

test("Pick Locator Practice 1", async ({ page }) => {


    // Playwright Extension 
    await page.getByLabel('Search', { exact: true }).fill("Testing")
    await page.getByLabel('Sign in').click()

    //Playwright Inspector 
    await page.getByLabel('Search', { exact: true }).fill("Automation")
    page.getByLabel('Sign in')



})