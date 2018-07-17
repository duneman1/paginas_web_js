let factura = {
    empresa: {
        nombre: '',
        direccion: '',
        teléfono: '',
        nif: '',
    },
    cliente: {
        nombre: '',
        dirección: '',
        telefono: '',
        nif: '',
    },
    elementos: [
        {
            descripcion: '',
            precio: '',
            cantidad: '',
        },
        {
            descripcion: '',
            precio: '',
            cantidad: '',
        },
        {
            descripcion: '',
            precio: '',
            cantidad: '',
        },
    ],
    importeTotal: '',
    tipoIVA: '',
    formaPago: '',
}

factura.calculaImporteTotal = function() {
    // Este metodo tiene que actualizar el valor de la propiedad
}

factura.mostrar = function() {
    // Este metodo muestra por pantalla en un importe total en html
}

let factura1 = {
    empresa: {
        nombre: 'TIA, S.A.',
        direccion: 'Rue del percebe, 47',
        teléfono: '6656565',
        nif: 'TIA-1245689',
    },
    cliente: {
        nombre: 'Agente Mortadelo',
        dirección: 'Caracol, 58',
        telefono: '99798771',
        nif: 'M-45678912',
    },
    elementos: [
        {
            descripcion: 'Disfrad de chimpance',
            precio: '20',
            cantidad: '2',
        },
        {
            descripcion: 'Disfrad de elefante',
            precio: '30',
            cantidad: '5',
        },
        {
            descripcion: 'Disfrad de Dracula',
            precio: '15',
            cantidad: '3',
        },
    ],
    importeTotal: '0',
    tipoIVA: '1.04',
    formaPago: 'Transferencia',
}

factura1.calculaImporteTotal = function() {
    // Este metodo tiene que actualizar el valor de la propiedad
    this.importeTotal = 0

    this.elementos.forEach(
        (item) => {this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )
    
}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                    console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}


factura1.mostrar()