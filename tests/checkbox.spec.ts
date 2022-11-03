import {test,expect } from "@playwright/test";

test("Practice Checkbox",async ({page})=>{

await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

const Incheckbox=page.locator("//div[text()='Single Checkbox Demo']/following::input[1]");

expect(Incheckbox).not.toBeChecked();
Incheckbox.check();
expect(Incheckbox).toBeChecked();
await page.waitForTimeout(5000);




})