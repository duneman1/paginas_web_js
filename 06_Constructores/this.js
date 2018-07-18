// this apunta al objeto global

/* console.log(this)

function prueba() {
    console.log(this)
}

prueba() */

//this aputna al objeto

let o = {
    nombre : 'Pepe',
    mostrar : function() {
        console.log(this)
    }
}

o.mostrar()

// this -> el objeto creado

function CosaRara() {
    console.log(this)
}

// Objeto()

new CosaRara()