import {Locator, Page} from "@playwright/test"

export class LoginPage{

    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly loginButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameTextBox = page.locator("id=user-name");
        this.passwordTextBox = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");

    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(usernameVal : string , passwordVal : string){
        await this.usernameTextBox.fill(usernameVal);
        await this.passwordTextBox.fill(passwordVal);
        await this.loginButton.click();
    }
    


}