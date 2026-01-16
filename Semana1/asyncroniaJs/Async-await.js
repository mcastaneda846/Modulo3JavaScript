async function pedirComida() {
  console.log("Pidiendo comida...");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("La comida llegó 🍕");
}

pedirComida();

// Ejemplo 2

async function obtenerClima() {
  console.log("Consultando el clima...");

  const clima = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Clima: Soleado ☀️");
    }, 2000);
  });

  console.log(clima);
}

obtenerClima();
