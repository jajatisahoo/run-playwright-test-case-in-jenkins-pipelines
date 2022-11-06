import test from "@playwright/test";

import RegistrationPage from "../Pages/registrationPage"
test("Register_test_01",async({page,baseURL})=>{
    const register=new RegistrationPage(page);

    await page.goto(`${baseURL}route=account/register`);
    
    await register.enterFirstName("Jajati");
    register.clickonTermAndCondition();

    register.clicknRegistrationContinue();
    await page.waitForTimeout(3000);
    


})