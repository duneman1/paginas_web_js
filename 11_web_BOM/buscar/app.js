class App {
    constructor() {
        this.inClave = document.querySelector('#inClave')
        this.btnBuscar = document.querySelector('#btnBuscar')

        this.btnBuscar.addEventListener('click', () => {
            console.log(this)

            let clave = this.inClave.value
            const url = 'https://www.google.es/search?q='
            if (clave) {
               // window.location.href = url + clave
               // location.href = url + clave // el window el sistema lo sobreentiende
               location.assign(url + clave)
            }
        })
    }
}

document.addEventListener('DOMContentLoaded',
    () => {new App()})