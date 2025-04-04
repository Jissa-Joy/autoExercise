exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;

        // Page Locators
        this.productsButton = page.locator('a[href="/products"]');
        this.productList = page.locator("//div[@class='features_items']");
        this.searchBar = page.locator('input[placeholder="Search Product"]');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsText = page.locator("text=Searched Products");

        // Product Details Section
        this.productName = page.locator("//div[@class='product-information']//h2");
        this.productCategory = page.locator("//div[@class='product-information']//p[1]");
        this.productPrice = page.locator("//div[@class='product-information']//span//span");
        this.productAvailability = page.locator("//div[@class='product-information']//p[2]");
        this.productCondition = page.locator("//div[@class='product-information']//p[3]");
        this.productBrand = page.locator("//div[@class='product-information']//p[4]");

        // Searched Product Details Section
        this.searchedProductName = page.locator('//div[@class="productinfo text-center"]//p');
        this.searchedProductPrice = page.locator('//div[@class="productinfo text-center"]//h2');
    }

    // Navigate to Products Page
    async navigateToProductsPage() {
        await this.page.goto('https://automationexercise.com/products');
    }

    // Verify Product Page is launched successfully
    async verifyProductPageLaunched() {
        await expect(this.page).toHaveURL("https://www.automationexercise.com/products");
        await expect(this.productList).toBeVisible();
    }

    // Click on 'Products' button
    async clickProductsButton() {
        await this.productsButton.click();
    }

    // Search for a product by name
    async searchProduct(productName) {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
    }

    // Verify visibility of searched products
    async verifySearchedProductsVisibility() {
        await expect(this.searchedProductsText).toBeVisible();
        await expect(this.searchedProductName).toBeVisible();
        await expect(this.searchedProductPrice).toBeVisible();
    }

    // Method to get the product locator dynamically based on product number
    getProductLocator(prodNo) {
        return this.page.locator(`//div[@class='features_items']//a[${prodNo}]`);
    }

    // Click on a specific product based on product number
    async clickProduct(prodNo) {
        const productLocator = this.getProductLocator(prodNo);
        await productLocator.click();
    }

    // Verify the details of the product on the detail page
    async verifyProductDetails() {
        await expect(this.productName).toBeVisible();
        await expect(this.productCategory).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.productAvailability).toBeVisible();
        await expect(this.productCondition).toBeVisible();
        await expect(this.productBrand).toBeVisible();
    }
}
