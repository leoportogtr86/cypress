// /// <references types="cypress"/>


describe('Iniciando acesso de páginas', () => {


    it('Primeiro acesso', () => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.title()

            .should('equal', 'Campo de Treinamento')
            .and('contains', 'Campo')




    })
})


