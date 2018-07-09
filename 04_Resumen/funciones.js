// Declaraciones


/**
 * 
 * Calcular de diversas figuras
 * 
 * @param:string nombre de la figura
 * @param:objet datos de la figura
 *  si es triangulo h y b
 *  si es cuadrado es l
 *  si es circulo es r
 *  
 * @return:number area de la figura.
 * 
 */

function calcularArea(figura, datos) {
    let resultado = 0

    switch (figura.toLowerCase()) {
        case 'triangulo': 
        case 'triángulo':
            /* 
            let dat
            datos['h']

            let x = 'h'
            datos[x] */
            for (const key in object) {
                resultado *= datos[key]
                
            }
            resultado /= 2
            /* resultado = (datos.h * datos.b) /2 */
            /* datos['h'] es lo mismo datos.h */
            break;

        case 'cuadrado':
            resultado = (datos.l * datos.l)
            break;
    
        case 'circulo':
        case 'círculo':
            resultado = datos.r * datos.r *Math.PI
            break;   

        default:
            break;
    }

    return resultado.toFixed(2)

}

// Uso o invocacion



function probar(){

    let figura = 'trianguLO'
    let oDatos = {h:12, b:10}
    console.log(calcularArea(figura, oDatos))
    figura = 'cuadrado'
    oDatos = {l:10}
    console.log(calcularArea(figura, oDatos))
    figura = 'circulo'
    oDatos = {r:15}
    console.log(calcularArea(figura, oDatos)) 
    /* figura = 'pentagono'
    oDatos = {} */
}

probar()