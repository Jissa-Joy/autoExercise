const { test, expect } = require('@playwright/test');
const {chromium} = require('playwright');
const { HomePage } = require('./HomePage');

const { afterEach } = require('node:test');

test.skip('View Category Products', async () => {
   
    //1. Launch Browser
    const browser = await chromium.launch();
    //Launch New Page
     const page = await browser.newPage();
    const homePage = new HomePage(page);
  
     ///2. Navigate to url 'http://automationexercise.com'
     await homePage.navigateHomePage();
    
// 3. Verify that categories are visible on left side bar


// 4. Click on 'Women' category


// 5. Click on any category link under 'Women' category, for example: Dress


// 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'


// 7. On left side bar, click on any sub-category link of 'Men' category


// 8. Verify that user is navigated to that category page






