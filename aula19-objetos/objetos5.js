let Pessoa = {
    nome: "Jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "gato"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "Amarelo"
        },

        uno: {
            placa: "789456",
            cor: "Cinza"
        }
    }
}

console.log(`Carros: ${Pessoa.carros}`)
console.log(`Camaro: ${Pessoa.carros.camaro}`)
console.log(`Placa do Uno: ${Pessoa.carros.uno.placa}`)