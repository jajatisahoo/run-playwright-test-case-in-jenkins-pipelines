import test, { expect, selectors } from "@playwright/test";

test("Dropdown",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo",{

        //value:"Friday"
        index:3
        
    })
    
    await page.waitForTimeout(5000);
    const selcted=page.locator("//button[text()='Get All Selected']");
   selcted.scrollIntoViewIfNeeded();
    await page.keyboard.press('PageDown');
await page.keyboard.press('PageDown');
    await page.selectOption("#multi-select",[
{
label:"Texas"
},
{
label:"Ohio"
}

    ])

   


   selcted.click();
    //expect(page.locator("//p[text()='Options selected are :  ']")).toContainText("Texas");
})