//import getTodosCursos from "./cursos3.js"; // Não é possível renomear o padrão
//import { cursos as c, getCurso as gc } from "./cursos3.js";
import * as m_cursos from "./cursos3.js"

console.log(`Cursos: ${m_cursos.cursos}`)
console.log(`GetCurso: ${m_cursos.getCurso(3)}`)
console.log(`Default: ${m_cursos.default()}`)


/*
console.log(`Cursos: ${c}`)
console.log(`GetCurso: ${gc(2)}`)
console.log(`Função: ${getTodosCursos()}`)
*/
