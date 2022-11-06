import { test, expect } from "@playwright/test";

test("Alert Practice @smoke", async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    page.on("dialog", async (alert) => {
        const text=alert.defaultValue();
        console.log("Default alert test is " + text)
        await alert.dismiss();
    })
   
    
    const secondbtn=page.locator("//button[text()='Click Me']").nth(1);
    secondbtn.click();
    await page.waitForTimeout(5000);
    expect(page.locator("//p[@id='confirm-demo']")).toContainText("Cancel!");


})