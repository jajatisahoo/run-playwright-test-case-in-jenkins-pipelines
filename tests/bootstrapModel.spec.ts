import {test,expect} from "@playwright/test";

test("BootStrap Model",async({page})=>{

    page.on("dialog", async (alert) => {
        const text=alert.defaultValue();
        console.log("Default alert test is " + text)
        await alert.accept();
    })
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("(//button[text()='Launch Modal'])[1]").click();
    await page.waitForTimeout(5000);


})