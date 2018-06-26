function calcularCirculo(radio){
    /* return Math.PI*radio*radio // Esto es con todo los decimales*/
    return (Math.PI*radio*radio).toFixed(2)
}

function calcularCircunf(radio){
    /* return radio*2*Math.PI // Esto es todos los decimales*/
    return (Math.PI*radio*2).toFixed(2)
}

function mostrarCirculo(radio, circulo) {
    /*  let mensaje = 'El area del circulo de radio '
    mensaje += radio
    mensaje += ' es '
    mensaje += circulo */
    // es lo mismo
    /* let mensaje = 'El area del circulo de radio '
    mensaje = mensaje + radio 
    mensaje = mensaje + ' es '
    mensaje = mensaje + circulo */
    //novedad de ES6 (interpolacion de variables)
    let mensaje =
    `
    Resultado: 
    El area del circulo de radio ${radio} es ${circulo}`
    console.log(mensaje)

    
}

function mostrarCircunf(radio, circunf) {
    let mensaje =
    `    La longitud de la circunferencia de radio ${radio} es ${circunf}`
    console.log(mensaje)
}

function main() {
    let radio = 12
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
    radio = 7 
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
}


main()