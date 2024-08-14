import { test, expect } from "@playwright/test"


test.beforeEach(async ({ page }) => {
    //Login
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
})

test.afterEach(async({page})=>{ 
    //Logout
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})

test("Adding / Removing item to / from Cart verification", async ({page}) => {
    //Adding and Removing Item from cart
    await page.getByText("Sauce Labs Backpack").click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible()

})

test("Empty Cart verification", async ({page}) => {
    //Cheking Empty Cart
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator('.inventory_item_name')).not.toBeVisible();
})
