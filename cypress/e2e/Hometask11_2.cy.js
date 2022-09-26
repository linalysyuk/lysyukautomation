/*Comments
1)  поменяй ссылку и тест начнет работать и проходить - https://yevheniiahlovatska.editorx.io/web-practice/post/manage-your-blog-from-your-live-site
вот примеры как еще сделали
describe ('Добавление комментария' , () => {
   it('Авторизация сразу+удаление', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
    cy.wait(9000);
    cy.get('[data-testid="section-container"] button').eq(0).click();
    Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.get('[id*="Email"] button').click();
    cy.get('[type="email"]').type('fortestonly@mail.com', {delay : 20});
    cy.get('[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.wait(5000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
    cy.get('[aria-describedby="placeholder-editor"]').type('comment1');
    cy.get('[data-hook="submit-button"]').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'comment1');
    cy.wait(5000);
    cy.get('[data-hook="actions-menu-btn"] svg').eq(0).scrollIntoView().click();
    cy.get('[data-content="Delete"]').click();
    cy.contains('[data-hook="submit-button"]', 'Delete').click();
  });
});

Попробуй реализовать сама с новой ссылкой, и потом сократи пример который я тебе тут скинула.

*/


describe('Comment form', () => {
    it('', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event');
      cy.scrollTo('center');
      cy.wait(5000);
      cy.get('div [class="_xAN4M"]').type('test');
      cy.get('div [class="sseJy4 s__5IRdP sknm0Z oNm4fr---priority-7-primary oNm4fr--upgrade sE8AOM Ew0dET hd2vqg"]').click();
      cy.get('[data-hook=comments-author]').invoke('text').should('eq', 'test');
        });
});

