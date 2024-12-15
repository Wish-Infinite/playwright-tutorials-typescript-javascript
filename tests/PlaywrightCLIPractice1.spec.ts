import {expect, test} from "@playwright/test"

test("Playwright CLI Practice Test 1",async({page})=>{
    console.log("Starting Practice Test 1");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 1");
})

test("Playwright CLI Practice Test 2",async({page})=>{
    console.log("Starting Practice Test 1");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 1");
})

test("Playwright CLI Practice Test 3",async({page})=>{
    console.log("Starting Practice Test 1");
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
    console.log("Ending Practice Test 1");
})

