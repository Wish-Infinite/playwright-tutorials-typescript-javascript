import {  expect } from "@playwright/test"
import {test} from "../fixtures/POMFixtures"

test("Verification of Cart", async ({ page, loginPage , homePage, cartPage }) => {
        await loginPage.openApplication();
        await loginPage.login("standard_user", "secret_sauce");
        await expect(homePage.homePageHeading).toHaveText("Swag Labs");
        await homePage.backPackAddToCart();
        await expect(homePage.cartIcon).toHaveText("1");
        await expect(homePage.backpackRemoveButton).toBeVisible();
        await homePage.gotoCart();
        await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack");

})