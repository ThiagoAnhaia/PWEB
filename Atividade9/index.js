let numeros = new Array(3);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = prompt("Digite o n de posição " + i + ":");
}

let funcMaiorMenor = function (arr) {
  return Math.max.apply(null, arr);
};

let funcOrdena = function (arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
};

alert(
  "O maior número é: " +
    funcMaiorMenor(numeros) +
    "\nE a array ordenada é: " +
    funcOrdena(numeros)
);
