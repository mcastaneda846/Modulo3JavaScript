
console.log("Inicio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promesa");
});

console.log("Fin");

//Salida: Inicio → Fin → Promesa → Timeout

//Ejemplo 2 (async/await)

async function ejemplo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

ejemplo();
console.log("C");

//Salida: A → C → B
