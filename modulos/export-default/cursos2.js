const cursos = ["JavaScript", "HTML", "CSS", "C++", "C#"]

/*
const getTodosCursos=()=> {
    return cursos
}
*/

export default function getTodosCursos() {
    return cursos
}

function getCurso(indice) {
    return cursos[indice]
}

export {cursos, getCurso}

//export default getTodosCursos