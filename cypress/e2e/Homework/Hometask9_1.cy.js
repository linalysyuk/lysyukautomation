describe('Authorization',()=>{
    before (() => {
        cy.visit('https://www.beaxy.com/').viewport(1920,1080);
        cy.get('[class="modal-cookie-continue"]').click();

    });
    it('', () => {
        cy.get('[class*=header-buttons] [data-tomodal=login]').click(); 
        cy.get('#popUp-login-email').type('linalysyuk16@gmail.com');
        cy.get('#popUp-login-password').type('1234567vvv**8(?>A');
        cy.get('#login-checkbox').click();
        cy.get('[class*=form-login] button').click();
        cy.get('[span.sc-15su57y-6.hMYAOr]').should('eq', 'linalysyuk16@gmail.com');
        });
});

   
