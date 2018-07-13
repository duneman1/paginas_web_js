function basica(x) {}
let y
basica(y)


function miFuncion(...z) { // ...(sprit operator) recoje los valores en un array.
    console.log('hola ' + z[0])
    console.log('hola ' + arguments[0])
}

let x = 21
miFuncion(x)
// miFuncion(x, 56)
// miFuncion(x, 56, 89)


// EN OTROS LENGUAJES existe la
// Sobrecarga de funciones (métodos)

//function miFuncion(z) {}
//function miFuncion(z,x) {}
//miFuncion(x)
//miFuncion(z,w)