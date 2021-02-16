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

