class registrationForm {

    createAccountForm={
        firstName:() => cy.get('#fname'),
        lastName:() => cy.get('#lname'),
        userEmail :() =>cy.get ('email'),
        userPassword:()=> cy.get('#review'),
        buttonCreateAccount:()=> cy.get('form div:nth-child(2) > button')

    } module.exports = new registrationForm();