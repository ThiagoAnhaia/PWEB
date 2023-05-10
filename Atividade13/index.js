function tudoMaiusc() {
  document.getElementById("text").value = document
    .getElementById("text")
    .value.toUpperCase();

  document.forms.teste.opcao1.checked = true;
  document.forms.teste.opcao2.checked = false;
}

function tudoMinusc() {
  document.getElementById("text").value = document
    .getElementById("text")
    .value.toLowerCase();
  document.forms.teste.opcao1.checked = false;
  document.forms.teste.opcao2.checked = true;
}
