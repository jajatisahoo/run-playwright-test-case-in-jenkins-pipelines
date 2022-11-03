import { chromium, test,expect } from "@playwright/test";

test("Login test", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    
    await page.hover("//span[contains(text(),' AddOns')]/following::span[contains(text(),' My account')]");
    await page.click("text=Login");
    await page.fill("//input[@name='email']","Jajatisahoo5@gmail.com");
    await page.fill("//input[@name='password']","P@ssw0rd");

    await page.click("//input[@value='Login']");
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page.locator("//*[text()=' Edit your account information']").click();

});




