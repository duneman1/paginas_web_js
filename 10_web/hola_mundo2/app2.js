

function app() {
    let amigo = 'Pepe'
    document.querySelector('#btnSaludar')
        .addEventListener('click', saludar)
    document.querySelector('#btnAdios')
        .addEventListener('click', despedir)

    function saludar() {
        console.log(`Hola ${amigo}`)
    }
    function despedir() {
        console.log(`Eso es todo ${amigo}`)
    }
}


//Reside en la memoria local de una funcion
(function () {
    document.addEventListener('DOMContentLoaded', app)
})()

//Reside en la memoria general
//En la practica es lo mismo que
//document.addEventListener('DOMContentLoaded', app)





