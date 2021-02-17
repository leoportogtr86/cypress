![](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)

# cypress
Meus estudos de testes automatizados com a ferramenta Cypress


## Rodando o projeto


<details>

<summary>Script</summary>

     npm run cypress:open


</details>





## Script de configuração no VS Code


<details>

<summary>Comentário</summary>

    /// <references types="cypress"/>


</details>




## Criando um simples teste

<details>

<summary>Script</summary>


    it('Teste', ()=>{

        console.log('Teste 1 no console.')
    })

</details>







## Criando um grupo de testes (describe)


<details>

<summary>Podemos criar um grupo (describe) com vários testes dentro</summary>



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


</details>



## Pulando um teste (skip)

Podemos usar o comando **skip** para pular determinado teste e fazer o fluxo passar direto.


<details>

<summary>Script</summary>

     
    it.skip('Teste skip', ()=>{

        console.log('este teste não será executado')
    })


</details>





## Comando **only**


Quando queremos que apenas determinado teste seja executado, usamos o **only**.

<details>

<summary>Script</summary>


    it.only('teste only', ()=>{

        console.log('apenas este teste será executado.')
    })
     


</details>



Caso existam várias ocorrẽncias, apenas o último será executado.





## Assertivas

Para fazer uma verificação, para determinada condição ser atendida, usamos as **assertivas**.


## Igualdade


<details>

<summary>Script</summary>

     
    it ('teste de igualdade', ()=>{

        const a = 10

        expect(a, 'assertiva atendida').equal(10)
        
    })


</details>



Assertiva retornará sucesso.    



<details>

<summary>Script</summary>


    it ('teste de igualdade', ()=>{

        const a = 10

        expect(a, 'erro').equal(15)
        
    })
    


</details>



Assertiva retornará erro.


## Assertiva booleana

Neste caso iremos fazer um teste de true ou false para saber se a assertiva foi ou não atendida


<details>

<summary>Script</summary>


    it('booleanos', () => {

        const isDomingo = true

        expect(isDomingo).equal(true)
    })
     


</details>






## Assertivas de objetos


Podemos testar se dois objetos são iguais da seguinte forma:

<details>

<summary>Script</summary>

     


    it('objetos', () => {

        const pessoa1 = {

            nome: "Doug",
            idade: 12
        }

        const pessoa2 = {


            nome: "Jack",
            idade: 15


        }

        expect(pessoa2).eql({ nome: "Jack", idade: 15 })
    })

</details>



Verificando se existe uma propriedade específica no objeto com determinado valor
<details>

<summary>Script</summary>

    expect(pessoa3).include({ profissão: "vaqueiro" })
     

</details>



Verificando se há certa propriedade no objeto
<details>



<summary>Script</summary>

     
    expect(pessoa1).property('nome')


</details>
  



Verificando se o objeto está ou não vazio

<details>

<summary>Script</summary>


    expect(pessoa2).to.not.be.empty
    expect(pessoa1).to.be.empty
     


</details>






## Assertivas de arrays

Verificando se há determinandos elementos em certo array (verificação integral, se todos os elementos estão lá)


<details>

<summary>Script</summary>

     

    it('arrays', () => {


        let letras = ['a', 'b', 'c']

        expect(letras).to.have.members(['a', 'b', 'c'])


    })


</details>
Verificando se apenas alguns elementos estão no array


<details>

<summary>Script</summary>

     
    expect(letras).to.include.members(['a', 'b'])


</details>



Verificando se o array está vazio


<details>

<summary>Script</summary>


    expect(array).empty
    expect(array).not.empty
     


</details>







## Assertivas de tipos


Verificando os tipos

<details>

<summary>Script</summary>

     


    it('igualdade', () => {

        const a = 10
        const nome = 'Leonardo'
        const fruta = "uva"


        expect(a).equal(10)
        expect(a).not.equal(90)
        expect(nome).equal("Leonardo")
        expect(fruta).not.be.equal("jaca")

    }) 

</details>




## Acessando páginas


<details>

<summary>Script</summary>


    it('Primeiro acesso', () => {

            cy.visit('http://wcaquino.me/cypress/componentes.html')

        })
     


</details>




## Buscando e interagindo com elementos

**Click num botão**

<details>

<summary>Script</summary>


    it('Interagindo', () => {

        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
    })
     


</details>


## Comandos Pause e Debug

Podemos "pegar" mais detalhes sobre a execução dos testes ao usar os comandos pause e debog.

<details>

<summary>Pause</summary>

        cy.pause()
    



</details>


<details>

<summary>Debug</summary>

        cy.title().should('contain', 'Treinamento').debug()
    



</details>


## Selecionando elementos de uma página


Para selecionar determinado elemento HTML de uma página com **cypress**, usamos os seletores css padrões.

Ex:

    h1
    .title
    #titulo
    ...


### Interagindo com textos



<details>

<summary>Script</summary>


        cy.get('.facilAchar').should('contain', 'Cuidado')

        cy.get('.facilAchar').should('text', 'Cuidado onde clica, muitas armadilhas...')



</details>



### Interagindo com links e botões (click)



<details>

<summary>Script</summary>

    cy.get('[href="#"]').click()

</details>













