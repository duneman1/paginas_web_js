let oDatos = {}
// oDatos = new Objet()


let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])

aDatos[7] = 'Pepe'

aDatos[5] = {} */

console.log(aDatos + [3,4]) // Las arrays con más(+) no concadena.
console.log(aDatos.concat([3,4]))

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres //Esto es una referencia no un clonado
aNombresOriginal = aNombres.join('|').split('|') //Es un truco barato para hacer un clon
// aNombres.sort() // pone en orden alfabetico
aNombres.sort().reverse()// pone en orden alfabetico y al reves
console.log(aNombres)
console.log(aNombresOriginal)

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(aNombres.slice(1,4))
console.log(aNombres)

aClon = aNombres.slice(0,aNombres.length) // esto es la forma correcta de hacer un clon.
// aClon.push('Juan')
aClon.push('Juan', 'Rosa')
console.log(aClon)

// let aElegidos = aNombres.splice(1,2) // quita los elementos y reordena el array, quitando los huecos
// let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan') //Quita los elementos y inserta los elementos añadidos
//let aElegidos = aNombres.splice(1)// Dice donde empieza y acaba hasta el final del arrays.
//let aElegidos = aNombres.splice(2,0, 'Antonio') //Coje la posicion 2, no me quietes nada, añademe en esa posición.


/* console.log('Elegidos: ')
console.log(aElegidos)
console.log ('Original: ')
console.log(aNombres) */

let aNotas = [[10, 7, 8], [5, 4, 7], [6, 3, 2]]
console.log(aNotas[1][1])

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']

aNombres.push(['Lorenzo', 'Herminia'])
aNombres.push(...['Lorenzo', 'Herminia'])
console.log(aNombres)
