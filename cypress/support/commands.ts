/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    validateImageRender(id: string): Chainable<void>
  }
}

Cypress.Commands.add('validateImageRender', (id: string) => {
  cy.get(`#${id}`).should('be.visible').and(($img) => {
    const element = $img[0] as HTMLImageElement
    expect(element.naturalWidth).to.be.greaterThan(0)
  })
})

