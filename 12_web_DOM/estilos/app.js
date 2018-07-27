class App {
    constructor() {
        this.titulo = document.querySelector('h1')
        // this.titulo.style= 'color: coral; background-color: red' // esto no se usa
        this.titulo.style.color = 'coral' //se suele usar esto
        this.titulo.style.backgroundColor = 'brown'
    }
}

document.addEventListener('DOMContentLoaded', 
    () => { new App() })