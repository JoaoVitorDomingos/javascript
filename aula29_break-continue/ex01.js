// O Break irá parar um loop de vez, e dar continuidade no código

let n = 0
let max = 100

while (n < max) {
    console.log(`Aula ${n}`)

    if(n > 10) {
        console.log(`${n} > 10 - Deu Break!!!`)
        break
    }

    n++
}

console.log("Fim do Programa")