function app() {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector("#output")

    // Defino los manejadores de eventos de algunos nodos
    domNombre.addEventListener('input', leerDatos)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)
    // domOutput.addEventListener()
    // domNombre.addEventListener('change', detectarChange)



    function leerDatos() {
        let valorNombre = domNombre.value
        console.log('Input detectado')
        console.log('valorNombre: ', valorNombre)
        // console.log(domNombre.value) //Esto es para recojer valor
        domOutput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
        
    }

    /* function detectarChange() {
        let finalNombre = domNombre.value
        console.log('Change Detectado')
        console.log('FinalNombre: ', finalNombre)
    } */

    function saludar() {
        console.log(`Hola Mundo`)
    }

    function borrar() {
        console.log(`Aun no se borrar`)
    }
}



document.addEventListener('DOMContentLoaded', app)

