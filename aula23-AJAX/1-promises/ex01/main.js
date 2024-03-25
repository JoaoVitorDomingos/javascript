const div = document.getElementById("div")

let promise = new Promise( (resolve, reject)=> {
    let resultado = false
    let tempo = 3000

    setTimeout(()=>{
        if(resultado) {
            resolve("Deu tudo certo")
        } else {
            reject("Deu tudo errado")
        }
    }, tempo)
} )

promise.then( (retorno)=>{
    div.innerHTML = retorno
    div.classList.remove("erro")
    div.classList.add("ok")
})

promise.catch( (retorno)=>{
    div.innerHTML = retorno
    div.classList.remove("ok")
    div.classList.add("erro")
})

div.innerHTML = "Processando..."

