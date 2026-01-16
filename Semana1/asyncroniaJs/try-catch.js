document.getElementById("btn").addEventListener("click", () => {
  try {
    const edad = Number(document.getElementById("edad").value);

    if (isNaN(edad)) {
      throw new Error("La edad debe ser un número");
    }

    alert("Edad válida: " + edad);
  } catch (error) {
    alert("Error: " + error.message);
  }
});
