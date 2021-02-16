// /// <references types="cypress"/>

// const { it } = require("mocha")






//criando um teste
it('Teste externo', () => {

    console.log('segundo teste com cypress')


})


describe('Grupo de testes', () => {

    describe('Grupo interno', () => {

        it.skip('Teste 1 - Grupo interno', () => {

            console.log('Teste 1 de grupo interno')


        })

        it('Teste 2 - Grupo interno', () => {

            console.log('Teste 2 de grupo interno')


        })

        it('Teste 3 - Grupo interno', () => {

            console.log('Teste 3 de grupo interno')


        })


    })

    it.skip('Teste interno 1', () => {
        console.log('Teste interno 1')

    })

    it('Teste interno 2', () => {
        console.log('Teste interno 2')

    })

    it('Teste interno 3', () => {
        console.log('Teste interno 3')

    })


})

it('Teste treino', () => {

    console.log('apenas mais um teste')
})

//---------------------------------------------

let a = 10
let b = 50


describe('Operações', () => {

    it('soma', () => {

        console.log(`Soma => ${a + b}`)

    })

    it('subtração', () => {

        console.log(`Subtração => ${a - b}`)
    })

    it('divisão', () => {

        console.log(`Divisão => ${a / b}`)
    })

    it('multiplicação', () => {

        console.log(`Multiplicação => ${a * b}`)
    })
})