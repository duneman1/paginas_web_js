class Apps {
    constructor() {
        this.amigo = 'Sara'
        this.isSaludar = true
        this.oBtnSaludar = document.querySelector('#btnDual')
        this.oOutput = document.querySelector('#saludo')
        this.asignarHandlers()
    }
    asignarHandlers() {
        //console.log(this)
        // this.oBtnSaludar.addEventListener('click', this.saludarOld.bind(this)) //antiguo
        this.oBtnSaludar.addEventListener('click', this.saludarNew.bind(this))
        
    }
    saludarOld(oE) {
        console.log(oE.target)
        console.log(this)
    

        if (this.isSaludar) {
            console.log(`Hola ${this.amigo}`)
            // oE.target.innerHTML = 'Adios'
            // this.isSaludar = false // se convierte en falso
        } else {
           console.log()
           // oE.target.innerHTML = 'Hola'
           // this.isSaludar = true //se convierte en verdadero
        }
        this.isSaludar = !this.isSaludar
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios' // Es un operador ternario
        
    }

    saludarNew(oE) {
        //console.log(oE.target)
        //console.log(this)
        let msg = `Adios ${this.amigo}, esto a sido todo.`

        if (this.isSaludar) {
            msg = `Hola ${this.amigo}`
            // oE.target.innerHTML = 'Adios'
            // this.isSaludar = false // se convierte en falso
        } 
        this.isSaludar = !this.isSaludar //invierte ntre true y false con cada ejecucion
        oE.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios' // Es un operador ternario
        this.oOutput.innerHTML = msg
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