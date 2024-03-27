// O Continue irá parar a iteração atual, pulará esta iteração e voltará ao loop. O Continue não para o loop, só a iteração que está atualmente no loop, e passa pra próxima.

let max = 10
let pares = 0

for(let n = 0; n < max; n++) {
    if(n % 2 != 0) { // Irá checar se o número é par, se for irá adicionar na variável par, se não, está iteração irá ser pulada.
        console.log(`O número ${n} é impar, então está iteração atual será parada e irá pra próxima.`)
        continue
    }

    pares++
}

console.log(`Quantidade de pares: ${pares}`)
console.log("Fim do Programa")