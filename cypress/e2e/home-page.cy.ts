describe('[E2E] Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1920, 1080)
  })

  describe('Renders and content', () => {
    it('should render all texts at correct places', () => {
      cy.get('h1#title').contains('Hero Search')
      cy.get('h2#description').contains('Find all the information you want to know about the heroes in the Marvel Universe!')
      cy.get('p#all-heroes').contains('Do you want to see all the heroes?')
      cy.get('a#all-heroes-link').contains('Click here to view all heroes')
    })

    it('should render header and highlight home link only', () => {
      cy.validatePageHeader('home')
    })

    it('should render spider man image', () => {
      cy.validateImageRender('spider-man-image')
    })
  })
})
