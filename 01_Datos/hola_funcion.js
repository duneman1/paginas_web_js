/*
    JavaScript (es marca registrada de Oracle) -> ECMAScript (es el standar como W3)
    ->ES6 / ES2015
*/

// variable global -> hiting
/* let autor = 'Jose Maria' */
/* console.log(autor) */

function saludar(user) {
    const SALUDO = 'Hola'
    console.log(SALUDO, user)
    // variable local a la función
    let autor = 'Charo'
    console.log('Dentro', autor)
}

/* function sumar(a,b){
    let resultado = a + b
    console.log (resultado)
} */

function sumar(a,b) {
    let autor = 'Pepe'
    let resultado = a + b
    console.log(resultado)
    console.log('Dentro de suma', autor)   
}


function dividir (a,b) {
    let resultado
    if (b != 0) {
        resultado = a / b 
    } 
    else {
        resultado = 'No se puede dividir por 0'
    }
    console.log(resultado)
}


saludar('Pepe')
saludar('Elena')

sumar(2,4)
dividir(4,2)
dividir(4,0)
/* console.log('Fuera', autor) */