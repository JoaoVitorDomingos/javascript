let nome = "Bruno Pinho Campos 1978"

console.log(nome)
console.log(nome.match(/[oh]/ig))
console.log(nome.match(/[a-m]/ig))
console.log(nome.match(/[a-m|0-9]/ig))

let numeros = "0, 1, 10, 100, 1000"

console.log(numeros)

console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))