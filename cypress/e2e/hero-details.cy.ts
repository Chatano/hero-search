describe('[E2E] Hero details', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.viewport(1920, 1080)
  })
  
  describe('UI', () => {
    beforeEach(() => {
      cy.get('.hero-card__view-more').first().click()
    })
    
    it('should close on click at close button', () => {
      cy.get('#close-drawer-btn').click()
      cy.get('.hero__wrapper').should('not.exist')
    })

    it('should close on click at overlay', () => {
      cy.get('.drawer__overlay').click()
      cy.get('.hero__wrapper').should('not.exist')
    })
    
    it('should render metrics', () => {
      cy.get('.hero__metrics').contains('Total Comics:')
      cy.get('.hero__metrics').contains('Total Stories:')
      cy.get('.hero__metrics').contains('Total Events:')
      cy.get('.hero__metrics').contains('Total Series:')
    })
  })

  it('should render correct hero', () => {
    cy.get('.hero-card').first().then($card => {
      cy.wrap($card.find('a')).click().wait(1000)

      const heroName = $card.find('.hero-card__info__name').text()

      cy.get('.hero__name').contains(heroName).should('exist')
    })
  })
})
