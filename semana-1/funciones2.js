function nombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`;
}

function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function obtenerCondicion(promedio) {
    if (promedio >= 17) return "Excelente";
    if (promedio >= 13) return "Aprobado";
    return "Desaprobado";
}

function mensajeFinal(nombre, promedio, condicion) {
    return `Alumno: ${nombre}
Promedio: ${promedio}
Condición: ${condicion}`;
}

function edadFutura(edadActual, anios){
    return edadActual + anios;
}

function resumenEstudiante(nombre, apellido, edad){
    return `Estudiante: ${nombreCompleto(nombre, apellido)} - Edad en 5 años: ${edadFutura(edad, 5)}`;
}

function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    return suma / notas.length;
}

function estadoalumno(promedio) {
    return promedio >= 13 ? "Aprobado" : "Desaprobado";
}