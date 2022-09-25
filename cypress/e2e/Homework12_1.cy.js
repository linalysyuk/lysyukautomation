
describe('Add to card', () => {
    it('', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait( 10000);
        cy.get('[class ="_2qrJF"]');
        cy.get('.buttonnext1749291004__root.Focusable4124283304__root.Button2745098129__root.Button2745098129--fullWidth.StatesButton3731447663__root.AddToCartButton3061789056__addToCartButton').click();
        cy.wait(5000);
        cy.get('[class="cart-content"]').should('be.visible');
        cy.wait( 10000);
        cy.get('[data-hook="cart-widget-name"]').invoke('text').should('eq', ' Croc Clutch ');
        cy.wait( 10000);
    });
  });