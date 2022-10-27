//<reference types="Cypress"/>
describe('Burger-Menu',()=>{
    before(()=>{ 
    cy.visit('http://autopract.com/')
    cy.viewport(1920,1080);
    cy.wait(4000);
    cy.clickElement('[aria-label="Close"]');
});
   });
it('home',()=>{
    cy.get('#mainnav > ul > li:nth-child(2)').click();
    cy.get('#mainnav > ul > li:nth-child(2) > ul').invoke('show');
    cy.get(".nav-submenu > li > [ng-reflect-router-link='/home/watch']").click()            
    });

    it.only('shop',()=>{
        cy.get('#mainnav>ul>li:nth-child(3)').click();
        cy.get('#mainnav>ul>li:nth-child(3)>ul').invoke('show');
        cy.get(".nav-submenu > li > [ng-reflect-router-link='/shop/collection/left/sidebar']").click()            
    });
    