let nome = document.querySelector("#inome")
let job = document.querySelector("#ijob")
let form = document.querySelector("#form")

// console.log(nome, job, form)

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let dados = {
        nome: nome.value,
        job: job.value
    }

    //console.log(dados)

    // let pedido = new XMLHttpRequest - Antigamente se usava isso para fazer requisições, mas foi substítuido pelo fetch()
    // fetch("url de destino", objeto com as opções de operações)

    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify(dados)
    }).then(function(response) {
        //console.log(response)
        return response.json()
    }).then(function(response) {
        console.log(response)
        alert("Cadastro realizado com sucesso!")
    })

})