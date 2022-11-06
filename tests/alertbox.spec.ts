import { test, expect } from "@playwright/test";

test("Alert Practice  @smoke", async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on("dialog", async (alert) => {
        const text=alert.defaultValue();
        console.log("Default alert test is " + text)
        await alert.accept();
    })
    const firstbtn = page.locator("//button[text()='Click Me']").nth(0);
    firstbtn.click();
    await page.waitForTimeout(5000);
    

})

//npx playwright test --grep "@smoke"