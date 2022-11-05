
import { Page }  from "@playwright/test"
export default class RegistrationPage{
constructor(public page:Page)
{

}

async enterFirstName(FirstName:string)
{
await this.page.locator("input[name='firstname']").type(FirstName);

}
async enterLastName(LastName:string)
{
await this.page.locator("input[name='lastname']").type(LastName);

}
async enterEmail(Email:string)
{
await this.page.locator("input[name='email']").type(Email);

}
async enterTelephone(Telephone:string)
{
await this.page.locator("input[name='telephone']").type(Telephone);

}
async enterPassword(Pasword:string)
{
await this.page.locator("input[name='password']").type(Pasword);

}
async enterConfirmPassword(ConfPassword:string)
{
await this.page.locator("input[name='confirm']").type(ConfPassword);

}
async clickonTermAndCondition()
{
await this.page.locator("input[name='agree']").click();

}
async clicknRegistrationContinue()
{
    await this.page.click("input[value='Continue']");

}

}