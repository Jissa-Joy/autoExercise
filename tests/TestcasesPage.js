const {expect} = require('@playwright/test');
exports.TestcasesPage = class TestcasesPagePage 
{

    constructor(page)
    {
        this.page = page;
        this.testcasesLink = page.getByRole('link', { name: ' Test Cases' }) 
        

    }


async getTitle(){
    return await this.page.title();
    
}

}