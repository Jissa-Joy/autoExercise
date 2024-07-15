const {expect} = require('@playwright/test');
const testdata = require('../searchdata.json')

exports.SearchPage = class SearchPage {

    constructor(page){

        this.page = page;
        this.searchTextbox = page.locator('#search_product'); 
        this.searchButton =page.locator('#submit_search');
        this.searchedLabel = page.locator('h2:has-text("Searched Products")');
//try this

        this.product = page.locator('input[name="search"][value="dress"]');

       
        
    }

    async enterSearch(item)
    {
        await this.searchTextbox.fill(item);
         await this.searchButton.click();
    }

    async clickSearch()
        {
            await this.clickSearch.click();
        }
    
    async verifyLabel(){
        
        await expect(this.searchedLabel).toBeVisible();
    }


async getAllProductNames(){
    return await this.product.allTextContents();

}

async verifyAllProductsVisible(){
    const prodCount = await this.product.count();
    for (let i=0; i<prodCount ; i++){
        const prodItem = this.product.nth(i);
        await expect(prodItem).toBeVisible();
    }
}

//try logic for 


}