class header {
    selectors = {
        menuHeader: '#header-desktop-search',
        newsButton: ()=> cy.get('#desktop-nav-dropdown-control-1336349'),
        newsSubMenu: ()=> cy.get( '#desktop-nav-submenu-1336349',{timeout:1500}),
        SubSection:()=> cy.get( '#desktop-nav-submenu-1336349 > li:nth-child(2)',{timeout:1500}),
        buyButton: ()=> cy.get('li.inline-block:nth-child'(6))
    
    };
   buyButton () {
         this.selectors.buyButton().should('be.visible').click();
};
   newsButton() {
         this.selectors.newsButton().click();
 };
   newsSubMenu(){
         this.selectors.newsSubMenu().click();
};
   SubSection(){
         this.selectors.eventsSubSection().click();
};

}; module.exports = new header();