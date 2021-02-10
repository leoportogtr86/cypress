/// <references types="cypress"/>





//criando um teste
it('Teste externo', () => {

    console.log('segundo teste com cypress')


})


describe('Grupo de testes', () => {

    describe('Grupo interno', () => {

        it('Teste 1 - Grupo interno', () => {

            console.log('Teste 1 de grupo interno')


        })

        it('Teste 2 - Grupo interno', () => {

            console.log('Teste 2 de grupo interno')


        })

        it('Teste 3 - Grupo interno', () => {

            console.log('Teste 3 de grupo interno')


        })


    })

    it('Teste interno 1', () => {
        console.log('Teste interno 1')

    })

    it('Teste interno 2', () => {
        console.log('Teste interno 2')

    })

    it('Teste interno 3', () => {
        console.log('Teste interno 3')

    })


})