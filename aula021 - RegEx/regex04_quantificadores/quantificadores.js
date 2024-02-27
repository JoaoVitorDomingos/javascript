let nome = "Brunooooooo Pinho Camposssssss"

console.log(nome)

console.log(nome.match(/o+/ig))
console.log(nome.match(/s+/ig))
console.log(nome.match(/o+|s+/ig))

let numeros = "1, 10, 100, 10000"

console.log(numeros)

console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))