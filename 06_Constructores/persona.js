// 'use strict' //Activa el modo de buenas practicas.

// Objeto Literal, es hecho en anotación JSON
let persona1 = {
    nombre : 'Carlos',
    edad : 45,
    profesion : 'Informático',
    saludar : function() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
    }
}
// Por debajo se ejecuta new Object()

//persona1.saludar()
//console.log(persona1.nombre, persona1.edad)
console.log(persona1)
//console.log(persona1.constructor)


function Persona (nombre,edad,profesion) {
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function(){
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
    }
    //console.log(this) //para ver el contenido objeto
}

let persona2 = new Persona('Francisco', 22, 'Camarero')
//console.log(persona2)
//console.log(persona2.constructor)
persona2.saludar()

let persona3 = new Persona('Luis', 33, 'Bombero')
//console.log(persona3)
persona3.saludar()