// async - transforma a função numa promisse
async function carregar() {
    const resposta = await fetch("https://reqres.in/api/users/2")
    // await - só rodará o código abaixo quando já tiver uma responsta da requisição.
    console.log(resposta)
    console.log(typeof(resposta))

    const usuario = await resposta.json()
    console.log(usuario)
    console.log(typeof(usuario))

    let div = document.querySelector("#div")
    div.innerHTML = JSON.stringify(usuario)

    /* Tratamento de Erros
    try {
        const resposta = await fetch("https://reqres.in/api/users/2")
        const usuario = await resposta.json()
        let div = document.querySelector("#div")
        div.innerHTML = JSON.stringify(usuario)
    } catch (erro) {
        ...
    }
    */
}