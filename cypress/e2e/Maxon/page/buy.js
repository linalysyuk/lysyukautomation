
class buy {
    selectors = {
        ButtonBuyNow:()=> cy.get('#annual article .card-actions a:nth-child(1)',{timeout:1500})
    };
    ButtonBuyNow(){
        this.selector. ButtonBuyNow().should('be.visible').click();
};
};
module.exports = new buy  ();
