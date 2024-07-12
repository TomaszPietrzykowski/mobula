// import { getGreeting } from '../support/app.po';

describe('mobula-e2e', () => {
    beforeEach(() => cy.visit('/'));

    it('should log user in', () => {
        // Custom command example, see `../support/commands.ts` file
        // cy.login('asd@asd.jfo', 'asd');
        // cy.url().should('include', '/workspace');

        cy.visit('/login');

        cy.get('input[data-test="email"]').type("asd@asd.jfo");
        cy.get('input[data-test="password"]').type("asd");
        cy.get('button[type="submit"]').click();

        // Function helper example, see `../support/app.po.ts` file
        // getGreeting().contains(/1/);
    });
});
