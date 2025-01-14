/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    validateImageRender(id: string): Chainable<void>
    validatePageHeader(page_id: string): Chainable<void>
  }
}

// validate if image src loaded and have a naturalWidth, if not, the src did not loaded correctly
Cypress.Commands.add('validateImageRender', (id: string) => {
  cy.get(`#${id}`).should('be.visible').and(($img) => {
    const element = $img[0] as HTMLImageElement
    expect(element.naturalWidth).to.be.greaterThan(0)
  })
})

// validate if header rendered correctly at page and if the current tab is working
Cypress.Commands.add('validatePageHeader', (page_id: string) => {
  cy.get('#page-header').should('be.visible')

  cy.get('#page-header #header-tabs').each(($el) => {
    const id = $el.attr('id');

    if (id === `header-${page_id}-link`) {
      cy.wrap($el).should('have.class', 'active');
      return;
    } 
    
    cy.wrap($el).should('not.have.class', 'active');
  });
})

