function abrir() {
  var img = document.getElementById("janela");
  img.src = img.src.replace("janelafechada", "janelaaberta");
}

function quebrar() {
  var img = document.getElementById("janela");
  img.src = img.src.replace("janelaaberta", "janelaquebra");
}
