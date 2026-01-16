// Crear objeto de productos y mostrarlo en consola
const productos = {
  producto1: { id: 1, nombre: "Mouse", precio: 45000 },
  producto2: { id: 2, nombre: "Teclado", precio: 80000 },
  producto3: { id: 3, nombre: "Monitor", precio: 900000 },
};

console.log("Productos recorridos con for...in:");
for (let clave in productos) {
  console.log(clave, productos[clave]);
}

console.log("Object.keys():", Object.keys(productos));
console.log("Object.values():", Object.values(productos));
console.log("Object.entries():", Object.entries(productos));

//Crea un set y usarlo
let numbers = new Set();

numbers = new Set([1, 2, 3, 4, 4, 5, 6, 5, 7]);
console.log(numbers);

// Agregar un nuevo número al set numbers
numbers.add(10);
console.log(numbers);

//Verifica si existe un número en el set numbers
console.log("El objeto contiene el número 7? ", numbers.has(7));

//Elimina el número ingresado del set numbers
numbers.delete(10);
console.log(numbers);

//Recorre el set con for...of
for (const number of numbers) {
  console.log(number);
}

// Map con categoria_del_producto y nombre_del_producto
const producto = new Map([
  ["bebidas", "Coca-Cola"],
  ["snacks", "Papas Margarita"],
  ["lácteos", "Leche Alpina"],
  ["aseo", "Jabón Dove"],
]);

for (const [clave, valor] of producto) {
  console.log(clave, valor);
}

// El forEach primero lee el valor y luego la clave por ende se pone en ese
producto.forEach((nombre, categoría) => {
  console.log(`Categoría: ${categoría} | Producto: ${nombre}`);
});
