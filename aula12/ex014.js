// É possível colocar vários cases juntos.
let colocacao = 5

switch(colocacao) {
    case 1:
        console.log("Primeiro Lugar")
        break

    case 2: 
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Terceiro Lugar")
        break

    case 4: case 5: 
        console.log("Top 5")
        break

    default:
        console.log("Fora do Top 5")
        break
}