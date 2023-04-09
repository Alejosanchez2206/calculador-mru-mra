function cambiarcomillas(texto){
    const myNewString = texto.replace(/"/g, "`");
    return myNewString
}

export default cambiarcomillas;

