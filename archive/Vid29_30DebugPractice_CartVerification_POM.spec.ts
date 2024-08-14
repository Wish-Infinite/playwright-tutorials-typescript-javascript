import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { CartPage } from "../pages/CartPage";

test("Verification of Cart", async ({ page }) => {
        const loginPageObj = new LoginPage(page);
        await loginPageObj.openApplication();
        await loginPageObj.login("standard_user","secret_sauce");
        const homePageObj = new HomePage(page);
        await expect(homePageObj.homePageHeading).toHaveText("Swag Labs");
        await homePageObj.backPackAddToCart();
        await expect(homePageObj.cartIcon).toHaveText("1");
        await expect(homePageObj.backpackRemoveButton).toBeVisible();
        await homePageObj.gotoCart();
        const cartPageObj = new CartPage(page);
        await expect(cartPageObj.backpackItemLink).toHaveText("Sauce Labs Backpack");

})