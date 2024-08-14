import {test} from "@playwright/test";

test("Practice Keyboard Actions", async({page})=>{
await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');
const commentTextArea = page.locator("[name='comments']");
await commentTextArea.press("Control+a");
await commentTextArea.press("Backspace");
await commentTextArea.press("a+B+c");
await commentTextArea.press("Control+a+x")
const usernameInput = page.locator("[name='username']");
await usernameInput.press("Control+v");
await usernameInput.press("ArrowLeft+ArrowLeft+ArrowLeft");
await usernameInput.press("Z")
await page.keyboard.press("PageDown");
await page.keyboard.press("PageUp");
})