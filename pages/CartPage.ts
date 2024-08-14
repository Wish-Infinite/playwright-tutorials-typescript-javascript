import { Locator, Page } from "@playwright/test"

export class CartPage {

    readonly page: Page;
    readonly backpackItemLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.backpackItemLink = page.getByRole('link', { name: 'Sauce Labs Backpack' })
    }


}