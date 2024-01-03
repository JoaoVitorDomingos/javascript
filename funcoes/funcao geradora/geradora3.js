function* contador() {
    let i = 0

    while(true) {
        yield i++
        
        if(i > 5)
            break
    }
}

const geradora = contador()

for(let numero of geradora) {
    console.log(numero)
}