// let oDatos = {
//    edad: 22,
// }
// let oDatos2 = new Objet()
// oDatos.nombre = 'Pepe'
// oDatos['apellidos'] = 'Perez'

let oDatos = {
    nombre: 'Pepe',
    apellidos: 'Pérez',
    edad: 22,
};

oDatos.profesion = 'Programador'


console.log(oDatos)

let x = 22

x *= 2 // 22 * 2

oDatos.edad *= 3


let oVuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        clave_IATA: 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arrival: {
        clave_IATA: 'LAX',
        time: '2004-09-25 10:45',
        ciudad: 'Angeles'
    },


}

oVuelo.arrival.ciudad = 'Los Angeles'




oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (typeof oDatos[key] === 'function') {

        }
        else if (typeof oDatos[key] === 'object') {
            console.log(`Las propiedades de ${key} son: `)
            this.mostrar(oDatos[key]) // Cuando es dentro de si mismo se usa this.
            // oVuelo.mostrar(oDatos[key]) //Recursividad Se llama de nuevo a la función y entra en un bucle infinito de subir niveles
        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        }
    }
}
console.clear()
console.log(oVuelo)

// RECURSIVIDAD

function leeObjeto(oDatos) {
    for (const key in oDatos) {

        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') {
                console.log(`Las propiedades de ${key}`)
                leeObjeto(oDatos[key]) //Se llama de nuevo a la función y entra en un bucle infinito de subir niveles
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }
        }


    }
}

// leeObjeto(oVuelo)
// console.log(typeof oVuelo.mostrar)
//oVuelo.mostrar()



function calculaPrecio(precioBase, iva = 1.21) {
    return precioBase * iva
}


let zapatilla = 300
console.log(calculaPrecio(zapatilla))


let libro = 300
console.log(calculaPrecio(libro, 1.07))
