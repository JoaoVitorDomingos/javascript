class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome

        if(ptipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if(ptipo == 2) {
            this.tipo = "Luxo"
            this.velmax = 100
        } else if(ptipo == 3) {
            this.tipo = "Comum"
            this.velmax = 120
        } else {
            this.tipo = "Militar"
            this.velmax = 180
        }
    }

    // Criação de Método
    info() { 
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log("---------------------------------")
    }

    setNome(pnome) {
        this.nome = pnome
    }

    getTipo() {
        return this.tipo
    }
}

// Instanciando Objetos
let carro1 = new Carro("Rapidão", 1)
let carro2 = new Carro("Super Luxo", 2)
let carro3 = new Carro("Bombadão", 5)
let carro4 = new Carro("Normal", 3)

// Utilização dos métodos
carro1.info()
carro2.info()
carro3.info()
carro4.info()

carro1.getTipo()

carro3.setNome("TROQUEI NOME")
console.log(carro3.nome)

console.log(carro2.velmax)
console.log(carro4.nome)