const cursos = ["JavaScript", "HTML", "CSS", "C++", "C#"]

export default function getTodosCursos() {
    return cursos
}

function getCurso(indice) {
    return cursos[indice]
}

//export {cursos, getCurso}
export {getCurso}