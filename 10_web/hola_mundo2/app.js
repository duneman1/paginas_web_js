function saludar() {
    console.log(`Hola Mundo`)
}

function adios() {
    console.log(`Adios mundo cruel`)
}

function main() {
    document.querySelector('#btnSaludar')
        .addEventListener('click', saludar)
    document.querySelector('#btnAdios')
        .addEventListener('click', adios)
}

// window.addEventListener('load', main) // Esto espera a que se carge toda la pagina incluidas imagenes y videos
document.addEventListener('DOMContentLoaded', main)// esto es más rapido y es eso lo que se usa, solo espera al DOM

/* window.addEventListener('load', function() {
    document.querySelector('#btnSaludar')
    .addEventListener('click', saludar)
}) */ // Esto es para que se espere a cargar todo la pagina para ejecurtarse

