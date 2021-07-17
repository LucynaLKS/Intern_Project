//
/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking type shows the right headings', () => {
      
      cy.visit('https://prod-kurs.coderslab.pl/index.php')

      // cy.contains('type').click()

      cy.pause()
      cy.get('.ui-autocomplete-input')
      .type('T-Shirt', { delay: 10 })
      .type('{enter}')
      
      // cy.get('.action-disabled')
      // .type('There is a long text', { force: true,  delay: 1})

      cy.pause()

      // cy.get('#email1')
      // .focus()
      // .type('{command+a}')

      // cy.pause()
  
    //   // Should be on a new URL which includes '/commands/actions'
    //   cy.url().should('include', '/commands/actions')
  
    //   // Get an input, type into it and verify that the value has been updated
    //   cy.get('.action-email')
    //     .type('fake@email.com')
    //     .should('have.value', 'fake@email.com')
    })
  })