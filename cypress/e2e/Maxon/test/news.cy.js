/// <reference types = 'Cypress'/>
import cookie from '../page/cookie'
import header from '../page/header'
import news from '../page/news'

describe ('News', () => {
    before(' ', () => {
        cy.visit('https://www.maxon.net/en/');
        cy.viewport(1920,1080);
        cy.wait(2000);
    });

    it('cookie', ()=>{
        cookie.modalCookieClose();
        })
});
    it('news header button', () => {
        header.newsButton();
 });
    it('sub news menu', () => {
        header.newsSubMenu();
});     
     it('sub section', () => {
        header.SubSection();
});
    it('first block news', () => {
        news.firstBlock();
});   
 
    it('container news',() => {
        news.newsContainer();
});