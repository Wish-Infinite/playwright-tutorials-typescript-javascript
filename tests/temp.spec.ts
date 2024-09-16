import {test, expect} from "@playwright/test"

test("Temp",async({page})=>{
    await page.goto("https://www.google.com")
    console.log(await page.title())
})