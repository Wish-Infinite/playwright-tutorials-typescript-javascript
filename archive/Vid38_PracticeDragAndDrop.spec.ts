import {test, expect} from "@playwright/test";

test("Practice Drag and Drop", async({page})=>{
     await page.goto('https://demoqa.com/droppable');

     // Approach 1 - Manual way to Drag and Drop
     // await page.getByText('Drag me', { exact: true }).hover();
     // await page.mouse.down();
     // await page.getByLabel('Simple').locator('#droppable').hover();
     // await page.mouse.up();
     // await expect(page.getByLabel('Simple').locator('#droppable')).toHaveText("Dropped!")

     //Approach 2 - dragTo()

     await page.getByText('Drag me', { exact: true }).dragTo(page.getByLabel('Simple').locator('#droppable'),{
          sourcePosition:{x:0,y:0},
          targetPosition:{x:149.9,y:149.9}
     })

     //await expect(page.getByLabel('Simple').locator('#droppable')).toHaveText("Dropped!")

})