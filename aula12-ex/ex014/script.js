function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")
    var hora = new Date().getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "imagens/manha.png"
        document.body.style.background = "#febf93"
    } else if (hora >= 12 && hora < 19) {
        // BOA TARDE
        img.src = "imagens/tarde.png"
        document.body.style.background = "#e88146"
    } else {
        // BOA NOITE 
        img.src = "imagens/noite.png"
        document.body.style.background = "#264887"
    }
}