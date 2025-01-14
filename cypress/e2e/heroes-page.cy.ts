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
    it('should apply initial values', () => {
      cy.get('#order-dropdown').contains('A-Z')
      cy.get('#page-size-dropdown').contains('10')
      cy.get('#search-text').should('have.value', '')
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })

    it.only('should disable go to previous page button by default ', () => {
      cy.get('#go-to-prev-page').should('be.disabled')
    })

    it('should apply search by name and return heroes correctly', () => {
      cy.get('#search-text').type('iron')
      cy.get('#heroes-filters').submit()
  
      cy.wait(4000)
  
      cy.get('.hero-card')
        .should('have.length', 10)
        .each($card => cy.wrap($card).contains(/^iron(.*)$/i))
    })

    it.only('should be able to go to next and previous pages', () => {
      cy.get('#go-to-next-page').click()
      cy.get('#current-page').contains(/^2 of(.*)$/)
      cy.wait(4000)
      cy.get('#go-to-prev-page').click()
      cy.wait(2000)
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })
  })

  describe('Fetch & query API data', () => {
    it('should render initially 10 heroes', () => {
      cy.get('.hero-card').should('have.length', 10)
    })
  })
})
