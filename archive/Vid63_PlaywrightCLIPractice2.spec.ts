import {expect, test} from "@playwright/test"

test("Playwright CLI Practice Test 4",async({page})=>{
    console.log("Starting Practice Test 4");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 4");
})

test("Playwright Practice CLI ,Test 5 @UAT",async({page})=>{
    console.log("Starting Practice Test 5");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 5");
})

test("Playwright CLI Practice Test 6",async({page})=>{
    console.log("Starting Practice Test 6");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 6");
})

