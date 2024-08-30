import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config({
  path: process.env.TEST_ENV ? `./env-files/.env.${process.env.TEST_ENV}` : `./env-files/.env.dev`
})
/**
 * See https://playwright.dev/docs/test-configuration.
 * 
 */
export default defineConfig({


  //grep:/UI/,
  //grepInvert:/sanity/,
  //globalSetup: "./global-setup.ts",
  testDir: './tests',
  // expect:{
  //   toHaveScreenshot:{
  //     maxDiffPixels:20,
  //     //maxDiffPixelRatio:0.1
  //   }
  // },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,   
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter:[ ['html',{open:'on-failure'}]],
  //reporter : [['junit',{outputFile:'xyz/report4junit.xml'}]],
  reporter:[["html"],["github"]],
  //reporter:process.env.CI?'github':'html',
  //reporter:"allure-playwright",
  //reporter:[["allure-playwright", {outputFolder:"GoogleAllureResults4"}],["html"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders:{
      Accept:"application/json",
      "Content-Type":"application/json",
      // Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: true,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    //storageState:"./playwright/.auth/auth.json",
  },
  timeout: 30000,
  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "setup",
    //   testMatch:/.*\.setup\.ts/,
    //   //testMatch: "global.setup.ts"
    // },
    {
      name: 'chromium',
      //dependencies:["setup"],
      use: {
        ...devices['Desktop Chrome'],
        //storageState: "./playwright/.auth/auth.json"
      }
    },
    // {
    //   name: 'firefox',
    //   //dependencies:["setup"],
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     //storageState: "./playwright/.auth/auth.json"
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


    // {
    //   name:'iphone14MaxPro',
    //   use:{ ...devices['iPhone 14 Pro Max']}
    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
