function contar() {

    var inicio = document.getElementById("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var resparag = document.getElementById("res-paragrafo")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resparag.innerHTML = "Impossível contar!"

    } else {
        resparag.innerHTML = "Contando: <br>"

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                resparag.innerHTML += `${c} &#x1F449 `
            }
        } else {
            // Contagem Decrescente
            for (var c = i; c >= f; c -= p) {
                resparag.innerHTML += `${c} &#x1F449 `
            }
        }
        resparag.innerHTML += "&#x1F3C1"
    }
}