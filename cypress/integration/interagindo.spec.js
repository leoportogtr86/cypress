// /// <references types="cypress"/>




it('Interagindo', () => {

    cy.visit('http://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')

        .click()
        .should('value', 'Obrigado!')
})