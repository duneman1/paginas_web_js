// Declarar una función
function miFuncion(x) {
    console.log(x)
}

function calcular(x){
    return 2*x
}

// Declarar & Asignar
let x = 23

// Invocar, llamar, ejecutar
miFuncion(23)

// Asignando el resultado de invocar
let z = calcular(12)

//Otra forma de crear funciones en JS:
// por asignación
// equivale a function otraFuncion () {} //Clasica

//algo ({user: 'Pepe', edad: 22})


let otraFuncion = function (x,y) {
    return x*y
} //Otra forma de crear funciones.


// Ejemplo de CALLBACK
function verCalculos(x,y, operacion) {
    console.log('El resultado es ' + operacion(x,y))
}

// callback anonimo
verCalculos(3, 5, function(a,b){ return a*b})

// callback con nombre

function sumaCuadrados (x,y) {
    return x*x + y*y
}

verCalculos(3,5, sumaCuadrados)

//let r = otraFuncion(4,5)