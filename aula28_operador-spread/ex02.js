// O operador Spread espalha os valores de um array, em uma função com parâmetros, ao espalhar estes valores cada valor vai para um parâmetro, o que sobrar será ignorado.

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4, 10]

console.log(soma(valores)) // Aqui dará erro pois será colocado o array inteiro no primeiro parâmetro, enquanto os outros ficará undefined.
console.log(soma(...valores)) // Aqui retornará a soma, pois os valores foram espalhados, o 1 foi para o primeiro parâmetro, o 5 para o segundo, o 4 para o terceiro e último, o 10 foi ignorado pois não existe um quarto parâmetro para ele ir.