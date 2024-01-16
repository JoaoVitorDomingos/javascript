const Pessoa = {
    nome: "Bruno", // Propriedade

    setNome(pnome) { // Método
        //nome = pnome - mudará a propriedade "nome" só no objeto usado
        this.nome = pnome // mudará a propriedade "nome" em todos os objetos com esta classe
    },

    getNome: function() { // Outro jeito de fazer um método
        //return nome
        return this.nome
    }
}

console.log(`Pessoa: ${Pessoa.nome}`)

const p2 = Pessoa
const p3 = Pessoa

console.log(`p2: ${p2.nome}`)
console.log(`p3: ${p3.nome}`)

console.log(`------------------------------`)

p2.nome = "Tiago" // Um jeito de mudar o valor de uma propriedade

console.log(`Pessoa: ${Pessoa.nome}`)
console.log(`p2: ${p2.nome}`)
console.log(`p3: ${p3.nome}`)

console.log(`------------------------------`)

p3["nome"] = "claudio" // Outro jeito de mudar o valor de uma propriedade

console.log(`Pessoa: ${Pessoa.nome}`)
console.log(`p2: ${p2.nome}`)
console.log(`p3: ${p3.nome}`)

console.log(`------------------------------`)

p2.setNome("Fernando")

console.log(`Pessoa: ${Pessoa.nome}`)
console.log(`p2: ${p2.getNome()}`)
console.log(`p3: ${p3.nome}`)