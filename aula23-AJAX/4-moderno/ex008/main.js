let botao = document.querySelector("#btn")
let lista = document.querySelector("#lista")

botao.addEventListener("click", function() {
    fetch("https://reqres.in/api/users?page=2") // Quando só vai pegar algo do servidor, não é necessário passar o segundo parâmetro, que no caso seria o objeto com o método e com o que vai enviar.
    .then(function(response) {
        //console.log(response)
        return response.json()
    })
    .then(function(response) {
        console.log(response.data)
        response.data.forEach(user => {
            let item = document.createElement("li")
            item.classList.add("item")

            item.innerHTML = `<img src="${user.avatar}"> <span class="nome"> ${user.first_name} </span>`

            lista.appendChild(item)
        });
    })
})