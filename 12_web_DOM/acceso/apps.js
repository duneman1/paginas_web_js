class App {
    constructor()  {
        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)
        /* aNodos.forEach(
            (node) => { node.innerHTML = 'JA JA JA'}
        ) */

        //Accesos directos
        console.info(document.getElementById('p1'))
        console.info(document.getElementsByTagName('p'))


        console.info(document.getElementsByName('nombre'))
        console.info(document.getElementsByClassName('importante'))

        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)

        console.dir(document.querySelectorAll('li'))
        console.dir(nodoMenu.querySelectorAll('li'))

        //Modificar un li en concreto
        let itemsMenu = nodoMenu.querySelectorAll('li')
        console.dir(itemsMenu)
        // itemsMenu[2].style.color = "green" // para poder modificar ese array

        console.dir(nodoMenu.childNodes) //Node List
        console.dir(nodoMenu.children) //Html Colecction
        document.querySelector('#segundo').style.color = "brown"
        console.dir(nodoMenu.children[0].children[2]) //html colection son más facil de manejar
        nodoMenu.children[0].children[2].style.color = "green"
        console.dir(nodoMenu.parentElement)
        console.dir(nodoMenu.nextElementSibling)
        console.dir(nodoMenu.previousElementSibling)

    }
}



document.addEventListener('DOMContentLoaded', 
() => { new App()})