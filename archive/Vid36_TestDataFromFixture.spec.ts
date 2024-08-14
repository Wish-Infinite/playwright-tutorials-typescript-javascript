
import {test, expect} from "../fixtures/TestDataFixture"

test.beforeEach("Login",async({page, logindata})=>{
    //Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(logindata.uname);
    await page.getByPlaceholder('Password').fill(logindata.pwd);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})


test(`Add Candidate for Recruitment`, async ({ page, testdata }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate');
    await page.getByPlaceholder('First Name').fill(testdata.fname);
    await page.getByPlaceholder('Middle Name').fill(testdata.mname);
    await page.getByPlaceholder('Last Name').fill(testdata.lname);
    await page.getByPlaceholder('Type here').first().fill(testdata.email);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Application Stage')).toBeVisible();
})