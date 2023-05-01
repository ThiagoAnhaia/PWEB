/*Forma 1*/
var aluno1 = {
  nome: "Thiago",
  ra: "0030482023032",
  turma: "5° Semestre",
};
alert(aluno1.nome + " " + aluno1.ra + " " + aluno1.turma);

/*Forma 2*/
var aluno2 = new Object();
aluno2.nome = "João";
aluno2.ra = "0030482023013";
aluno2.turma = "7° Semestre";

alert(aluno2.nome + " " + aluno2.ra + " " + aluno2.turma);

/*Forma 3*/
var aluno3 = {};
aluno3.nome = "Natalia";
aluno3.ra = "0030482023017";
aluno3.turma = "3° Semestre";

alert(aluno3.nome + " " + aluno3.ra + " " + aluno3.turma);
