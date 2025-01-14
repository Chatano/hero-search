describe('[E2E] Heroes Page', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.viewport(1920, 1080)
  })

  describe('Render UI', () => {
    it('should render header and highlight heroes link only', () => {
      cy.validatePageHeader('heroes')
    })
  })

  describe('Filters', () => {    
    it('should use initial filters correctly', () => {
      cy.get('#order-dropdown').contains('A-Z')
      cy.get('#page-size-dropdown').contains('10')
      cy.get('#search-input').should('have.value', '')
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })
    
    it('should render 10 heroes by default', () => {
      cy.get('.hero-card').should('have.length', 10)
    })

    // name filter
    it('should apply search by name and return expected heroes', () => {
      cy.get('#search-input').type('iron')
      cy.get('#filters-form').submit()
  
      cy.wait(4000)
  
      cy.get('.hero-card')
        .should('have.length', 10)
        .each($card => cy.wrap($card).contains(/^iron(.*)$/i))
    })

    // page size filter
    it('should be able to change sort and apply it', () => {
      cy.get('#order-dropdown').click()
      cy.get('#order-dropdown').contains('Z-A').click()
      cy.get('#filters-form').submit()

      // first hero name at A-Z (default) sort 
      cy.get('.hero-card').first().invoke('text').then(previousFirstHero => {
        cy.wait(4000);

        cy.get('.hero-card').first().should('not.have.text', previousFirstHero);
      });
    })

    // page size filter
    it('should be able to change page size and apply it', () => {
      cy.get('#page-size-dropdown').click()
      cy.get('#page-size-dropdown').contains('20').click()
      cy.get('#filters-form').submit()
      cy.wait(4000)
      cy.get('.hero-card').should('have.length', 20)
    })
  })

  describe('Pagination', () => {
    it('should be at page 1 by default', () => {
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })

    it('should disable go to previous page button by default', () => {
      cy.get('#go-to-prev-page').should('be.disabled')
    })

    it('should be able to go to next and previous pages', () => {
      cy.get('#go-to-next-page').click()
      cy.get('#current-page').contains(/^2 of(.*)$/) // current page should be 2
      cy.wait(4000)
      cy.get('#go-to-prev-page').click()
      cy.wait(1000) // cached
      cy.get('#current-page').contains(/^1 of(.*)$/) // current page should be 1 again
    })

    it('should block go to next page if user is at last page', () => {
      // searching exact hero name, will have only 1 result
      cy.get('#search-input').type('A.I.M.')
      cy.get('#filters-form').submit()
      cy.wait(4000) // delay to wait fetch result
      cy.get('#go-to-next-page').should('be.disabled')
    })

    it('should return page 1 data if page number at URL query is invalid', () => {
      cy.visit('/heroes?page=-1')
      cy.location('search').should('include', '?page=-1')
      cy.get('#current-page').contains(/^1 of(.*)$/)
    })
  })

  describe('Whole flow', () => {
    it('should be able use all filters at the same time', () => {
      // sort dropdown
      cy.get('#order-dropdown').click()
      cy.get('#order-dropdown').contains('Z-A').click()
      // page size dropdown
      cy.get('#page-size-dropdown').click()
      cy.get('#page-size-dropdown').contains('20').click()
      // search name input
      cy.get('#search-input').type('ca')
      cy.get('#filters-form').submit()
      cy.wait(4000)
      
      cy.get('.hero-card')
        .should('have.length', 20)
        .each($card => cy.wrap($card).contains(/^ca(.*)$/i))
      
      cy.get('#go-to-next-page').click()
      cy.get('#current-page').contains(/^2 of(.*)$/)

      cy.wait(4000)

      cy.get('.hero-card')
        .should('have.length', 20)
        .each($card => cy.wrap($card).contains(/^ca(.*)$/i))
    })
  })
})
