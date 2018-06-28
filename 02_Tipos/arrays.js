//arrays 
let aDatos = ['Pepe', 'Rosa', 'Maria']

console.log(typeof aDatos, aDatos)
aDatos[0] = 'Jose'
console.log(aDatos)
aDatos[aDatos.length] = 'Luis'
aDatos.push('Elena')
console.log(aDatos)

//arrays de objetos

let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'}
]



aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})

aDatosFull[0].apellidos = 'Perez'
aDatosFull[0].apellidos = 'Lopez'
aDatosFull.push(12)
aDatosFull.push(true)


console.log(aDatosFull)