function saludar(){
    return "Hola estudiante";
}

function saludarNombre(nombre){
    return "Hola, " + nombre;
}

function nombreCurso(){
    return "Desarrollo de Aplicaciones Web II";
}

function bienvenida(){
    return "Bienvenido al laboratorio de programacion web";
}

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function promedio(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

function esPar(numero){
    if(numero % 2 === 0){
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

function saludo(nombre){
    return "Hola " + nombre;
}

function estudiante(nombre, carrera){
    return "Estudiante " + nombre + " - carrera: " + carrera;
}

function total(precio, cantidad){
    return precio * cantidad;
}

function notaFinal(pr1, pr2, ex){
    return (pr1 + pr2 + ex) / 3;
}

function mensaje(nombre){
    return "Bienvenido " + nombre;
}

function edadFutura(edadActual, anios){
    return edadActual + anios;
}

function resumenEstudiante(nombre, apellido, edad){
    return `Estudiante: ${nombreCompleto(nombre, apellido)} - Edad en 5 años: ${edadFutura(edad, 5)}`;
}

function generarmensaje(nombre, curso, ciclo) {
    return `Bienvenido(a) ${nombre} al curso de ${curso}, ciclo ${ciclo}.`;
}

function clasificarEdad(edad) {
    if (edad < 12) return "niño";
    if (edad < 18) return "adolescente";
    if (edad < 60) return "adulto";
    return "adulto mayor";
}

function contarPalabras(texto) {
    if (texto.trim() === "") return 0;
    return texto.trim().split(/\s+/).length;
}

function estadoalumno(promedio) {
    return promedio >= 13 ? "Aprobado" : "Desaprobado";
}

function validartexto(texto) {
    return texto.trim() !== "";
}

function validarcorreo(correo) {
    return correo.includes("@") && correo.includes(".");
}

function formatearNombre(nombre, apellido){
    return apellido.toUpperCase() + ", " +
           nombre.charAt(0).toUpperCase() +
           nombre.slice(1).toLowerCase();
}
function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}