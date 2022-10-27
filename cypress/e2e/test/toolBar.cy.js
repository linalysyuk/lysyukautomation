/// <reference types = 'Cypress'/>

import toolBar from'../base/toolBar'

describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(2250, 1900);
      cy.wait(2000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });
        it('open page Home', () => {
        toolBar.openPageOnSectionHome('beauty')
    });
        it('open page Shop', () => {
        toolBar.openPageOnSectionShop('left sidebar')
    });
        it('open page Products', () => {
        toolBar.openPageOnSectionProducts('sidebar')
    });
        it('open page Features', () => {
        toolBar.openPageOnSectionFeatures('portfolio')
    });
       it('open page Pages', () => {
       toolBar.openPageOnSectionPages('account')
    });
       it('open page Blogs', () => {
       toolBar.openPageOnSectionBlogs('left sidebar')
    });
});