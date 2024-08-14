import {test, expect} from "@playwright/test";

test('Visual Testing Example', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    //Login Page
    await expect(page).toHaveScreenshot("LoginPage.png");
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    //Landing Page
    await expect(page).toHaveScreenshot("LandingPage.png",{fullPage:true});
    await page.locator('[data-test="shopping-cart-link"]').click();
    //Cart Page
    await expect(page).toHaveScreenshot("CartPage.png");
  });