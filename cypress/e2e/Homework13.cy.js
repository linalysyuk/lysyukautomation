describe('test', () => {
    it('', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/frames');
        cy.get('iframe').then(function($iFrame){
          const iframe= $iFrame.contents().find('h1');
          cy.wrap('h1').find('#sampleHeading').then((el) =>{
            expect(el.text()).to.be.visible('This is a sample page'); 
             });
        });
       });
   });
    