describe('Comment form', () => {
    it('', () => {
    
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event');
      cy.scrollTo('center');
      cy.wait(50000);
      cy.get('[data-hook=comment-box-placeholder]').type('test');
      cy.get('[data-hook=submit-button]').click();
      cy.get('[data-hook=comments-author]').should('eq', 'test');
        });
});
////не могу заранить на cypress,выдает ошибку,прошу помочь
