try {
    console.log(a)
    console.log('Normal')

} catch(error) {
    console.log(`An Error has occured`)
    console.log(`Error name: ${error.name}`)
    console.log(`Error message: ${error.message}`)
    console.log(`Error stack: ${error.stack}`) 

} finally {
    console.log('Fin')
}

console.log('Still normal')
