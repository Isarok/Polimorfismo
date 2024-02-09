// 1aImplementación para el héroe
var Heroe = /** @class */ (function () {
    function Heroe() {
    }
    Heroe.prototype.interactuarEntorno = function () {
        console.log("El héroe interactúa con el entorno de manera valiente.");
    };
    return Heroe;
}());
//  1b Implementación para el aventurero
var Aventurero = /** @class */ (function () {
    function Aventurero() {
    }
    Aventurero.prototype.interactuarEntorno = function () {
        console.log("El aventurero explora el entorno con astucia.");
    };
    return Aventurero;
}());
// 3 Función polimórfica que trabaja con cualquier tipo de personaje (Polimorfismo de Subtipos)
function interactuarConPersonaje(personaje) {
    personaje.interactuarEntorno();
}
// 4 Función que utiliza el polimorfismo paramétrico para trabajar con diferentes tipos de datos (Polimorfismo Paramétrico)
function mostrarMensaje(mensaje) {
    console.log("Mensaje: " + mensaje);
}
function multiplicar(a, b) {
    if (typeof a === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && !isNaN(parseInt(a))) {
        return parseInt(a) * b;
    }
    else {
        return "No se puede multiplicar";
    }
}
// Creación de instancias de personajes
var heroe = new Heroe();
var aventurero = new Aventurero();
// Uso de la función que trabaja con cualquier tipo de personaje (Polimorfismo de Subtipos)
interactuarConPersonaje(heroe); // Salida: El héroe interactúa con el entorno de manera valiente.
interactuarConPersonaje(aventurero); // Salida: El aventurero explora el entorno con astucia.
// Uso de la función que utiliza polimorfismo paramétrico (Polimorfismo Paramétrico)
mostrarMensaje("Hola Coders, gracias por su atencion"); // Salida: Mensaje: Hola Coders, gracias por su atencion.
mostrarMensaje(42); // Salida: Mensaje: 42
// Uso de la función que utiliza polimorfismo ad hoc (Polimorfismo Ad Hoc)
console.log(multiplicar(5, 2)); // Salida: 10
console.log(multiplicar("5", 2)); // Salida: 10
console.log(multiplicar("abc", 2)); // Salida: No se puede multiplicar
