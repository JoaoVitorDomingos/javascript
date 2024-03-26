// No javascript, ao declarar uma variável é feito sua elevação até o topo, do escopo inicial até o topo que foi implementada.
// Var - Permite com que a variável seja acessada fora do escopo de alguma instrução.
// Let - Não permite com que a variável seja acessada fora do escopo de alguma instrução.

if(true) {
    var nomeVar = "Bruno"
    let nomeLet = "João"
    if(true){
        console.log(`Dentro do escopo do Var: ${nomeVar}`) // Está dentro do escopo do var
        console.log(`Dentro do escopo do Let: ${nomeLet}`) // Está dentro do escopo do let
    }
}

console.log(`Fora do escopo do Var: ${nomeVar}`) // Não está dentro do escopo do Var, mas mesmo assim é possível acessa-la
console.log(`Fora do escopo do Let: ${nomeLet}`) // Não está dentro do escopo do Let e não é possível acessa-la


