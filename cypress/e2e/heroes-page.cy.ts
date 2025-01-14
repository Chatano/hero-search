describe('[E2E] Heroes Page', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.viewport(1920, 1080)
  })

  describe('Render & UI', () => {
    it('should render header and highlight heroes link only', () => {
      cy.validatePageHeader('heroes')
    })
  })

  describe('Filters & Pagination', () => {    
    it('should have sort dropdown with A-Z by default', () => {
      cy.get('#order-dropdown').contains('A-Z')
    })
    it('should have pageSize dropdown containing 10 by default', () => {
      cy.get('#page-size-dropdown').contains('10')
    })
    it('should have empty search input by default', () => {
      cy.get('#search-text').should('have.value', '')
    })
    it('should be at page 1 by default', () => {
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })
  })

  describe('Fetch & query API data', () => {
    it('should render initially 10 heroes', () => {
      cy.get('.hero-card').should('have.length', 10)
    })
  })
})
