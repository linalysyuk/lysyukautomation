/// <reference types = 'Cypress'/>
import buy from '../page/buy'
import header from '../page/header'
import checkout from '../page/checkout'
import cookie from '../page/cookie'

describe ('Checkout', () => {
    before('Home Page', () => {
        cy.visit('https://www.maxon.net/en/');
        cy.viewport(1920,1080);
        cy.wait(2000);
    });

    it('cookie', ()=>{
        cookie.modalCookieClose();
        })
});
    it('header button', () => {
        header.buyButton();
 });
    it('buy plan button', () => {
        buy.ButtonBuyNow();
});   
    it('total price', () => {
        checkout.Price('1.351,77 €');
        
 });    





