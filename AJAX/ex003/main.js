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
        } else {
            document.getElementById("div").innerHTML = "Tente mais tarde."
        }
        
    } 

    pedido.open("GET", "processar.php?n=joao&s=vitor", true) // Para evitar cash na hora da requisição, pode passar id pela url usando o método GET. 
    pedido.send() 
}