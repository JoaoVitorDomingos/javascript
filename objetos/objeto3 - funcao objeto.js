function Carro(pnome, ptipo) {
    this.nome = pnome, // Propriedade

    // Criação de Método
    this.tipo = function() {
        if(ptipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
            return this.tipo
        } else if(ptipo == 2) {
            this.tipo = "Luxo"
            this.velmax = 100
            return this.tipo
        } else if(ptipo == 3) {
            this.tipo = "Comum"
            this.velmax = 120
            return this.tipo
        } else {
            this.tipo = "Militar"
            this.velmax = 180
            return this.tipo
        }
    },

    this.info = function() { 
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo()}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log("---------------------------------")
    },

    this.setNome = function(pnome) {
        this.nome = pnome
    },

    this.getTipo = function() {
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