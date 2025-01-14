describe('[E2E] Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1920, 1080)
  })

  describe('Render UI', () => {
    it('should render all texts at correct places', () => {
      cy.get('h1#title').contains('Hero Search').should('exist')
      cy.get('h2#description').contains('Find all the information you want to know about the heroes in the Marvel Universe!').should('exist')
      cy.get('p#all-heroes').contains('Do you want to see all the heroes?').should('exist')
      cy.get('a#all-heroes-link').contains('Click here to view all heroes').should('exist')
    })

    it('should render header and highlight home link only', () => {
      cy.validatePageHeader('home')
    })

    it('should render spider man image', () => {
      cy.validateImageRender('spider-man-image')
    })
  })

  describe('Search functionalities', () => {
    it('should go to /heroes on submit search form', () => {
      cy.get('#search-form').submit()
      cy.location('pathname').should('equal', '/heroes')
    })
    
    it('should send search query on params to /heroes route', () => {
      cy.get('#search-input').type('iron')
      cy.get('#search-form').submit()
      cy.location('search').should('include', 'search=iron')
    })
  })
})
