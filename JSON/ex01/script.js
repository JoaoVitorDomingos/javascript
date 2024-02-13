const objs = [
    {
    nome: 'Matheus',
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
        profissao: 'Programador',
        empresa: 'Empresa X'
    },
    hobbies: ['Programador', 'Correr', 'Ler'],
    },
    {
        nome: 'João',
        idade: 20,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ['Jogar', 'Academia'],
    },
]

// Objetos
console.log('Objetos:')
console.log(objs)
console.log(typeof objs)

// JSON
// Converter Objeto para JSON
const jsonData = JSON.stringify(objs)

console.log('JSON:')
console.log(jsonData)
console.log(typeof jsonData)

// Converter JSON para Objeto
const objData = JSON.parse(jsonData)

console.log('JSON convertido em Obj:')
console.log(objData)
console.log(typeof objData)