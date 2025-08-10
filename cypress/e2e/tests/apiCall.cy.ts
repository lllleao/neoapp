/// <reference types="cypress" />

describe('Teste de carregamento', () => {
    it('Intercepta chamada da API', () => {
        cy.intercept('GET', '**/v1/public/comics*').as('getComicsToHero')

        cy.visit('/')

        cy.wait('@getComicsToHero', { timeout: 10000 })
            .its('response.statusCode')
            .should('eq', 200)
    })
})
