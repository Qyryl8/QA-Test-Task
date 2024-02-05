import { timeout } from './constants/timeouts';

// timeout - reusable so I'd create another page object file with hardcoded values for timeouts
// example: timeout named deafult is 4000, so in further cases it will be called by timeout.default

export class LoginPage {
  // email and password are values whcih are in ENV gitignore file for security reasons
  // those params are defined in configuration
  submitLogin(email = 'usualUserEmail', password = 'usualPassword') {
    cy.visit('/');
    // where '/' is base url and equals https://my.asos.com/identity/login?
    cy.get('input[name="Username"]').type(Cypress.env(`${email}`));
    cy.get('input[class="qa-password-textbox"]').type(Cypress.env(`${password}`), { log: false });
    cy.get('input[value="Sign in"]').click();
    cy.wait(timeout.default);
    cy.get('[data-testid="heading"]').should('be.visible')
    cy.get('div[aria-label="Wrong Password"]').should('be.visible')
    cy.get('nav[data-auto-id="main-nav"]').should('be.visible')
    // assertions to verify the proper user and displaying of the navigation list
  }

}

export const actionLogin = new LoginPage();
