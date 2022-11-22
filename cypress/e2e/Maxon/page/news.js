class news {
    selectors = {
        firstBlock: ()=> cy.get('article:nth-child(1)',{timeout:1500}),
        newsContainer:  ()=> cy.get('px-7 pb-4 font-display text-sm',{timeout:1500}),
    };
    firstBlock () {
        this.selectors.firstBlock().should('be.visible');
    };
    newsContainer() {
        this.selectors.newsContainer().should('be.visible');
    };
};
module.exports = new news();