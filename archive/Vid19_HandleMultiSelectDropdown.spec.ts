import {test} from '@playwright/test';

test("Handle Multi Select Dropdown",async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    //await page.locator("#cars").selectOption('Opel');
    await page.locator("#cars").selectOption(['volvo', 'Opel','Audi'])
    

})