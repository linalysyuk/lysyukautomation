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

