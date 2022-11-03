

class saleSection {
    navigateToSale () {
        cy.get(selector.sale).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/markdowned');
    }
   } module.exports = new saleSection();


   
   class promoSection {
    navigateToPromo () {
        cy.get(selector.promo).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/promo');
    }
} module.exports = new promoSection();

