describe ('Authorization' , () => {   
    it('', () => { 
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.wait(5000);
        cy.get('div [class="_1UDJF"]').click();
        cy.wait(5000);
        cy.get('div [class=_1Qjd7]').click();
        cy.get('#input_input_emailInput_SM_ROOT_COMP9').type('test@gmail.com');
        cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type('123456ffffff$');
        cy.get('div [class=recaptcha-checkbox-border]').click();
        cy.wait(3000);
        cy.get('div [class="_1fbEI"]').click();
        cy.wait(3000);
        cy.get('[class=_1hHt1] ').should('eq','test@gmail.com');
    });
});