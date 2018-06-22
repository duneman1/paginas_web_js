/* Esto es una declaración*/
var saludo

/* inicializacion */
saludo = 'Hola'
/*
Tipos de datos
- string (cadena de caracteres)
- number (2.5)
- booleans (true / false)
- object (de ninguno de los anteriores)
- undefined (sin definir)
*/

/*Declaración + inicializacion*/
var user = 'Mundo'
/** Tipos de Datos */
var nombre = 'Pepe' // string
var edad = 23 // number
var isEstudiante = false // boolean
var algo // undefined

//Objeto en notación JSON

var persona = {
    nombre: 'Juan',
    edad: 34,
    isEstudiante: true
}

/** Como es JS respecto a los tipos
 * - debil (no tiene tipos definidos, se define con el valor de la variable)
 * - dinámico (que puedes cambiar de tipo)
 */

console.log(saludo, user)
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(isEstudiante, typeof isEstudiante)
console.log(algo, typeof algo)
console.log(persona, typeof persona)
console.log(persona.nombre, typeof persona.nombre)

saludo = '22'
console.log(saludo*2)
console.log(typeof saludo)