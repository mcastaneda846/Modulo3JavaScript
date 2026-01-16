// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado");

  // Obtener botón Clear
  const btnClear = document.getElementById("btnClear");

  // Hace la función global para que el HTML la pueda llamar, window es el objeto global del navegador
  window.salidaOutputStream = function () {
    // Obtener elementos EXISTENTES en el HTML
    const outputStream = document.getElementById("outputStream");
    const textArea = document.getElementById("textArea");

    // Validaciones de seguridad
    if (!outputStream) {
      console.error("No existe #outputStream");
      return;
    }

    if (!textArea) {
      console.error("No existe #textArea");
      return;
    }

    const mensaje = textArea.value.trim(); // value obtiene lo que escribió el usuario y trim() elimina espacios al inicio y final

    // No agregar logs vacíos
    if (mensaje === "") {
      agregarAdvertencia("Empty log message");
      return;
    }

    // Crear fila del log
    const log = document.createElement("div");
    log.className = "flex gap-2 log-dinamico"; // log dinámico, sería igual que un <div class= "flex gap-2 log-dinamico"></div>
    // Hora
    const time = document.createElement("span");
    time.className = "text-blue-400 opacity-50";
    time.textContent = `[${new Date().toLocaleTimeString("es-CO", {
      // Formato de hora local colombiano
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}]`;

    // Texto del mensaje
    const text = document.createElement("span");
    text.className = "text-green-400";
    text.textContent = `>> ${mensaje}`;

    // Construir log
    log.appendChild(time); // une los elementos hora y mensaje
    log.appendChild(text);

    // Agregar SIN borrar lo anterior
    outputStream.appendChild(log); // agrega el nuevo log debajo de los anteriores

    // Scroll automático hacia abajo
    outputStream.scrollTop = outputStream.scrollHeight;

    // Limpiar textarea
    textArea.value = "";
  };

  // Función interna para advertencias
  function agregarAdvertencia(mensaje) {
    const outputStream = document.getElementById("outputStream");

    const log = document.createElement("div");
    log.className = "flex gap-2 log-dinamico"; // también es dinámico

    const time = document.createElement("span");
    time.className = "text-blue-400 opacity-50";
    time.textContent = `[${new Date().toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}]`;

    const text = document.createElement("span");
    text.innerHTML = `<span class="text-yellow-400">WARN:</span> ${mensaje}`;

    log.appendChild(time);
    log.appendChild(text);
    outputStream.appendChild(log);

    outputStream.scrollTop = outputStream.scrollHeight;
  }

  // Lógica del botón Clear (solo borra logs dinámicos)
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      const logsDinamicos = document.querySelectorAll(".log-dinamico");
      logsDinamicos.forEach((log) => log.remove());
    });
  }
});
