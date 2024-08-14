import {test, expect} from "@playwright/test";

test("Visual Testing Verification",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables");
    //await expect(page).toHaveScreenshot();
    //await expect(page).toHaveScreenshot("VisualTesting");
    //await expect(page).toHaveScreenshot("ChildFolder1/ChildFolder2","VisualTestingWithChildFolder1.png"]);
    //await expect(page).toHaveScreenshot(["ChildFolder3","abc","VisualTestingWithChildFolder2.png"]isualTesting.png");
    //await expect(page).toHaveScreenshot("FullNamePractice.png",{fullPage:true});
    //await expect(page).toHaveScreenshot("MaxDiffPixelPractice.png",{maxDiffPixels:500})
    //await expect(page).toHaveScreenshot("MaxDiffPixelRatioPractice.png",{maxDiffPixelRatio:0.60})
    //await expect(page).toHaveScreenshot("MaskPage1.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]")]});
    //await expect(page).toHaveScreenshot("MultiMask.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]"), page.locator("#table2")]})
    //await expect(page.locator("#table1")).toHaveScreenshot("TableVerification.png")
    //await expect(page.locator("#table1")).toHaveScreenshot("TableVerification2.png",{mask:[page.locator("//table[@id='table1']//tbody//tr//td[4]")]});
    //await expect(page).toHaveScreenshot("IphoneTesting.png");
    await expect(page).toHaveScreenshot("UpdatePractice.png");
})

test("Visual Tesing - Iframe hiding Verification",async({page})=>{
    await page.goto("https://demoqa.com/forms");
    await expect(page).toHaveScreenshot("iframeHiding.png",{stylePath:"screenshot.css"})

})

test.only("Non Image ScreenShot",async({page})=>{
    await page.goto("https://playwright.dev/");
    expect(await page.locator(".hero--primary").textContent()).toMatchSnapshot("HeadingSnapshot.txt")

})