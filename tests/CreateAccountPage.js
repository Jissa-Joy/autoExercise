const {expect} = require('@playwright/test');
exports.CreateAccountPage = class CreateAccountPage {

constructor(page){

        this.page = page;
        this.enterAccountInformationText = page.getByText("Enter Account Information");
        this.genderMale = page.locator('//*[@id="id_gender1"]');
        // this.genderMale = page.locator('#id_gender1');    //
        this.genderFemale = page.locator('//*[@id="id_gender2"]');
        this.nameInput = page.locator('//*[@id="name"]');
        this.emailInput = page.locator('//*[@id="email"]');
        this.password = page.locator("//*[@id='password']");
        this.days = page.locator("//*[@id='days']");
        this.months = page.locator("//*[@id='months']");
        this.years = page.locator("//*[@id='years']");

        this.checkbox1 = page.getByLabel("Sign up for our newsletter!");
        this.checkbox2 = page.getByLabel("Receive special offers from our partners!");

        this.fname = page.locator("//*[@id='first_name']");
        this.lname = page.locator("//*[@id='last_name']");
        this.company = page.locator("//*[@id='company']");
        this.address1 = page.locator("//*[@id='address1']");
        this.address2 = page.locator("//*[@id='address2']");
        this.country = page.locator("//*[@id='country']");
        this.state = page.locator("//*[@id='state']");
        this.city = page.locator("//*[@id='city']");
        this.zipcode = page.locator("//*[@id='zipcode']");
        this.mobile = page.locator("//*[@id='mobile_number']");
        this.createButton = page.getByRole('Button', {name : "Create Account"});

        this.accountCreatedText = page.getByText("Account Created!");
        this.continueButton = page.locator('.btn.btn-primary');
}

async verifyenterAccountInformationText()
{
    await expect(this.enterAccountInformationText).toBeVisible();
}

async selectTitle(title)
{
 if (title !== "Mr."){ 
    await this.genderFemale.check();
    }
    else{
    await this.genderMale.check();
    }
}

async fillName(name)
{
    const inputValueName  = await this.nameInput.inputValue(); 
    if (inputValueName !== name){
        await this.nameInput.fill(name);
        }
}

async fillEmail(email)
{
    await expect(this.emailInput).toHaveValue(email); 
}

async fillPassword(pw)
{
    await this.password.fill(pw);
}

async fillDateOfBirth(day,month,year)
{
    await this.days.selectOption(day);
    await this.months.selectOption(month);
    await this.years.selectOption(year);

}

async selectCheckbox1()
{
    await this.checkbox1.check();
}

async selectCheckbox2()
{
    await this.checkbox2.check();
}
async fillFirstname(fname)
{
    await this.fname.fill(fname); 
}
async fillLastname(lname)
{
    await this.lname.fill(lname); 
}
async fillcompany(company)
{
    await this.company.fill(company);
}
async fillAddress1(add1)
{
    await this.address1.fill(add1);
}
async fillAddress2(add2)
{
    await this.address2.fill(add2);
}
async fillCountry(country)
{
    await this.country.selectOption(country); 
}
async fillState(state)
{
    await this.state.fill(state);  
}
async fillCity(city)
{
    await this.city.fill(city);  
}
async fillZipcode(zip)
{
    await this.zipcode.fill(zip); 
}
async fillMobilenumber(mobile)
{
    await this.mobile.fill(mobile); 
}
async clickCreateButton()
{
    await expect(this.createButton).toBeEnabled();
    await this.createButton.click(); 
}

async verifyAccountCreatedText()
{
    await expect(this.accountCreatedText).toBeVisible();
}

async clickcontinueButton()
{
    await expect(this.continueButton).toBeEnabled();
    await this.continueButton.click();
}

}






      
 
       
 


