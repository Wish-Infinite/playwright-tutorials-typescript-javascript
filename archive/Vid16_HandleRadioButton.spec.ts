import {expect, test} from "@playwright/test"

test("Handel radio button",async({page})=>{

    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const maleRadio = page.locator("#male");
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
    await page.locator("#female").check();
    await expect(maleRadio).not.toBeChecked();
})