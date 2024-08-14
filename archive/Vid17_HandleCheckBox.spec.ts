import { expect, test} from "@playwright/test"

test("Handle Checkbox", async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.locator(".Automation").check();
    await expect(page.locator(".Automation")).toBeChecked();
    await page.locator(".Performance").check()
    await page.locator(".Performance").uncheck();
    await expect(page.locator(".Performance")).not.toBeChecked();

    if(await page.locator(".Automation").isChecked()){
        console.log("Element was checked");
        await page.locator(".Automation").uncheck(); 
    }
})