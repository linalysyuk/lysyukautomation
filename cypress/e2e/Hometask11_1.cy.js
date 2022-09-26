
/* Comments:
1) Еще раз два раза не повторяю не повторряю )
div [class="_1UDJF"]' - это плохой локатор, даже на собесседовании на эт о могут обратить внимание и не сделать оффер,
страйся пока мы учимся выглядывать локаторы получше

2) И надо бы в тест добавить проверок, что или залогинилась или выпала ошибка, а то это получается не совсем тест



вот тебе пример 

describe ('Check LogIn form on main page', () => {
    before ('Open page', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.viewport(1300,768);
        cy.wait(8000);
    });
    it ('Test', () => {
        cy.contains('Log In').click();
        cy.url().should('eq', 'https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.get('button[data-testid="signUp.switchToSignUp"]', {timeout:7000}).click();
        cy.get('button[data-testid="buttonElement"]', {timeout:10000}).click();
        cy.contains('h1', 'Log In').invoke('text').should('eq', 'Log In');
        cy.get('input[type="email"]').type('alphaitschool@gmail.com', {delay:50}).should('have.value', 'alphaitschool@gmail.com');
        cy.get('input[type="password"]').type('Qwerty123!', {delay:50}).should('have.value', 'Qwerty123!');
        cy.get('[data-testid="buttonElement"]').click();
        cy.get('div[data-testid="siteMembers.container"] span').invoke('text').should('eq', 'Wrong email or password');
    });
});


или ты можешь написать сама подобный если зарегистрируешь любого пользователя и потом опробуешь с ним залогиниться.


Я знаю сложно! Но все получится: другого пути нет! Ты молодец!
*/

describe ('Authorization' , () => {   
    it('', () => { 
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.wait(5000);
        cy.get('div [class="_1UDJF"]').click();
        cy.wait(5000);
        cy.get('div [class=_1Qjd7]').click();
        cy.get('#input_input_emailInput_SM_ROOT_COMP9').type('test@gmail.com');
        cy.get('#input_input_passwordInput_SM_ROOT_COMP9').type('123456ffffff$');
        cy.get('div [class=recaptcha-checkbox-border]').click();
        cy.wait(3000);
        cy.get('div [class="_1fbEI"]').click();
        cy.wait(3000);
        cy.get('[class=_1hHt1] ').should('eq','test@gmail.com');
    });
});
