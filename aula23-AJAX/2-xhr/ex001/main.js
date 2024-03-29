window.onload = function() {
    document.getElementById("btn").addEventListener("click", btn_click)
}

function btn_click() {
    //document.getElementById("div").innerHTML = "Este é o texto alterado."


    // AJAX

    let pedido = new XMLHttpRequest() // Criamos o objeto request (como se fosse pegar uma folha e caneta para começar a escrever uma carta)
    // .responseType = "json" - a resposta da requisição virá automaticamente no tipo que foi definido

    pedido.onreadystatechange = function() {
        document.getElementById("div").innerHTML = this.responseText
    } // Definir a função que vai atuar mediante a resposta (como se fosse escrever a carta)

    pedido.open("GET", "dados.txt", true) // Escolhemos o método que vai ser utilizado a requisição, o que queremos e se vai ser de modo assíncrono ou não.
    pedido.send() // Enviamos a requisição (enviamos a carta)
    // .send(algo) - caso queria enviar um documento (POST) para o banco de dados (como se fosse um anexo na requisição), colocamos no send() em formato json.
}