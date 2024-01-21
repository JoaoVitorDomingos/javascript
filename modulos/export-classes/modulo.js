import c from "./cursos4.js"

console.log(c.getTodosCursos())
console.log(c.getCurso(3))

c.addCurso("Photoshop")
console.log(c.getTodosCursos())

c.apagarCursos()
console.log(c.cursos)
