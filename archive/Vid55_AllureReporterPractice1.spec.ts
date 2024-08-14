import { test, expect } from "@playwright/test";

test("Reporter Practice 1", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})


test("Reporter Practice 2", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google1");
})

test("Reporter Practice 3", async ({ page }) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle("Google");
})

