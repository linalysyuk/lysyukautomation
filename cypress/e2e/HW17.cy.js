//<reference types="Cypress"/>
 
describe('Terrasoft',()=>{
  xit('T1',()=>{ 
    cy.viewport(820,1180);
    cy.visit('https://www.terrasoft.ua/');
    cy.wait(5000);
    cy.matchImageSnapshot();
   });
  });
     // xit('Terra2',()=>{                                                         //не срабатывают с visible и скроллом
   // cy.get('[class="one-column"]',{timeout : 4000}).scrollIntoView();
   // cy.matchImageSnapshot();
  // });

   //xit('Terra3', () => {
   //cy.get('[class*="ts-link__btn ts-link__btn_mws"]',{timeout:4000}).should('be.visible').click()
   //.should('be.visible').matchImageSnapshot();
//});
it.only('Terra4',()=>{ 
  cy.viewport(1920,1080);
  cy.visit('https://www.terrasoft.ua/');
  cy.wait(7000); 
  cy.get('[class=ts-promise__items]').invoke('remove');
  cy.matchImageSnapshot();
  })
