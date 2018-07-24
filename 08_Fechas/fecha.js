// Objetos especiales
//Object
//Array
//Date

//let fecha = new Date(-1954475347853)
let fecha = new Date(1945, 2, 4) // el mes es un array enero==0
// fecha = new Date () // Te grada la fecha con milisigundos
// console.log(fecha)
//console.log(fecha+1)
let fecha = new Date()

console.log(fecha.toString())
console.log(fecha.toDateString())
console.log(fecha.toGMTString())
console.log(fecha.toISOString())

console.log(new Date().get)