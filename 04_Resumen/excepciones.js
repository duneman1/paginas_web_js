try {
    /* let x = noExiste() */
    let x = 0
    throw('Este es mi error')
} catch(error) {
    console.log(error)
    alert('Lo sentimos, se ha producido un error: ' + error)
}
