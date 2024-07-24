const {expect} = require('@playwright/test');
exports.CheckoutPage = class CheckoutPage {

    constructor(page){

        this.page = page;
        this.deliveryAddCol = page.locator("//ul[@id='address_delivery']//li");
        this.billingAddcol = page.locator("//ul[@id='address_invoice']//li");
        this.textArea = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.locator('a[href="/payment"]');
    }
  
    async verifyDeliveryAddress(title,fname,lname,company,add1,add2,country,state,city,zip,mobile)
     {
        const expectedValues = [
            "Your delivery address", 
            `${title} ${fname} ${lname}`, 
            `${company}`, 
            `${add1}`, 
            `${add2}`, 
            `${city} ${state} ${zip}`,
            `${country}`, 
            `${mobile}`
        ];

        for (let i=0; i<expectedValues.length; i++)
        {
            await expect(this.deliveryAddCol.nth(i)).toHaveText(expectedValues[i]);
        }
        
     }
     

     async verifyBilllingAddress(title,fname,lname,company,add1,add2,country,state,city,zip,mobile)
     {
        const expectedValues = [
            "Your billing address", 
            `${title} ${fname} ${lname}`, 
            `${company}`, 
            `${add1}`, 
            `${add2}`, 
            `${city} ${state} ${zip}`,
            `${country}`, 
            `${mobile}`
        ];

        for (let i=0; i<expectedValues.length; i++)
        {
            await expect(this.billingAddcol.nth(i)).toHaveText(expectedValues[i]);
        }
        
     }

     async placeOrder()
     {
        await this.textArea.fill("Message");
        await this.placeOrderButton.click();
     }

     orderItemLocator(prodNo) {
        return this.page.locator(`#product-${prodNo}`);
    }
    
    async verifyOrderItemsComponents(prodNo)
    {
        const cartItem = this.orderItemLocator(prodNo);
        const comp = cartItem.locator('td');
        for (let i=0;i<5;i++)
        {
            await expect(comp.nth(i)).toBeVisible();
        }
 
    }



    }