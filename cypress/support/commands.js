// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 

Cypress.Commands.add('clickOnElement', (elementLocator) => {
    cy.get(`${elementLocator}`,{timeout:2000}).click();
});
Cypress.Commands.add('typeTextInput',(inputLocator,text)=>{
    cy.get(`${inputLocator}`,{timeout:4000})
    .should('be.visible')
    .type(text)
});

//Cypress.Commands.add('clickElement',(element)=>{
//if(element[0] !=='/'){
   // cy.get(`${element}`,{timeout:4000}).should('be.visible').click();
    //}else{
      //  cy.xpath(`${element}`,{timeout:4000}).should('be.visible').click();
    //}
//});

Cypress.Commands.add('clickLinkText',(textLink) => {
    cy.get('a',{timeout:5000}).contains('textLink').click();
});

Cypress.Commands.add('clickOnElement', (elementLocator) => {
    cy.get(`${elementLocator}`, {timeout: 2000}).click();
});

Cypress.Commands.add('getText', (selector) => {  
    let productName;
    cy.get(selector).eq(0)
    .then(($element) => {
      productName = $element.text()    
  }).then(() => {
    cy.wrap(productName)
  })
});