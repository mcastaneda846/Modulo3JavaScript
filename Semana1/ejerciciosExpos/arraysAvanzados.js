// Caso 1: Calcular promedio de calificaciones por cada estudiante mostrando nombre y promedio, filtrar promedios >= 8 y ordenar de mayor a menor
const estudiantes = [
  { nombre: "Ana", calificaciones: [8, 9, 7] },
  { nombre: "Bruno", calificaciones: [9, 9, 8] },
  { nombre: "Carlos", calificaciones: [6, 7, 8] },
];

const promedios = estudiantes.map((estudiante) => ({
  nombre: estudiante.nombre,
  promedio:
    estudiante.calificaciones.reduce(
      (acumulador, calificaciones) => acumulador + calificaciones, //Acumulador es el valor que se va guardando en cada iteracion y calificaciones es el valor actual
      0
    ) / estudiante.calificaciones.length,
}));

console.log(promedios);

const promediosFiltrados = promedios.filter(
  (estudiante) => estudiante.promedio >= 8
);

console.log(promediosFiltrados);

promediosFiltrados.sort(
  (a, b) => b.promedio - a.promedio
); /*A representa el valor que quiero comparar y B el otro valor, dependiendo si quiero incrementar o aumentar se pueden invertir*/

console.log(promediosFiltrados);
