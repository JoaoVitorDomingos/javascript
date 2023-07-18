function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 15) {
                // Criança
                img.setAttribute("src", "imgs/homem-crianca.png")
            } else if (idade < 23) {
                // Jovem
                img.setAttribute("src", "imgs/homem-jovem.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "imgs/homem-adulto.png")
            } else {
                // Idoso
                img.setAttribute("src", "imgs/homem-idoso.png")
            }

        } else if (fsex[1]) {
            genero = "Mulher"

            if (idade >= 0 && idade < 15) {
                // Criança
                img.setAttribute("src", "imgs/mulher-crianca.png")
            } else if (idade < 23) {
                // Jovem
                img.setAttribute("src", "imgs/mulher-jovem.png")
            } else if (idade < 50) {
                // Adultpng
                img.setAttribute("src", "imgs/mulher-adulta.png")
            } else {
                // Idoso
                img.setAttribute("src", "imgs/mulher-idosa.png")
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos!</p>`
        res.appendChild(img)
        
    }
}