import {test, expect} from "@playwright/test"

test("Temp",async({page})=>{
    await page.goto("https://www.google.com")
    console.log(await page.title())

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator('#testingDropdown').selectOption('Manual');
    await expect(page.locator('#testingDropdown')).toHaveValue('Manual');
    const val = await page.locator('#testingDropdown').inputValue()
    console.log(val)
})