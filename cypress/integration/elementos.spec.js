/// <references type="cypress" />





describe('Elementos Html', () => {


    it('textos', () => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('text', 'Cuidado onde clica, muitas armadilhas...')



    })


    it('links', () => {

        cy.get('[href="#"]').click()
        cy.get('#resultado').should('text', 'Voltou!')
    })

    it('botoes', () => {

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input').click()
        cy.get(':nth-child(2) > :nth-child(3) > input').click()
        cy.get(':nth-child(3) > :nth-child(3) > input').click()
        cy.get(':nth-child(4) > :nth-child(3) > input').click()
        cy.get(':nth-child(5) > :nth-child(3) > input').click()


    })


})