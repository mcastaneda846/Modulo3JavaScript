let numero = 0;

function aumentar() {
  numero++;
  document.getElementById("contador").innerHTML = numero;
}

function disminuir() {
  if (numero > 0) {
    numero--;
    document.getElementById("contador").innerHTML = numero;
  }
}

function reiniciar() {
  numero = 0;
  document.getElementById("contador").innerHTML = numero;
}
