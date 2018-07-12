let oDatos = {}
// oDatos = new Objet()


let aDatos = []
// aDatos = new Array()

function letraDNI(num){
    //Para forzar el casting multiplicamos por 1, Si es pepe al convertirlo a numero dara NaN
    if (isNaN(num *1) || num < 1 || num > 99999999) {
        return 'Error'
    }

    const aLETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D','X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'] 
    const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKE'
    return LETRAS[num%23]
    //return aLETRAS[num%23]
}

function probar () {
    console.log(letraDNI('05017822'))
    console.log(letraDNI(50178228))
    console.log(letraDNI(51982862)) 
    console.log(letraDNI('Pepe'))
}

probar()