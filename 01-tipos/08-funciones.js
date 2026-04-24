/**
 * Funciones
 * Las funciones son bloques de código reutilizables que realizan una tarea específica.
 * Pueden aceptar parámetros y devolver valores.
 * En JavaScript, las funciones pueden ser declaradas de varias formas,
 * incluyendo funciones nombradas, funciones anónimas y funciones flecha.
 * Las funciones son fundamentales para la programación en JavaScript, ya que permiten
 * organizar el código, mejorar la legibilidad y facilitar la reutilización.
 */

// Función nombrada
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Mundo")); // Output: Hola, Mundo!

// Función anónima asignada a una variable
const despedir = function (nombre) {
  return `Adiós, ${nombre}!`;
};

console.log(despedir("Mundo")); // Output: Adiós, Mundo!

// Función flecha
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 3)); // Output: 15

// Función con parámetros por defecto
function potencia(base, exponente = 2) {
  return Math.pow(base, exponente);
}

console.log(potencia(5)); // Output: 25 (5 al cuadrado)
console.log(potencia(5, 3)); // Output: 125 (5 al cubo)

// Función que devuelve otra función (closure)
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();
console.log(contador1()); // Output: 1
console.log(contador1()); // Output: 2

const contador2 = crearContador();
console.log(contador2()); // Output: 1 (contador2 es independiente de contador1)
console.log(contador1()); // Output: 3 (contador1 sigue contando)
