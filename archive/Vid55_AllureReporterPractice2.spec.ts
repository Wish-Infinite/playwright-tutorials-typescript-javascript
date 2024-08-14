import {test, expect} from "@playwright/test";

test("Reporter Practice 4", async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

test("Reporter Practice 5", async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

test("Reporter Practice 6", async({page})=>{
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})