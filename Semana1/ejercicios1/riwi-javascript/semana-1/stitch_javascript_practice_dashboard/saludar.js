function saludar() {
  const saludarUsuario = document.getElementById("userName").value;
  document.getElementById(
    "greeting-output"
  ).textContent = `¡Hola ${saludarUsuario}, Bienvenido/a!`;
}
