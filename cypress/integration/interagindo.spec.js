// /// <references types="cypress"/>




it('Interagindo', () => {

    cy.visit('http://wcaquino.me/cypress/componentes.html')
    cy.get('#buttonSimple').click()

    cy.get('#buttonSimple').should('value', 'Obrigado!')
})