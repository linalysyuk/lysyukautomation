describe('window signIn',() =>{

    it ('passes',() =>{
    cy.visit("http://facebook.com/");  

    cy.get('h2').invoke('text').should('eq', "Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.");
    cy.get('[name="email"]').type('Alphaitschool@gmail.com');
    cy.get('[name="pass"]').type('123456kkk');

    cy.get('[name="email"]').invoke('val').should('eq','Alphaitschool@gmail.com');
    cy.get('[name="pass"]').invoke('val').should('eq','123456kkk');

    cy.get('[name="login"]').click

    });
    });

