import {test,expect} from "@playwright/test";

test("Frame and Window",async({page})=>{
await page.goto("https://letcode.in/frame");

const allframes=page.frames();
console.log(allframes.length);
//Frame name below
const Myframe=page.frame("firstFr");
if(Myframe!=null)
{
    // ? . is like a if condition only use any one
await Myframe?.fill("input[name='fname']","Jajati");
await Myframe?.fill("input[name='lname']","Sahoo");
}
await page.waitForTimeout(2000);
//expect(await Myframe?.locator("p.has-text-info").textContent()).toContain("You have entered")
expect(await Myframe?.locator("p.has-text-info")).toHaveText("You have entered Jajati Sahoo");
await page.waitForTimeout(2000);
const frame=page.frameLocator("#firstFr");
//below iframe[src ...] is css format
//const innerframe=frame.frameLocator("iframe[src='innerFrame']");
//below one is xpath format
const innerframe=frame.frameLocator("//iframe[@src='innerFrame']");

innerframe.locator("input[name='email']").fill("Jajatisahoo90@gmail.com");
await page.waitForTimeout(2000);


})