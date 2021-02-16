/// <references types="cypress"/>





it('igualdade', () => {

    const a = 10
    const nome = 'Leonardo'
    const fruta = "uva"


    expect(a).equal(10)
    expect(a).not.equal(90)
    expect(nome).equal("Leonardo")
    expect(fruta).not.be.equal("jaca")

})


it('booleanos', () => {

    const isDomingo = true

    expect(isDomingo).equal(true)
})


it('objetos', () => {

    const pessoa1 = {

        nome: "Doug",
        idade: 12
    }

    const pessoa2 = {


        nome: "Jack",
        idade: 15


    }

    const pessoa3 = {

        nome: "Zé",
        idade: 45,
        profissão: "vaqueiro"
    }

    expect(pessoa2).eql({ nome: "Jack", idade: 15 })

    expect(pessoa3).include({ profissão: "vaqueiro" })

    expect(pessoa1).property('nome')
})

