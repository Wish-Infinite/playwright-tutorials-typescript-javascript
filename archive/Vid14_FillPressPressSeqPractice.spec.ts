import { test } from "@playwright/test"


test("Fill Press and PressSeq Practice", async ({ page }) => {
    // await page.goto("https://ultimateqa.com/filling-out-forms/");
    // await page.locator('#et_pb_contact_name_0').fill("TestCodeAutomate")
    // await page.locator('#et_pb_contact_message_0').fill("Learn for brighter tomorrow");

    // await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_contenteditable");
    // await page.frameLocator('iframe[name="iframeResult"]').getByText('This is a paragraph. It is').fill("Testing ContentEditable with TestCodeAutomate");

    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000});
    //await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown")
    //await page.locator("#APjFqb").press("Enter");
    await page.locator("#APjFqb").press("Backspace");
})