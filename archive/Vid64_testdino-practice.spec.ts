import {test, expect} from '@playwright/test'

test('Login Functionality', async({page})=>{
    await page.goto('https://wishinfinite.com/');
    await page.getByTestId('nav-playground').click();
    await expect(page.getByRole('button', { name: ' Subscribe' })).toBeVisible();
    await page.getByTestId('category-ecommerce').click();
    await page.getByTestId('username-input').fill('WishInfinite');
    await page.getByTestId('password-input').fill('WishInfinite@01');
    await page.getByTestId('login-button').click();
    await expect(page.getByTestId('ecommerce-app').getByRole('heading', { name: 'E-Commerce App' })).toHaveText('E-Commerce App');
})  

test('Order Product',async({page})=>{
    await page.goto('https://wishinfinite.com/');
    await page.getByTestId('nav-playground').click();
    await page.getByTestId('category-ecommerce').click();
    await page.getByTestId('username-input').fill('WishInfinite');
    await page.getByTestId('password-input').fill('WishInfinite@01');
    await page.getByTestId('login-button').click();
    await page.getByTestId('order-button-1').click();
    await expect(page.getByRole('strong')).toContainText('Order Confirmation');
})

test('Logout Functionality', async({page})=>{
    await page.goto('https://wishinfinite.com/');
    await page.getByTestId('nav-playground').click();
    await page.getByTestId('category-ecommerce').click();
    await page.getByTestId('username-input').fill('WishInfinite');
    await page.getByTestId('password-input').fill('WishInfinite@01');
    await page.getByTestId('login-button').click();
    await page.getByTestId('logout-button').click();
    expect(page.getByTestId('username-input')).toBeVisible()
})