let cadena = 'Pepe'
let frase = 'Un anillo para todos'
console.log(cadena.length)// Cuenta cuantas letras.
console.log(cadena.concat(' Perez')) //este es el atributo pero casi no se usa.
console.log(cadena + ' Perez')// cpncadena pero no varia el valor cadena.

aCadena = cadena.split('')
console.log(aCadena)
aFrase = frase.split(' ') //Convierte una palabras en un array de string. Busca el espacio y lo separa.
console.log (aFrase)
console.log(aFrase.join ()) //Une las palabras y vacio pone la coma que es por defecto.
console.log(aFrase.join ('')) //Une las plabras y no deja espacio.

console.log(frase.split(' ').join('').toUpperCase()) // Asi es un string y por lo tanto se puede aplicar cualquier atributo de string.
console.log('Peréz'.toLowerCase())

'ciudades'.slice(2,5) //que muestre desde la posicion 2 hasta la 5 (uda), cuenta desde 0
'ciudades'.substr(2,3) //Empiezas en el 2 y desplazate 3 (uda)




function capitalizar(cadena) {
    let aTexto = cadena.split(' ')
     
    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra
        
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}

function capitalizar2(cadena) {
    let aTexto = cadena.split(' ')
     
    for (let i = 0; i < aTexto.length; i++) {
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('')
    }
    return aTexto.join (' ')
}


console.log(capitalizar('Un anillo para todos'))
console.log(capitalizar2('Un anillo para todos2'))

console.log(String.fromCharCode(69))
console.log(String.fromCharCode(65))
console.log(String.fromCharCode(6565))
