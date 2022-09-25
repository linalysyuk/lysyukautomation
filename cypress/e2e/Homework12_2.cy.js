describe ('Multiplex' , () => {  
    beforeEach (() => {
        cy.viewport(820,1180);
        cy.visit('https://friends.multiplex.ua/login');
    });
}); 

    it('Facebook', () => {
        cy.get('a[href="https://auth2.multiplex.ua/fblogin"]').click();
        cy.wait(10000);
        cy.location('').should('equal', 'https://www.facebook.com/login.php?skip_api_login=1&api_key=2658120331157562&kid_directed_site=0&app_id=2658120331157562&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.2%2Fdialog%2Foauth%3Fclient_id%3D2658120331157562%26redirect_uri%3Dhttps%253A%252F%252Fauth.multiplex.ua%252Ffbcallback%26response_type%3Dcode%26scope%3Demail%26state%3DKZO4AEI_MeIXAy7CKszkNw%253D%253D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Da3809746-e921-4f5a-927f-d827f20da761%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauth.multiplex.ua%2Ffbcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DKZO4AEI_MeIXAy7CKszkNw%253D%253D%23_%3D_&display=page&locale=tr_TR&pl_dbl=0');
    });  

     it('Google', () => {
        cy.get('a[href="https://auth2.multiplex.ua/galogin"]').click();
        cy.wait(10000);
        cy.location('').should('equal', 'appleid.apple.comhttps://appleid.apple.com/auth/authorize?client_id=com.multiplex.lk&nonce=JtZYc2GVRZKdQn3aYB3sFQ%3D%3D&redirect_uri=https%3A%2F%2Fauth.multiplex.ua%2Fapcallback&response_mode=form_post&response_type=code&scope=name+email&state=tRYWYQHt-7CTK0Z9rYotcw%3D%3D');
    });  

     it('Apple', () => {   
        cy.get('a[href="https://auth2.multiplex.ua/aplogin"]').click();
        cy.wait(10000);
        cy.location('').should('equal', 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=838172915567-1s4mn9gj6mcohraifcfefcodikgphcjs.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauth.multiplex.ua%2Fgacallback&response_type=code&scope=openid%20email&state=rclWOLnTjaiC-AWzpMM3Gw%3D%3D&flowName=GeneralOAuthFlow');
    }); 