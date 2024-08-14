import {test} from "@playwright/test"
import path from "path";

test("Practice File Upload",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //await page.locator("#filesToUpload").setInputFiles("to-upload/File1.txt") //To Upload Single File
    await page.locator("#filesToUpload").setInputFiles(["to-upload/File1.txt","to-upload/File2.xlsx","to-upload\\File3.docx"]) // To Upload mulipl files 
    await page.locator("#filesToUpload").setInputFiles([]);
})

test("Practice File Upload  2",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator("#drag-drop-upload").click();
    const fileChooserResolved = await fileChooserPromise;
    await fileChooserResolved.setFiles(["to-upload/File1.txt","to-upload/File2.xlsx","to-upload\\File3.docx"])
})

