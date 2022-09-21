describe ('Authorization' , () => {   
    it('', () => { 
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.wait(5000);
        cy.get('[class=_1UDJF]').click();
        cy.wait(10000);
        cy.get('[class=_2UgQw] button').click();
        cy.wait(1000);
        cy.get('#input_input_emailInput_SM_ROOT_COMP9').type('test@gmail.com');
        cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type('123456ffffff$()_);
        cy.get('[class=recaptcha-checkbox-border]').click();
        cy.get('[class=_1fbEI]').click();
        cy.wait(5000);
        cy.get('[class=_1hHt1] ').should('eq', 'test@gmail.com');
    });