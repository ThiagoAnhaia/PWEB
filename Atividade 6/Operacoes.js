let numero1 = parseFloat(prompt("Digite o primeiro Número: "));
let numero2 = parseFloat(prompt("Digite o segundo Número: "));

alert(
  "O primeiro número foi: " +
    numero1 +
    "\nO segundo número foi: " +
    numero2 +
    "\n " +
    "\nSoma dos números: " +
    (numero1 + numero2) +
    "\nSubtração do primeiro, pelo segundo número: " +
    (numero1 - numero2) +
    "\nO produto dos números: " +
    numero1 * numero2 +
    "\nA divisão do primeiro pelo segundo: " +
    numero1 / numero2 +
    "\nO resto da divisão do primeiro pelo segundo número: " +
    (numero1 % numero2)
);
