/// <references type="cypress" />



describe('Elementos Html', () => {


    it('textos', () => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('text', 'Cuidado onde clica, muitas armadilhas...')



    })


})