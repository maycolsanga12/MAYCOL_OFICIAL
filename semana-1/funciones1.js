function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}

function subtotal(precio, cantidad){
    return precio * cantidad;
}

function descuento(subtotal){
    if (subtotal >= 100) {
        return subtotal * 0.10; // 10% descuento
    }
    return 0;
}

function totalPagar(precio, cantidad){
    const sub = subtotal(precio, cantidad);
    const desc = descuento(sub);
    return sub - desc;
}

function contarPalabras(texto) {
    if (texto.trim() === "") {
        return 0;
    }

    return texto.trim().split(/\s+/).length;
}
function validarcorreo(correo) {
    return correo.includes("@") &&
           correo.includes(".") &&
           correo.trim().length > 5;
}