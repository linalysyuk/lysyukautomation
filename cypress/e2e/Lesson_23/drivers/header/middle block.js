

 class cartBlock{
    findProductByBrandName(productBrandName) {
      return cy.get(selectors.productBrandName).contains(productBrandName);
    }

    clickOnProduct(productBrandName) {
        this.findProductByBrandName(productBrandName).click();
    }

    addProductToCart(brand) {
        this.findProductByBrandName(brand.brandName).realHover();
        cy.get(selectors.brandId(brand.brandId)).click();
    }

} module.exports = new cartBlock();
