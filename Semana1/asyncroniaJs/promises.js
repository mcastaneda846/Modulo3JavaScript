function validarEdad(edad) {
  //  Función que valida la edad y DEVUELVE una Promise
  return new Promise((resolve, reject) => {
    //  Creamos la Promise
    setTimeout(() => {
      //  Simulamos un proceso que tarda (como una API)
      if (edad >= 18) {
        //  Validamos la edad
        resolve({
          //  Si todo sale bien → resolve
          estado: "OK",
          mensaje: "Acceso permitido ",
          edad: edad,
        });
      } else {
        reject({
          //  Si falla → reject
          estado: "ERROR",
          mensaje: "Acceso denegado, Debes ser mayor de edad",
          edad: edad,
        });
      }
    }, 2000); // espera 2 segundos
  });
}

//  Edad de prueba
let edadUsuario = 17; // Depende de la edad que pongamos aca dara un acceso permitido o no

//  Usamos la Promise
console.log("Validando edad... ");
validarEdad(edadUsuario)
  .then((respuesta) => {
    // Aquí entra si se ejecuta resolve
    console.log("PROMISE RESUELTA");
    console.log(respuesta.estado);
    console.log(respuesta.mensaje);
    console.log("Edad:", respuesta.edad);
  })
  .catch((error) => {
    //  Aquí entra si se ejecuta reject
    console.log("PROMISE RECHAZADA");
    console.log(error.estado);
    console.log(error.mensaje);
    console.log("Edad:", error.edad);
  });
