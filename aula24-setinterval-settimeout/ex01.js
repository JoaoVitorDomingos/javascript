console.log("Antes do setTimeout")

// setTimeout
setTimeout(function() {
    console.log("Testando o setTimeout")
}, 2000);

console.log("Depois do setTimeout")

// setInterval
setInterval(() => {
    console.log("Testando o setInterval")
}, 1000);