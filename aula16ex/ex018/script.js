var listanumeros = []
var msgerro = "Valor inválido ou já encontrado na lista"
var tabnumeros = document.getElementById("tabnumeros")
var divres = document.getElementById("res")

function adicionar() {
    var txtnum = document.getElementById("txtnum")
    var numero = Number(txtnum.value)

    if (txtnum.value.length == 0) {
        alert(msgerro)

    } else if (numero < 1 || numero > 100) {
        alert(msgerro)

    } else if (listanumeros.indexOf(numero) != -1) {
        alert(msgerro)

    } else {
        divres.innerHTML = ``

        listanumeros.push(numero)
        console.log(listanumeros)

        var option = document.createElement("option")
        tabnumeros.appendChild(option)
        option.innerHTML = `Valor ${numero} adicionado.`
    }

    txtnum.value = ""
    txtnum.focus()
}

function finalizar() {

    if (listanumeros.length == 0) {
        alert("Adicione os números!!!")
    } else {
        listanumeros.sort()
        console.log(listanumeros)

        var totalnumeros = listanumeros.length
        console.log(`Ao todo temos ${totalnumeros} números cadastrados.`)
        divres.innerHTML = `<p>Ao todo temos ${totalnumeros} números cadastrados.</p>`

        var menornum = listanumeros[0]
        console.log(`O menor valor informado foi ${menornum}`)
        divres.innerHTML += `<p>O menor valor informado foi ${menornum}</p>`

        /*
        var maiornumindex = totalnumeros - 1
        var maiornum = listanumeros[maiornumindex]
        */
        var maiornum = 0
        for (var index in listanumeros) {
            var numerolista = listanumeros[index]
            if (numerolista > maiornum) {
                maiornum = numerolista
            }
        }
        console.log(`O maior número informado foi ${maiornum}`)
        divres.innerHTML += `<p>O maior número informado foi ${maiornum}</p>`

        var soma = 0
        for (var index in listanumeros) {
            soma += listanumeros[index]
        }
        console.log(`Somando todos os valores, temos ${soma}`)
        divres.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

        var media = soma / totalnumeros
        console.log(`A média dos valores digitados é ${media}`)
        divres.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}