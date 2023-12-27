function soma(...valores) {
    let res = 0

    console.log(`Array Valores: ${valores}`)

    for(let valor of valores) {
        res += valor
    }

    return res
}

console.log(soma(10, 2, 3, 15, 20))