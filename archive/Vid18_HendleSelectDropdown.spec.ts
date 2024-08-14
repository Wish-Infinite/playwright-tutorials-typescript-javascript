import {test} from "@playwright/test";

test("Handle Select Dropdown with value and Visible text",async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    //await page.locator("#testingDropdown").selectOption("Database Testing");
    //await page.locator("#testingDropdown").selectOption({value:'Performance'})
    //await page.locator("#testingDropdown").selectOption({label:'Database Testing'})
    await page.locator("#testingDropdown").selectOption({index:2});
})


test("Handle Select Dropdown with Label",async({page})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");
    //await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption('Mercedes')
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({label:'Audi'})


})