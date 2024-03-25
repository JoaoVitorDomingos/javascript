// Várias promises com .all
// A Promise retorna o resultado quando todas as promisses nela forem resolvidas
let p1 = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 1 OK! Timeout")
    }, 3000)
} )

let p2 = new Promise( (resolve, reject) => {
    resolve("Promise 2 OK!")
} )

let p3 = new Promise( (resolve, reject) => {
    resolve("Promise 3 OK!")
} )

Promise.all([p1, p2, p3]).then((dados)=>{
    console.log(dados)
})


// Várias promises com .race
// Retorna o resultado da promisse que for resolvida primeira, a que ganhar a corrida.
let p4 = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 4 OK! Timeout")
    }, 3000)
} )

let p5 = new Promise( (resolve, reject) => {
    resolve("Promise 5 OK!")
} )

let p6 = new Promise( (resolve, reject) => {
    resolve("Promise 6 OK!")
} )

Promise.race([p1, p2, p3]).then((dados)=>{
    console.log(dados)
})


console.log("Frase")

