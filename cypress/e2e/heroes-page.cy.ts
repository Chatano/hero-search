describe('[E2E] Heroes Page', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.viewport(1920, 1080)
  })

  it('should render initially 10 heroes', () => {
    cy.get('.hero-card').should('have.length', 10)
  })

  it('should render header and highlight heroes link only', () => {
    cy.validatePageHeader('heroes')
  })
})
