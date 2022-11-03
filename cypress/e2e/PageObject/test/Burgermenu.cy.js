// <reference types = 'Cypress'/>

import burger from '../base/burger'

describe('Burger menu', () => {
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1920,1080)
      cy.wait(5000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });

      it ('Burger menu', () => {
      burger.menuIcon.click();
      burger.OpenListMenu.should('be.visible');
      burger.buttonOpenSubMenu.click().should('be.visible');
      burger.buttonBack.should('be.visible').click().should('be.not.visible');

     });
    });
    