/*
function executar() {
    $("#caixa").load("dados.txt")
}
*/

$(document).ready(function() {
    $("#cmd").click(function() {
        $("#caixa").load("dados2.txt")
    })
})

// O Jquery fará com que os comandos seja compatível com qualquer tipo de browser em qualquer versão, diferente do Ajax normal que pode ou não ser compatível com algum browser. 