/*
Ejercicio: Promedios y aprobación

Objetivo:
- trabajar con arrays y objetos
- usar funciones
- calcular promedios y decidir si un alumno aprueba o no

Instrucciones:
1. Recorre el array de alumnos.
2. Calcula el promedio de sus notas.
3. Si el promedio es mayor o igual a 7, muestra "Aprobado".
4. Si es menor a 7, muestra "Reprobado".
5. Muestra el resultado por consola.

Ejemplo de salida:
Ana: promedio 8.3 - Aprobado
Luis: promedio 6.0 - Reprobado
Sofía: promedio 9.0 - Aprobado
*/

const alumnos = [
  { nombre: "Ana", notas: [8, 9, 7] },
  { nombre: "Luis", notas: [6, 5, 7] },
  { nombre: "Sofía", notas: [9, 8, 10] },
  { nombre: "Mateo", notas: [7, 6, 5] }
];

function promedio(notas) {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
}

function estadoAlumno(promedioFinal) {
  return promedioFinal >= 7 ? "Aprobado" : "Reprobado";
}

for (const alumno of alumnos) {
  const prom = promedio(alumno.notas);
  const estado = estadoAlumno(prom);

  console.log(`${alumno.nombre}: promedio ${prom.toFixed(1)} - ${estado}`);
}

// DESAFÍO EXTRA:
// Agregar una función que muestre solo los alumnos aprobados.
// Luego, modificar el ejercicio para que reciba notas desde teclado.
