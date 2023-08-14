import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sause');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').fill('standarduser');
    await page.locator('[data-test="password"]').fill('secretsauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="password"]').click({
        clickCount: 3
    });
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').press('ArrowLeft');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('a').filter({ hasText: '2' }).click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('ron');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('ovadia');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('2195055');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
});