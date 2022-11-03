import { test,expect } from '@playwright/test'

test('Should add item to cart', async({ page })=> {
        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await page.locator("span.title", {hasText: 'Mega Menu' }).hover()
        await page.locator("a[title=Desktop]").click();
})