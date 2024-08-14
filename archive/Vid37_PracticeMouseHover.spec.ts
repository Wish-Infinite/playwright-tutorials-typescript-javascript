import {test} from "@playwright/test";

test("Practice Mouse hover action", async({page})=>{
     await page.goto('https://demo.opencart.com/');
     await page.getByRole('link', { name: 'Components', exact: true }).hover({force:true});
     await page.getByRole('link', { name: 'Show All Components' }).click()

})