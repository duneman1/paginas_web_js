oPersona = {
    nombre: 'Pepe',
    edad: '23',
    profesion: 'Informatico',
    empresa: 'IBM'
}

oPersona2 = {
    nombre: 'Juan',
    edad: '24',
    profesion: 'Informatico',
    empresa: 'IBM'
}

console.log(oPersona)
oPersona.apellido = 'Perez'
delete(oPersona.empresa) // Para borrar una propiedad dentro del objeto

console.log(oPersona)
console.log(oPersona2)

oPersona2 = null

if (oPersona2 === null) {
    console.log('oPersona2 ha sido eliminado')
}