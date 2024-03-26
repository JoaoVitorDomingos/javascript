// Toda variável declarada dentro de uma função só pode ser acessada dentro do escopo desta função, não é possível acessar esta variável fora do escopo da função, mesmo sendo um Var.
function teste() {
    if(true) {
        var nomeVar = "Bruno"
        if(true){
            console.log(`Dentro do escopo do Var: ${nomeVar}`) // Está dentro do escopo do var
        }
    }

    console.log(`Fora do escopo do Var: ${nomeVar}`) // Não está dentro do escopo do Var, mas mesmo assim é possível acessa-la
}

teste()

console.log(`Acessando o Var, declarado dentro de uma função, fora do escopo da função: ${nomeVar}`) // Está fora do escopo do Var, mas também da função, então mesmo sendo Var não será possível acessar, pois como foi declarado dentro de uma função, não é possível acessar.