class burger {

    get OpenBurgerMenuIcon () {
        return cy.get('.navbar ')
    };

    get burgerListMenu () {
        return cy.get('#unset')
    };

    get buttonOpenSubMenu () {
        return cy.get('#sub-menu>li:nth-child(5)')
    };

    get burgerSubMenuAccessories () {
        return cy.get('#sub-menu>li:nth-child(5)>ul')
    };

    get buttonBurgerMenuBack () {
        return cy.get('.sidebar-back')
    } 

} module.exports = new burger();