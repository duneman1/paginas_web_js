/* 
Dos tipos de funciones
- Funciones puras, sin "side effect" (sin efectos secundarios) ->> retornan datos
- Funciones con efectos (operativas),
*/

// Funcion Pura
function suma(a,b) {
    let resultado = a + b
    return resultado
}

// Función Operativa o con efectos
function mostrar(dato) {
    console.log(dato)
}

function main() {
    //Opcion 2
    let resultado = suma (2,5)
    mostrar(resultado)
    // Opcion 1
    mostrar(suma(2,5))

    
    mostrar(suma(45,14579))
}

main()