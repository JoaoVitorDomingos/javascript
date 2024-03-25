function executar() {
    // AJAX
    let pedido = new XMLHttpRequest

    // Resposta 
    pedido.onreadystatechange = function() {
        // Verificar o estado da resposta
        if(this.readyState == 4 && this.status == 200) {
            // Tratamento dos dados XML
            let dados = this.responseXML
            console.log("Dados:")
            console.log(dados)

            let clientes = dados.getElementsByTagName("cliente")
            console.log("Clientes:")
            console.log(clientes)

            var divClientes = document.getElementById("clientes")

            for(let i = 0; i < clientes.length; i++) {
                var cliente = document.createElement("div")
                var clienteNome = clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue
                var clienteContato = clientes[i].getElementsByTagName("contato")[0].childNodes[0].nodeValue

                cliente.innerHTML = `<p>Nome: ${clienteNome}. <br> Contato: ${clienteContato}.</p>`

                divClientes.appendChild(cliente)
            }
        }
    }

    // Enviar o pedido
    pedido.open("GET", "dados.xml", true)
    pedido.send()
}