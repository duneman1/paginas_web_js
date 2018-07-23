let pepe = {
    nombre: 'Pepe',
    dirección: {
        calle: 'c/ Pez',
        poblacion: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

// pepe.saludar()

/* jose = pepe
jose.saludar */


let saludarFuera = pepe.saludar

// Ejemplos de EJECUCION DIRECTA de funciones

pepe.saludar() // Pepe
saludarFuera() // undefined
saludarFuera.call(pepe) // pepe

/* setTimeout(() => {
    console.log('Ya llego')
    }, 1000) */

// Ejemplos de RESPUESTA A EVENTOS

setTimeout(pepe.saludar, 1000) // undefined
setTimeout(pepe.saludar.bind(pepe), 1000)// Pepe, porque bind hace referencia al objeto concreto.