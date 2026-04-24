/*

Son referencias en memoria, y se pueden representarse con llaves {}.
Pueden contener cualquier tipo de dato, incluso otros objetos. Se pueden
crear con la sintaxis literal o con el constructor Object().

Los objetos pueden tener propiedades (datos) y métodos (funciones). Se accede
a las propiedades y métodos con la notación de punto o corchetes. Se pueden
modificar, agregar o eliminar propiedades y métodos en tiempo de ejecución.

todos datos o información que conviene agrupar, organizar o representar como
un conjunto de características o comportamientos relacionados, se puede representar
como un objeto en JavaScript.

Esto incluye cosas como personas, animales, vehículos,
productos, eventos, etc.

Los objetos son una parte fundamental de la programación
orientada a objetos y permiten modelar el mundo real de manera más intuitiva y estructurada.


*/

// Ejemplo de un objeto literal

const persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: true,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
};

console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30
persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.

// Ejemplo de un objeto creado con el constructor Object()

const coche = new Object();
coche.marca = "Toyota";
coche.modelo = "Corolla";
coche.año = 2020;

console.log(coche.marca); // Toyota
console.log(coche["modelo"]); // Corolla
console.log(coche["año"]); // 2020

console.log(coche); // object

delete coche.año; // Eliminar la propiedad año
console.log(coche);

