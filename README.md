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


#### Pulando um teste (skip)


Podemos usar o comando **skip** para pular determinado teste e fazer o fluxo passar direto.


    it.skip('Teste skip', ()=>{

        console.log('este teste não será executado')
    })



#### Comando **only**

Quando queremos que apenas determinado teste seja executado, usamos o **only**.


    it.only('teste only', ()=>{

        console.log('apenas este teste será executado.')
    })



Caso existam várias ocorrẽncias, apenas o último será executado.


### Assertivas

Para fazer uma verificação, para determinada condição ser atendida, usamos as **assertivas**.


##### Igualdade

    it ('teste de igualdade', ()=>{

        const a = 10

        expect(a, 'assertiva atendida').equal(10)
        
    })

Assertiva retornará sucesso.    


    it ('teste de igualdade', ()=>{

        const a = 10

        expect(a, 'erro').equal(15)
        
    })

Assertiva retornará erro.