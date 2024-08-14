import { test } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

const records = parse(fs.readFileSync("testdata/testdata.csv"), {
    columns: true,
    skip_empty_lines: true,
    //delimiter:";"
})

records.forEach((record)=>{
    test(`Get Data from CSV - ${record.Id}`, async ({  page }) => {
        //console.log(records);
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder('First Name').fill(record.FirstName);
        await page.getByPlaceholder('Last Name').fill(record.LastName);
    })

})


for (const record of records) {

    test(`Get Data from CSV - ${record.Id}`, async ({ page }) => {
        //console.log(records);
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.getByPlaceholder('First Name').fill(record.FirstName);
        await page.getByPlaceholder('Last Name').fill(record.LastName);
    })
}



