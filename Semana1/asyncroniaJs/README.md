# ASINCRONÍA EN JAVASCRIPT.

# Event loop (visión conceptual)

Event Loop en javaScript es single-threaded (un solo hilo).

El Event Loop organiza la ejecución de tareas asíncronas.

## Componentes clave:

Call Stack: donde se ejecuta el código.

Web APIs: temporizadores, fetch, eventos.

Microtask Queue: promesas, async/await (tienen prioridad).

Callback Queue: setTimeout, eventos.

## Ciclo del Event Loop:

1. Espera a que el Call Stack esté vacío.

2. Ejecuta microtareas.

3. Ejecuta una tarea de la Callback Queue.

JavaScript solo puede ejecutar una cosa a la vez porque es de un solo hilo. Aun así, una aplicación debe manejar clics,peticiones al servidor y temporizadores sin bloquear la interfaz. Para eso existe el Event Loop, que es el mecanismo que decide qué se ejecuta y cuándo.

El código normal se ejecuta en el Call Stack. Cuando usamos funciones como setTimeout, fetch o eventos del navegador, esas operaciones se manejan fuera del motor de JavaScript en las Web APIs. Cuando terminan, sus callbacks no entran directamente al Call Stack, sino que se colocan en colas.

Hay dos colas importantes: la Microtask Queue, donde van las promesas y el código después de await, y la Callback Queue, donde van los temporizadores y eventos. El Event Loop revisa constantemente si el Call Stack está vacío. Cuando lo está, primero ejecuta todas las microtareas y luego toma una tarea de la Callback Queue. Este ciclo se repite todo el tiempo, por eso se llama Event Loop.

## Ejemplos prácticos

### Ejemplo 1

```js console.log("Inicio");
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promesa");
});

console.log("Fin");

///Salida: Inicio → Fin → Promesa → Timeout
```

### Ejemplo 2 (async/await)

```js
async function ejemplo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

ejemplo();
console.log("C");

//Salida: A → C → B
```

En el primer ejemplo, primero se ejecuta el código síncrono: "Inicio" y "Fin". La promesa se coloca en la Microtask Queue, mientras que el setTimeout va a la Callback Queue. Cuando el Call Stack queda vacío, el Event Loop ejecuta primero las microtareas, por eso aparece "Promesa" antes que "Timeout", aunque el tiempo del temporizador sea 0.

En el segundo ejemplo, async/await también usa microtareas. La función imprime "A", luego el await pausa la función y envía el resto como una microtarea. Por eso se imprime primero "C" y después "B". Esto demuestra cómo el Event Loop controla el orden real de ejecución.

## Conclusión:

JavaScript es de un solo hilo, pero no se bloquea gracias al Event Loop

### Prioridad: Microtasks → Tasks

Entender el Event Loop ayuda a evitar errores en código asíncrono

# Promises/Promesas

## ¿Qué son las promises?

Una Promise en JavaScript es un objeto que representa el resultado futuro de una operación que no se completa de inmediato. Sirve para manejar tareas asíncronas, es decir, procesos que toman tiempo en ejecutarse, sin bloquear el resto del programa.

Una Promise puede encontrarse en tres estados:

- Pendiente (pending): la operación aún no ha terminado.

- Resuelta (fulfilled): la operación terminó correctamente y produjo un resultado.

- Rechazada (rejected): la operación falló y produjo un error.

El propósito principal de una Promise es organizar y controlar qué debe ocurrir cuando una operación finaliza con éxito o cuando ocurre un error, permitiendo escribir código más claro, ordenado y fácil de mantener frente a operaciones que no son inmediatas.

## Caso del proyecto

El programa:

1. Recibe una edad.
2. Valida si es mayor o igual a 18.
3. Devuelve una promise.

- Usa resolve() si la edad es valida.
- Usa reject() si la edad no es valida.

4. Muestra el resultado en consola.

```js
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
```

## Edad valida

validando edad...
PROMISE RESUELTO
Ok
Acceso permitido
Edad: 18

## Edad no valida

validando edad...
PROMISE RECHAZADA
ERROR
Acceso denegado, debes ser mayor de edad
edad:17

# Async/Await

## ¿Qué es async/await?

- Es una forma moderna de trabajar con promesas
- Permite escribir código asíncrono de forma clara
- Hace que el código se lea como si fuera normal

---

## ¿Para qué sirve?

- Esperar resultados sin bloquear el programa
- Organizar mejor el código
- Evitar callbacks anidados

---

## ¿Cómo funciona?

- `async` define una función asíncrona
- `await` espera un resultado
- `await` solo se usa dentro de `async`

---

## Sintaxis básica

```js
async function miFuncion() {
  await algoQueTomaTiempo();
}
```

## EJEMPLO PRACTICO DE PEDIR COMIDA

```js
async function pedirComida() {
  console.log("Pidiendo comida...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("La comida llegó 🍕");
}
```

# Manejo de errores con try/catch.

## ¿Qué es un error en JavaScript?

Un error es una situación inesperada que ocurre durante la ejecución del programa y puede provocar que el código se detenga si no se controla.

## Errores comunes:

- ReferenceError: variable no definida.

- TypeError: uso incorrecto de un tipo de dato.

- SyntaxError: error de escritura en el código.

## ¿Para qué sirve try...catch?

try...catch permite capturar errores en tiempo de ejecución y evitar que el programa se detenga cuando ocurre un fallo.

No evita errores, pero permite manejarlos de forma controlada.

## Estructura básica

```JS
try {
  // Código que puede fallar
} catch (error) {
  // Código que se ejecuta si ocurre un error
}
```

- try: intenta ejecutar el código.

- catch: se ejecuta si ocurre un error.

- error: contiene información del error.

## El objeto error

El objeto error proporciona información sobre el fallo.

- error.message: mensaje del error.

- error.name: tipo de error.

## Lanzar errores con throw

Se pueden crear errores manualmente para validar condiciones.

- throw new Error("Mensaje de error");

Esto permite controlar reglas del programa.

## Bloque finally

El bloque finally se ejecuta siempre, ocurra o no un error.

Se usa para cerrar procesos o ejecutar acciones finales.

## ¿Qué NO hace try...catch?

- No captura errores de sintaxis al cargar el archivo.

- No captura errores asíncronos sin async/await.

- No reemplaza validaciones con if.

## Diferencia entre if y try...catch

- if / else: valida condiciones esperadas.

- try...catch: maneja errores inesperados.

- try...catch complementa las validaciones, no las reemplaza.

## Ejemplo

```js
try {
  let edad = Number(prompt("Ingrese su edad"));

  if (isNaN(edad)) {
    throw new Error("La edad debe ser un número");
  }

  console.log("Edad válida:", edad);
} catch (error) {
  console.error(error.message);
}
```

## Conclusión:

- Controla errores en tiempo de ejecución.

- Evita que el programa se detenga.

- Mejora la seguridad del código.

- Se usa junto con condicionales.
