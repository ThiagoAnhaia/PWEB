let qtdePessoas = Number(prompt("Qtde de participantes na pesquisa: "));

let media = 0;
let maiorIdade = 0;
let menorIdade = 0;
let qtdePessimo = 0;
let qtdePositiva = 0;
let qtdeHomem = 0;
let qtdeMulher = 0;

for (let i = 1; i < qtdePessoas; i++) {
  let idade = Number(prompt("Pessoa " + i + ", informe sua idade: "));
  let sexo = prompt(
    "Pessoa " + i + ", informe sexo, sendo (H)-homem, (M)-Mulher: "
  );
  let opiniao = prompt(
    "Pessoa " +
      i +
      ", informe opinião, sendo ótimo=4, bom=3, regular=2, péssimo=1: "
  );

  media += idade;

  if (idade > maiorIdade) {
    maiorIdade = idade;
  }
  if (menorIdade == 0 || idade < menorIdade) {
    menorIdade = idade;
  }
  if (opiniao == 1) {
    qtdePessimo += 1;
  } else if (opiniao == 3 || opiniao == 4) {
    qtdePositiva += 1;
  }
  if (sexo == "H") {
    qtdeHomem += 1;
  } else {
    qtdeMulher += 1;
  }
}

alert(
  "Media de idades: " +
    parseInt(media / qtdePessoas) +
    "\nMais velha tem " +
    maiorIdade +
    " anos... E a mais nova tem " +
    menorIdade +
    " anos." +
    "\nClassificações como péssimo: " +
    qtdePessimo +
    "\nPorém, " +
    parseFloat((100 * qtdePositiva) / qtdePessoas).toFixed(2) +
    "% das pessoas classificaram como 'ótimo' ou 'bom'." +
    "\nSendo estas: " +
    qtdeMulher +
    " mulher(es), e " +
    qtdeHomem +
    " homem(ns)."
);
