import { test, expect } from "@playwright/test";


test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 1");
})

test("Practice Test 2", async ({ page }) => {
    console.log("Starting Practice Test 2");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 2");
})

test("Practice Test 3 @Dev", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 3");
})
