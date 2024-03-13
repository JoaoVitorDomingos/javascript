class Cursos {
    static cursos = ["JavaScript", "HTML", "CSS", "C++", "C#"]

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(indice)=>{
        return this.cursos[indice]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos = []
    }
}

export default Cursos