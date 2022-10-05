describe('Slider',()=>{
beforeEach(() =>{
  cy.viewport(1920,1080);
  cy.visit('https://mui.com/material-ui/react-slider/');
});

it('Small steps',() =>{
  cy.get('[id=small-steps]').scrollIntoView({duration: 1000});
  cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(6)
  .invoke('attr','style','left:13.50%').click();
  cy.get('[aria-label="Small steps"]').should('have.attr','value','-3e-8');

});

it('Custom marks',() => {
     cy.get('[id="custom-marks"]').scrollIntoView({duration:1000});
     cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(7)
     .invoke('attr','style','left:90%').click();
     cy.get('[aria-label="Custom marks"]').should('have.attr','value','90')
  
});

it('Range slider',() => {
  cy.get('[id="RangeSlider"]').scrollIntoView({duration:1000});
  cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(10)
  .invoke('attr','style','left:15%').click();
  cy.get('[data-index="0"] [aria-label="Temperate range"]')
  .should('have.attr','value','15');

  cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(11)
  .invoke('attr','style','left:94%').click();
  cy.get('[data-index="0"] [aria-label="Temperate range"]')
  .should('have.attr','value','94');
});

it('Music player (time)',() => {
  cy.get('[id="music-player"]').scrollIntoView({duration:1000});
  cy.get('.MuiSlider-root .MuiSlider-thumbColorPrimary').eq(22)
  .invoke('attr','style','left:90%').click();
  cy.get('[aria-label="time-indicator"]').should('have.attr','value','180');
  cy.get('.MuiBox-root .MuiTypography-body1').eq(8).invoke('text').then((el)=>{
    expect(el).to.be.equal('3:00');
 });
});
});
  

