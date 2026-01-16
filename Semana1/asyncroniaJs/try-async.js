// Definimos una función asíncrona
async function obtenerDatosDeAPI() {
  console.log("Iniciando la obtención de datos...");
  try {
    // await pausa aquí hasta que fetch(API_URL) se resuelva (la promesa se cumpla)
    const respuesta = await fetch(
      "https://jsonplaceholder.typicodes.com/todos/a"
    );
    // await pausa aquí hasta que respuesta.json() se resuelva
    const datos = await respuesta.json();
    console.log("Datos recibidos:", datos);
    return datos;
  } catch (error) {
    // Manejo de errores si la promesa falla
    console.error("Ocurrió un error:", error);
  }
}

// Llamamos a la función asíncrona
obtenerDatosDeAPI();
console.log(
  "Este mensaje se muestra antes que los datos de la API porque la función es asíncrona."
);
