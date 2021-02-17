/// <references types="cypress"/>






describe('Usando o hook before', () => {

    //esta função será chamada em todos os testes internos desse describe

    before(() => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {

        cy.reload()
    })



    it('testando hook 1', () => {

        cy.get('#buttonSimple').click()


    })

    it('testando hook 2', () => {

        cy.get('#buttonLazy').click()


    })





})