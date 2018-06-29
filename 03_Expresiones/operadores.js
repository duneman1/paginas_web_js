function incrementos() {
    let x = 23
    let y
    y = ++x // x= x+1 y luego y=x
    y = x++ // y=x y luego x= x+1 
    /* console.log(x++)
    console.log(x) */
    y = --x // x= x-1 y luego y=x
    y = x-- // y=x y luego x= x-1 
}

function asignaciones() {
    let x = 2
    x += 1 // x = x + 1
    x = 2
    x -= 1
    x = 2
    x *= 3
}

/* function esPar(dato) {
    let esPar = true
    if (dato % 2 != 0) {
        esPar = false
    }
    return esPar
} */

/* function esPar (num) {
    let isPar
    if (num % 2 != 0) {
        isPar = false
    } else {
        isPar = true
    }
    return isPar
} */

/* function esPar (num) {
    let isPar = true
    // compruebo si NO eres par
    // if (num % 2 != 0) {
    if (num % 2) {
        isPar = false
    } 
    return isPar
} */

function esPar (num) {
	let a = 0
	let isPar = true
	if (typeof num != 'number'|| (num % 2)) {
		isPar = false
	} 
	return isPar
}

function esPar2 (num) {
    let isPar = false
    // compruebo si SI eres par
    if (num % 2 == 0) {
        isPar = true
    } 
    return isPar
}


function esParFinal (num) {
	return (typeof num == 'number' && num % 2 == 0) ? true : false
}

// incrementos()
// asignaciones()

console.log('22 es par?', esParFinal(22))
console.log('25 es par?', esParFinal(25))
console.log('0 es par?', esParFinal(0))
console.log('Pepe es par?', esParFinal('Pepe'))
console.log('"" es par?', esParFinal(''))
console.log(' es par?', esParFinal())
console.log('true es par?', esParFinal(true))
console.log('false es par?', esParFinal(false))


// falsy: 
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
// truly
console.log(Boolean(true))
console.log(Boolean(109))
console.log(Boolean('Pepe'))

/* let a = 'Juan'
let b = 0
// compruebo si b == 0
if (!b) {
    a = 'Pepe'
}
console.log(a)
b = 4
// compruebo si b != 0
if (b) {
    a = 'Luis'
}
console.log(a)
 */