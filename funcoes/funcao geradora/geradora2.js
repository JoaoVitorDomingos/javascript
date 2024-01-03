function* perguntas() {
    const nome = yield "Qual seu nome?"

    console.log(`Variavel nome = ${nome}`)
    const esporte = yield "Qual seu esporte favorito?"

    console.log(`Variavel esporte = ${esporte}`)
    return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

var geradora = perguntas()
console.log(`1ª chamada da função: ${geradora}`)

console.log("2ª chamada: " + geradora.next().value)

console.log("3ª chamada: " + geradora.next("Bruno").value) // A string "Bruno" substitui o yield no qual parou, neste caso o: yield "Qual seu nome?"

console.log("4ª chamada: " + geradora.next("Futebol").value) // A string "Futebol" substitui o yield no qual parou, neste caso o: yield "Qual seu esporte favorito?"