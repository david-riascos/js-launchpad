/**
 * undefined es el valor que genera una variable
 * que ha sido creada pero no se asigna un valor
 */


/**
 * Las convenciones de JavaScript mejoran la legibilidad y mantenimiento del código. 
 * Usan camelCase para variables y funciones (nombreUsuario), 
 * PascalCase para clases (MiClase), y 
 * snake_case o kebab-case para nombres de archivos.
 * 
 * Variables y Funciones: camelCase (ej. calcularTotal, nombreUsuario).
 * Clases y Constructores: PascalCase o UpperCamelCase (ej. UsuarioService).
 * Constantes Globales: SCREAMING_SNAKE_CASE (ej. API_KEY_URL).
 */
let nombre;

nombre = "nombre principal";
nombre = "nombre secundario"

console.log(nombre);


// js es case sentive por lo que puede distinguir entre mayusculas y minusculas
let nombreCompleto = "camelCase";
let NombreCompleto = "UpperCamelCase";
let nombre_completo = "snake_case"

console.log(nombreCompleto, NombreCompleto, nombre_completo);