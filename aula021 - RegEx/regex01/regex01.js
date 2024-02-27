let nome = new String("Bruno Pinho Campos")

console.log(nome)

console.log("Pinho:" + nome.search("Pinho"))
console.log("pinho:" + nome.search("pinho"))
console.log("pinho:" + nome.search(/pinho/i)) // Ignora o Case Sensitivy

console.log(nome.match("o"))
console.log(nome.match(/o/g)) // Faz uma busca global
console.log("O: " + nome.match(/O/g))
console.log(nome.match(/O/ig))

console.log(nome.replace("o", "Teste"))
console.log(nome.replace("O", "Teste"))
console.log(nome.replace(/O/i, "Teste"))
console.log(nome.replace(/O/ig, "Teste"))