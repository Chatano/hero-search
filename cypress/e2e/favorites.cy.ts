import { Favorite } from "@/models/Favorite"
import { STORAGE_KEY } from "@/services/favorites"

describe('[E2E] Favorites', () => {
  beforeEach(() => {
    cy.fixture('favorites').then(({ favorites }) => {
      const storagedValue = JSON.stringify({ favorites })

      cy.visit('/', { 
        onBeforeLoad: (win) => {
          win.localStorage.setItem(`${STORAGE_KEY}-favs`, storagedValue)
        }
      })
    })

    cy.get('#header-favs-link').click()
    cy.viewport(1920, 1080)
  })

  describe('Render UI', () => {
    it('should render title and drawer layout', () => {
      cy.get('h1#favs-title').contains('My Favorites')
      cy.get('.favs__wrapper').should('exist')
    })

    it('should close on click at close button', () => {
      cy.get('#close-drawer-btn').click()
      cy.get('.favs__wrapper').should('not.exist')
    })

    it('should close on click at overlay', () => {
      cy.get('.drawer__overlay').click()
      cy.get('.favs__wrapper').should('not.exist')
    })
  })

  describe('Screen Functionalities', () => {
    it('should list all favorite heroes', () => {
      cy.fixture('favorites').then(({ favorites }) => {
        favorites?.forEach((fav: Favorite) => {
          cy.get('.favs__list__item').contains(fav.name)
        })
      })
    })

    it('should open hero page on click at list item', () => {
      cy.get('.favs__list__item').first().click()
      cy.location('pathname').should('includes', '/hero/')
    })
  })
})
