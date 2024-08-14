import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage"
import {CartPage} from "../pages/CartPage"

type MyPomFixtures = {
    loginPage : LoginPage;
    homePage : HomePage;
    cartPage : CartPage;

}

export const test = baseTest.extend<MyPomFixtures>({
    loginPage : async({page}, use)=>{
        const loginPage = new LoginPage(page);
        
        await use(loginPage);   
    },

    homePage : async({context}, use)=>{
        const homePage = new HomePage(await context.newPage());
        await use(homePage);   
    },

    
    cartPage : async({page}, use)=>{
        await use(new CartPage(page));   
    },



})