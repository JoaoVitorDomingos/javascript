const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

// 1 - Reverse
// Inverte a ordem do array
const reverseData = data.reverse()

console.log(reverseData)

// 2 - Find
// Percorre cada item do array procurando algo, ele retorna só uma coisa e é a última encontrada, então se tiver mais de uma coisa que se encaixa no find, ele só retornará a última.
const salario = 5000

const maiorSalario = data.find((user) => user.sallary > salario)

console.log(maiorSalario)

// 3 - FindIndex
// Percorre cada item do array procurando algo e retornará seu índice, sua posição. E também será o último encontrado.
const menorSalario = data.findIndex(function (user) {
    return user.sallary > 0 && user.sallary < 2000
})

console.log(menorSalario)

data[menorSalario].sallary += 200

console.log(data)

// 4 - Includes
// Verifica se o array tem um item em específico e retorna um Boolean
// Melhor utilizar em array simples, com números, strings, algo fácil de achar
const numeros = [0, 1, 2, 3, 4, 5]

const quatro = numeros.includes(4)

console.log(quatro)
console.log(numeros.includes(100))

// 5 - MAP
// Percorre cada item do array executando o que foi defenido
// Geralmente quando se quer alterar algo no array se usa o map
data.map((user) => (user.newsletter = false))

console.log(data)

// 6 - Filter
// Irá filtrar os itens do array. Diferente do find ele irá retornar todos que se encaixarem na condição.
const cnh = data.filter((user) => user.driverLicense)

console.log(cnh)

// 7 - Reduce
// Irá reduzir os itens em um tipo de item só, por exemplo fazer uma soma.
// O primeiro parametro da função anonima é uma variável do próprio método reduce, a variável que será retornada no final.
const somaSalario = data.reduce((totalSalario, user) => (totalSalario += user.sallary), 0)

console.log(somaSalario)

// 8 - ForEach
// Um loop, onde percorrerá todos os itens de um array e fará o que foi defenido.
const mostrarNomeUsuarios = (users) => {
    users.forEach((user) => {
        console.log(`Olá, ${user.name}!`)
    });
}

mostrarNomeUsuarios(data)

// 9 - Some
// Irá percorrer o array e retornará um boolean dizendo se algum item no array tem algo que você quer.
let alguemComNewsletter = data.some((user) => user.newsletter)

console.log(alguemComNewsletter)

data[0].newsletter = true;

alguemComNewsletter = data.some((user) => user.newsletter)

console.log(alguemComNewsletter)

// 10 - Every
// Irá percorrer o array e retonará um boolean dizendo se todos os itens do array tem algo que você quer.
const todosTemNome = data.every((user) => user.name)

console.log(todosTemNome)

const todosTemBomSalario = data.every((user) => user.sallary > 2000)

console.log(todosTemBomSalario)