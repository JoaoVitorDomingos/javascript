// O operador Spread (...) ele pode juntar os valores de duas variáveis em uma só, valores iguais ele adicionará o último, valor que tiver em uma variável mas não em outra será adicionado.

const jogador1 = {nome: "Bruno", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "João", energia: 100, vidas: 5, velociade: 80}
const jogador3 = {...jogador1, ...jogador2}
const jogador4 = {jogador1, jogador2}

console.log(jogador4) // receberá os dois objetos sem mudar nada, sem adicionar ou retirar algo
console.log(jogador3) // As mesmas propriedades serão subtítuidas pela última de mesmo valor e o que não tiver irá ser adicionado
// { nome: 'João', energia: 100, vidas: 5, magia: 150, velociade: 80 }
// existiam 2 propriedades nome, ele adicionou a ultima (jogador2)
// mesma coisa para energia e vida
// magia não tinha no jogador 2, só no um, mas foi adicionada mesmo assim, mesma coisa para velocidade.