/// <reference types = 'Cypress'/>

import registrationPage from'./base/registrationPage'

describe('registrationPage', () => {
 
    before(() => {
      cy.visit('http://autopract.com/pages/register');
      cy.viewport(1920,1080);
      cy.wait(4000);
     });
     it ('open page', ()=>{
       cy.get('[aria-label="Close"]', {timeout: 5000}).click();
        createAccountForm.firstName().type('Elena');
        createAccountForm.lastName().type('Jones');
        createAccountForm.userEmail().type('AlphaitSchool@gmail.com');
        createAccountForm.userPassword().type('123456789');
        createAccountForm.buttonCreateAccoun().click()

     });
    });