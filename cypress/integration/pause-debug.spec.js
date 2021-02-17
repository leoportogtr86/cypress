/// <references types="cypress"/>



describe('Testando o pause e debug', () => {

    it('pause', () => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.pause()
        cy.title().should('contain', 'Treinamento').debug()

    })
})