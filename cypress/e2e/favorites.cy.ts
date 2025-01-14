import { Favorite } from "@/models/Favorite"

describe('[E2E] Favorites', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  describe('Favorites page (drawer)', () => {
    beforeEach(() => {
      cy.addInitialFavoritesAndVisit('/')
      cy.get('#header-favs-link').click()
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

    describe('Functionalities', () => {
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

  describe.only('Heroes page (hero card)', () => {
    beforeEach(() => {
      cy.addInitialFavoritesAndVisit('/heroes')
    })

    it('should add hero to favorites and display on favs list', () => {
      cy.get('.hero-card').first().then(($heroCard) => {
        const heroName = $heroCard.find('.hero-card__info__name').text();
        cy.wrap($heroCard.find('.fav-button')).click()
        cy.get('#header-favs-link').click() // open favs

        cy.get('.favs__list').contains(heroName).should('exist')
      })
    })

    it('should be able to unsave hero and do not show at favs list', () => {
      cy.get('.hero-card').first().then(($heroCard) => {
        const heroName = $heroCard.find('.hero-card__info__name').text();
        cy.wrap($heroCard.find('.fav-button')).click().click() // double click
        cy.get('#header-favs-link').click() // open favs
        cy.get('.favs__list').contains(heroName).should('not.exist')
      })
    })
  })
})
