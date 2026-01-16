# 📘 Sintaxis del Lenguaje – Sesión 2  
## Operadores, Condicionales Avanzados y Ciclos en JavaScript

## 🎯 Objetivo de la Sesión
Al finalizar esta sesión, los coders serán capaces de utilizar operadores aritméticos, de comparación y lógicos, aplicar estructuras condicionales avanzadas y controlar la repetición de instrucciones mediante ciclos, fortaleciendo la lógica de programación.

## ⏱️ Duración
3 horas

---

## 1️⃣ Explicación Teórica

### Operadores Aritméticos
```js
let a = 10;
let b = 3;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicación
console.log(a / b); // división
console.log(a % b); // módulo
```

---

### Operadores de Comparación
```js
console.log(5 > 3);    
console.log(5 < 3);    
console.log(5 == "5"); 
console.log(5 === "5");
```

---

### Operadores Lógicos
```js
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted");
}
```

---

### Condicionales Avanzados

#### else if
```js
let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}
```

---

#### Operador Ternario
version larga

```js
let age = 20;
let isAdult;

if (age >= 18) {
  isAdult = "Adult";
} else {
  isAdult = "Minor";
}

console.log(isAdult);

```
version corta

```js
let age = 20;

let isAdult = age >= 18 ? "Adult" : "Minor";

console.log(isAdult);

```

---

## 2️⃣ Ciclos (Loops)

### Ciclo while
```js
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
```

---

### Ciclo do while
```js
let option;

do {
  option = prompt("Enter a number greater than 0");
} while (option <= 0);
```

---

### Ciclo for
```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
```

---

## 3️⃣ Ejemplos Prácticos
```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
```

---

## 4️⃣ Actividad Práctica

- Mostrar los números del 1 al 20 usando un ciclo
- Determinar si un número es par o impar
- Simular un menú con do while
- Calcular la tabla de multiplicar de un número
- Validar acceso con usuario y contraseña

---

## 5️⃣ Retroalimentación
Revisión grupal, corrección de errores y refuerzo de buenas prácticas.

---

## 🔗 Recursos
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide
https://javascript.info/while-for
