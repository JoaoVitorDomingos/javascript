let nome = "Bruno Pinho Campos 1978"

console.log(nome)

console.log(nome.match(/\d/ig)) // Números
console.log(nome.match(/\s/ig)) // Espaços
console.log(nome.match(/\bp/ig)) // Letras Limites de Palavras, letras onde o próximo caracter (i) é uma letra da palavra e o anterior (espaço) não.
console.log(nome.match(/\bi/ig)) // Tanto o próximo caractere (n) e o anterior (P) são letras da palavra.