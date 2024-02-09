// 1 Definimos una interfaz llamada Personaje (Polimorfismo de Subtipos)
interface Personaje {
    interactuarEntorno(): void;
}

// 1aImplementación para el héroe
class Heroe implements Personaje {
    interactuarEntorno(): void {
        console.log("El héroe interactúa con el entorno de manera valiente.");
    }
}

//  1b Implementación para el aventurero
class Aventurero implements Personaje {
    interactuarEntorno(): void {
        console.log("El aventurero explora el entorno con astucia.");
    }
}

// 3 Función polimórfica que trabaja con cualquier tipo de personaje (Polimorfismo de Subtipos)
function interactuarConPersonaje(personaje: Personaje): void {
    personaje.interactuarEntorno();
}

// 4 Función que utiliza el polimorfismo paramétrico para trabajar con diferentes tipos de datos (Polimorfismo Paramétrico)
function mostrarMensaje<T>(mensaje: T): void {
    console.log("Mensaje: " + mensaje);
}

// 5 Función que utiliza el polimorfismo ad hoc para comportarse de manera diferente según los tipos de datos (Polimorfismo Ad Hoc)
function multiplicar(a: number, b: number): number;
function multiplicar(a: string, b: number): string;
function multiplicar(a: any, b: number): any {
    if (typeof a === 'number') {
        return a * b;
    } else if (typeof a === 'string' && !isNaN(parseInt(a))) {
        return parseInt(a) * b;
    } else {
        return "No se puede multiplicar";
    }
}

// Creación de instancias de personajes
const heroe = new Heroe();
const aventurero = new Aventurero();

// Uso de la función que trabaja con cualquier tipo de personaje (Polimorfismo de Subtipos)
interactuarConPersonaje(heroe);        // Salida: El héroe interactúa con el entorno de manera valiente.
interactuarConPersonaje(aventurero);    // Salida: El aventurero explora el entorno con astucia.

// Uso de la función que utiliza polimorfismo paramétrico (Polimorfismo Paramétrico)
mostrarMensaje("Hola Coders, gracias por su atencion");  // Salida: Mensaje: Hola Coders, gracias por su atencion.
mostrarMensaje(42);                              // Salida: Mensaje: 42
mostrarMensaje("Frontend, Backend ? WEEKEND!!!");   // Aquí T será inferido como string
mostrarMensaje(28.571);       // Aquí T será inferido como number
mostrarMensaje(true);     // Aquí T será inferido como boolean

// Uso de la función que utiliza polimorfismo ad hoc (Polimorfismo Ad Hoc)
console.log(multiplicar(5, 2));    // Salida: 10
console.log(multiplicar("5", 2));  // Salida: 10
console.log(multiplicar("abc", 2));// Salida: No se puede multiplicar



