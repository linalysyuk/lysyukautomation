/// <reference types = 'Cypress'/>

import saleSection from '../drivers/header/sale promo section';
import promoSection from '../drivers/header/sale promo section';
import cartBlock from '../drivers/header/middle block';

/* Case
1) Click on discount gallery image => Navigation happens to sales
2) Select first product from the catalog and add it to cart
*/
describe('Test Header', () => {

  before (() => {
    cy.visit('https://parfums.ua/');
    cy.viewport(1920, 1080);
    cy.wait(4000);
   });

   it('Sale Button ', () => {
    saleSection.saleButtonClick();
});
it('Promo Button ', () => {
   promoSection.promoButtonClick();   
  });
  
  it('Add to Cart ', () => {
    cartBlock .addProductToCart(brelilProfessional);
}); 

  });