//<reference types="Cypress"/>
describe('Cookies',()=>{
    xit('checkCookies', () => { 
        cy.viewport(1920,1080);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-bg',{timeout: 4000}).click();
        cy.getCookie('beaxy_cookie_notificated',{timeout: 4000}).should('have.property','value','true');
        });
    
xit('setCookies',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.setCookie('alphaSchool','true');
});
});
xit('clearCookies',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.clearCookies();
});
xit('updateCookie',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.get('.modal-cookie-bg',{timeout: 4000}).click();
    cy.clearCookie('beaxy_cookie_notificated').then(function() {
        cy.setCookie('beaxy_cookie_notificated','false').then(function(){
            cy.getCookies('beaxy_cookie_notificated',{timeout: 4000}).should('have.property','value','false');
        });
    });
});

xit('deleteValueCookie',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.get('.modal-cookie-bg',{timeout:5000}).click();
    cy.clearCookie('beaxy_cookie_notificated').then(function() {
    cy.getCookie('beaxy_cookie_notificated').should('be.null');

});
});

xit('checkLengthCookies',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.getCookies().should('have.length',3);
});

xit('checkLengthCookies',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000); 
    cy.getCookies();
    cy.getCookies().should('be.empty');
});

xit('localStorage',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.setLocalStorage('TestKey','TestValue');
});
xit('getlocalStorage',() => {
    cy.viewport(1920,1080);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.setLocalStorage('TestKey','TestValue');
    cy.getLocalStorage('TestKey').should('equal','TestValue');
    cy.clearLocalStorage();
});