if (localStorage.numVisitas) {
     // Existe NumVisitas en localStorage
    localStorage.numVisitas++
    
} else {
    // No existe la cookie NumVisitas en localstorage
    localStorage.numVisitas = 1
    
    
}

console.log('Visita número ', localStorage.numVisitas)



navigator.geolocation.getCurrentPosition( 
    (data) => { console.log(data)}, 
    (error) => { console.log(error)}
)