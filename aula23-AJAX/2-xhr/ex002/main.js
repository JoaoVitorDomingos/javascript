window.onload = function() {
    document.getElementById("btn").addEventListener("click", btn_click)
}

function btn_click() {
    //document.getElementById("div").innerHTML = "Este é o texto alterado."


    // AJAX

    let pedido = new XMLHttpRequest() 

    pedido.onreadystatechange = function() {
        if(pedido.readyState == 4 && pedido.status == 200) {
            document.getElementById("div").innerHTML = this.responseText
            console.log(`Ready State: ${pedido.readyState}`) // Mostrará a fase em que está a requisição (0 - 4)
            console.log(`Status: ${pedido.status}`) // Mostrará o status da requisição (200 - OK, 403 - Forbidden, 404 - Not Found)
        } else {
            document.getElementById("div").innerHTML = "Tente mais tarde."
            console.log(`Ready State: ${pedido.readyState}`)
            console.log(`Status: ${pedido.status}`)
        }
        
    } 

    pedido.open("GET", "ddados.txt", true) 
    pedido.send() 
}