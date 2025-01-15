describe('[E2E] Hero details', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.viewport(1920, 1080)
  })

  describe('Handle close drawer', () => {
    it('should close on click at close button', () => {
      cy.get('#close-drawer-btn').click()
      cy.get('.hero__wrapper').should('not.exist')
    })

    it('should close on click at overlay', () => {
      cy.get('.drawer__overlay').click()
      cy.get('.hero__wrapper').should('not.exist')
    })
  })
})
