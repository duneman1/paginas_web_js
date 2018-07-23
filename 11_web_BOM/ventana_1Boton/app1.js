class App {

    constructor() {
        // defino el acceso al DOM (handler)
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
       

        // Dispara el evento al hacer Click
        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this))
        this.img = null
        this.prepararImg () 

    }

    prepararImg() {
        this.img = new Image()
        this.img.src = './assets/nave_espacial.jpg'
        this.img.addEventListener('load', 
        () => {
            console.log(this.img.width)
            console.log(this.img.height)
        })
       
    }


    
    abrirVentana() {
        //this.oVentana = window.open()
        // centrada y de 300px
        

        if (!this.oVentana) {
            this.oVentana = window.open('', '', 
                        `toolbar=yes, 
                        scrollbars=no, 
                        resizable=no, 
                        top=100, 
                        left=100, 
                        width=${this.img.width}, 
                        height=${this.img.height}`),
        this.oVentana.document.write(`<img src=${this.img.src} alt="nave espacial Entrenprise">`)
        //this.btnAbrir.innerHTML = 'Cerrar Ventana'
        this.btnAbrir.textContent = 'Cerrar Ventana'

        } else {
            this.oVentana.close()
            this.oVentana = null
            this.btnAbrir.innerHTML = 'Abrir Ventana'

        }  

        
    }

    cerrarVentana() {
        
    }

}

document.addEventListener('DOMContentLoaded', 
() => {new App()})