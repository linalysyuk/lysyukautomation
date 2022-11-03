//<reference types="Cypress"/>
describe('Home page',()=>{
    before(()=>{ 
      cy.visit('http://autopract.com/')
      cy.viewport(1920,1080);
      cy.wait(4000);
      });
      xit('commandTest',()=> {
        cy.get('[aria-label="Close"]').click();
      });
      xit('commandTest', ()=>{
        cy.clickOnElement('[aria-label="Close"]');
        cy.clickOnElement('.bar-style');
      });
      xit('TestInput', ()=>{
        cy.typeTextInput('.modal-content input','test@gmail.com');
      
    });
  });
  ///Homework

  describe('Home page',()=>{
    before(()=>{ 
      cy.visit('http://autopract.com/')
      cy.viewport(1920,1080);
      cy.wait(4000);
      cy.clickOnElement('[aria-label="Close"]');
    });
  });
  it.only('clickLinkText', ()=>{
    cy.clickLinkText('Wishlist');
});