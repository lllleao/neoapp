/// <reference types="cypress" />

describe('Adicionar ao carrinho', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/v1/public/comics*').as('getComics')

        cy.visit('/')

        cy.wait('@getComics', { timeout: 10000 })
    })

    it('Ir ao produto', () => {
        cy.get('#home .align-cards a').first().click()

        cy.url().should('match', /\/comic\/\d+$/)
    })

    it('Adicionar ao carrinho', () => {
        cy.intercept('GET', '**/v1/public/comics/*').as('getOneComic')

        cy.get('#home .align-cards a').first().click()

        cy.wait('@getOneComic', { timeout: 10000 })
        cy.get('#comics button').click()
        cy.get('.cart-count').should('contain.text', '1')
    })
})
