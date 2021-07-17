/// <reference types="cypress" />

describe('Login', () => {
    it('user logs in', () => {

        cy.visit('https://prod-kurs.coderslab.pl/index.php')

        cy.get('a > .hidden-sm-down')
        .click()

        cy.get('.col-md-6 > .form-control')
        .type('kubaNowyJakubowski@gmail.com')

        cy.get('.input-group > .form-control')
        .type('MOJEhasloJESTtu')

        cy.get('#submit-login')
        .click()

        cy.get('.account > .hidden-sm-down')
        .should('have.text', 'Kuba Jakubowski')

    })
})