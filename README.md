![](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)

# cypress
Meus estudos de testes automatizados com a ferramenta Cypress


### Rodando o projeto

     npm run cypress:open




#### Script de configuração no VS Code

    /// <references types="cypress"/>


#### Criando um simples teste




    it('Teste', ()=>{

        console.log('Teste 1 no console.')
    })


#### Criando um grupo de testes (describe)

Podemos criar um grupo (describe) com vários testes dentro


    describe('Grupo', ()=>{

        it('Teste 1', ()=>{

            console.log('Teste interno 1')
        })

        it('Teste 2', ()=>{

            console.log('Teste interno 1')
        })

        it('Teste 3', ()=>{

            console.log('Teste interno 1')
        })
    })