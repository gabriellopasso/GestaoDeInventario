import Curso from "./rules/curso/model/Curso";

const curso = new Curso({
    nome:'sexo é bom sexo é bom sexo é bom sexo é bom',
    duracao: 5432
})

console.log(curso.id.valor)
console.log(curso.nome.completo)
console.log(curso.duracao.emHorasEMinutos)