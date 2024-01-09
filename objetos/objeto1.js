// Criação de uma Classe
class Pessoa {
    constructor(pnome) { // Método Construtor, chamado ao instanciar objetos com o "new"
        this.nome = pnome
    }
}

// Instaciando Objetos com o "new"
let p1 = new Pessoa("Bruno")
let p2 = new Pessoa("Claudio")
let p3 = new Pessoa("Marta")

// Visualizando as Propriedades
console.log(p1)
console.log(p1.nome)

console.log(p2)
console.log(p2.nome)

console.log(p3)
console.log(p3.nome)