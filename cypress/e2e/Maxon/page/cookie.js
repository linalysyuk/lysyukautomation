
class cookie {
    selectors = {

    modalCookieClose :()=> cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll.CybotCookiebotDialogBodyButton",{timeout:1500}),
  };
  modalCookieClose() {
        this.selectors.modalCookieClose().click();
    
    };
    
}; module.exports = new cookie();
        
  