import {test,expect} from "@playwright/test";

test("Verfiy InputBox",async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messagebox=page.locator("//input[@id='user-message']")
    messagebox.scrollIntoViewIfNeeded();
    messagebox.type("Jajati");
    await page.locator("//button[text()='Get Checked value']").click();
    await page.waitForTimeout(5000);
    const name=await page.locator("//p[@id='message']").allTextContents();
    console.log("Name is " + name);
    expect(page.locator("//p[@id='message']")).toHaveText(name);





})