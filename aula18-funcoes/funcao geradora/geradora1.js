function* cores() {
    yield "Vermelho"
    yield "Verde"
    //return "AMARELO" - RETURN PARA A FUNÇÃO IDENPEDENTEMENTE SE TIVER MAIS COISA PARA SER EXECUTADA.
    yield "Azul"
}

const geradora = cores()
console.log(`Chamando pela 1ª vez a função geradora 'cores' : ${geradora}`) // RETORNA UM ITERADOR

console.log("2ª chamada: " + geradora.next().value) // VERMELHO

console.log("3ª chamada: " + geradora.next().value) // VERDE

console.log("4ª chamada: " + geradora.next().value) // AZUL

console.log("5ª chamada: " + geradora.next().value) // UNDEFINED POIS NÃO TEM MAIS COISAS PARA SE EXECUTAR

console.log("Já acabou? " + geradora.next().done) // PERGUNTA SE A FUNÇÃO JÁ TERMINOU DE EXECUTAR TUDO

