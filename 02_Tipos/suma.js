function sumar(a, b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else {
        // resultado = Number(a) + Number(b)
        // resultado = +a + +b //+ es un signo por lo tanto lo ejecuta en number
        resultado = parseFloat(a) + parseFloat(b) //coje numeros con decimales, no como parseInt que coje enteros sin comas.
    }
    return resultado
}

function restar(a,b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else {
        resultado = a - b
    }
    return resultado
}

function multiplicar(a,b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else {
        resultado = a * b
    }
    return resultado
}

function restar(a,b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else {
        resultado = a - b
    }
    return resultado
}

function dividir(a,b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else if (b == 0){
        resultado = 'No se puede dividir por 0'
    }
    else {
        resultado = a / b
    }
    return resultado
}

function calcularModulo(a,b) {
    let resultado
    if (isNaN(a)) {
        resultado = 'Error parametro primero no es un valor'        
    }
    else if (isNaN(b)) {
        resultado = 'Error parametro segundo no es un valor'        
    }
    else {
        resultado = a % b
    }
    return resultado
}

let num1 = '-2'
let num2 = 4.5
let resultado = sumar(num1, num2)
console.log(resultado)
// console.log(sumar(num1, num2))
resultado = restar(num1, num2)
console.log(resultado)

resultado = multiplicar(num1, num2)
console.log(resultado)

resultado = dividir(num1, num2)
console.log(resultado)

resultado = calcularModulo(num1, num2)
console.log(resultado)

prueba = {}
if (typeof prueba == 'object') {
    prueba.estoyloco = 'Si'
}
console.log(prueba)