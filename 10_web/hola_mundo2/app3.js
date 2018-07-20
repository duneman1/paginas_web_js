class Apps {
    constructor() {
        this.amigo = 'Sara'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnAdios')
        this.asignarHandlers()
    }
    asignarHandlers() {
        console.log(this)
        this.oBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.oBtnDespedir.addEventListener('click', this.despedir.bind(this)) 
    }
    saludar(oE) {
        console.log(oE.target)
        console.log(this)
        console.log(`Hola ${this.amigo}`)
    }
  
    despedir() {
        console.log(`Adios ${this.amigo}`)
    }
}

// Primer metodo de ejcucion
/* function main() {
    new Apps()
} */

// document.addEventListener('DOMContentLoaded', main) // Primer metodo de ejecución

// USANDO FUNCIÓN ANONIMA

// document.addEventListener('DOMContentLoaded', function() {new Apps()}) //segundo metodo

document.addEventListener('DOMContentLoaded', () => new Apps()) //tercer manera