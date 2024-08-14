
import {test, expect} from "@playwright/test"
import readXlsxFile from 'read-excel-file/node';

const filePath = 'testdata/testdata.xlsx'; 

readXlsxFile(filePath)
  .then((rows) => {
    const headers = rows[0]; // Assuming headers are in the first row
    const jsonData = rows.slice(1).map((row) => ({ ...row })); // Convert to objects for easy access

    console.log(jsonData); // Array of objects representing each row (excluding headers)
  })
  .catch((error) => {
    console.error('Error reading Excel file:', error);
  });

// test.beforeEach("Login",async({page})=>{
//     //Login
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByPlaceholder('Username').fill();
//     await page.getByPlaceholder('Password').fill();
//     await page.getByRole('button', { name: 'Login' }).click();
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
// })


test(`Add Candidate for Recruitment`, async ({  }) => {
    // await page.getByRole('link', { name: 'Recruitment' }).click();
    // await page.getByRole('button', { name: ' Add' }).click();
    // await expect(page.locator('#app')).toContainText('Add Candidate');
    // await page.getByPlaceholder('First Name').fill();
    // await page.getByPlaceholder('Middle Name').fill();
    // await page.getByPlaceholder('Last Name').fill();
    // await page.getByPlaceholder('Type here').first().fill();
    // await page.getByRole('button', { name: 'Save' }).click();
    // await expect(page.getByText('Application Stage')).toBeVisible();
})