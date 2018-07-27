class App {
    constructor() {
        // una sola noticia
        /* this.btnMas = document.querySelectorAll('.mas')
        this.textoMas = document.querySelector('.hide')
        this.btnMas.addEventListener('click', this.mostrar.bind(this)) */

        // Para todas
        this.aBtnMas = document.querySelectorAll('.mas')
        this.textoMas = document.querySelector('.hide')


        this.aBtnMas.forEach(
            (btn) => { btn.addEventListener('click', this.mostrar.bind(this)) }
        )

    }

    mostrar(oE) {

        // un solo objeto
        /* if(this.textoMas.classList.contains('hide')) {
            this.textoMas.classList.remove('hide')
        } else {
            this.textoMas.classList.add('hide')
        } // toggle lo hace esto */


        /* this.textoMas.classList.toggle('hide')

        if(this.textoMas.classList.contains('hide')) {
            this.btnMas.textContent = "Ver más"
        } else {
            this.btnMas.textContent = "Ver menos"
        } */

        //varios eventos
        console.log(oE)
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('hide')
        if (nodoTxt.classList.contains('hide')) {
            // boton = Ver mas 
            nodoBtn.textContent = "Ver más"
        } else {
            // boton = Ocultar
            nodoBtn.textContent = "Ver menos"
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => { new App() })