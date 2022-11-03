import {test,expect} from "@playwright/test";

test("BootStrap Dropdown",async({page})=>
{

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.waitForTimeout(2000);
    await page.click("#country+span");
    await page.locator("//ul[@id='select2-country-results']")

    .locator("li",{
        hasText:"India"
    }).click();
    await page.waitForTimeout(3000);

})