// Polimorfismo de Subtipos

// Definimos una clase base llamada Personaje ( EJEMPLO DE VIDEOJUEGO)
class Personaje {
    // Método para recibir daño
    recibirDanio() {
        console.log("¡Ouch! El personaje recibió daño.");
    }

    // Método para ser curado
    serCurado() {
        console.log("¡Se siente mejor! El personaje fue curado.");
    }
}

// Definimos una subclase llamada Heroe que extiende de Personaje
class Heroe extends Personaje {
    // Método para usar una habilidad especial
    usarHabilidadEspecial() {
        console.log("¡El héroe usó su habilidad especial!");
    }
}

// Creamos una instancia de Heroe y llamamos a sus métodos
const miHeroe = new Heroe();
miHeroe.recibirDanio();
miHeroe.serCurado();

// Polimorfismo Paramétrico

// Definimos una función genérica llamada imprimirElementos (EJEMPLO DE TODO LIST)
function imprimirElementos<T>(elementos: T[]): void {
    // Iteramos sobre los elementos y los imprimimos
    for (let elemento of elementos) {
        console.log(elemento);
    }
}

// Creamos algunos arreglos de diferentes tipos
const tareas: string[] = ["Hacer la compra", "Llamar al doctor", "Enviar correo"];
const numeros: number[] = [1, 2, 3, 4, 5];

// Llamamos a la función imprimirElementos con diferentes tipos de arreglos
imprimirElementos(tareas);
imprimirElementos(numeros);

// Polimorfismo Ad Hoc

// Definimos una función calcularValor que suma los precios de una lista de productos
function calcularValor(productos: { nombre: string, precio: number }[]): number {
    let total = 0;
    // Iteramos sobre los productos y sumamos sus precios
    for (let producto of productos) {
        total += producto.precio;
    }
    return total;
}

// Creamos algunos arreglos de diferentes tipos de productos
const electrodomesticos = [{ nombre: "Nevera", precio: 800 }, { nombre: "Televisor", precio: 600 }];
const muebles = [{ nombre: "Sofá", precio: 500 }, { nombre: "Mesa", precio: 300 }];
const electronicos = [{ nombre: "Teléfono", precio: 400 }, { nombre: "Tablet", precio: 300 }];

// Calculamos el valor total de cada tipo de producto
console.log("Valor total de los electrodomésticos:", calcularValor(electrodomesticos));
console.log("Valor total de los muebles:", calcularValor(muebles));
console.log("Valor total de los electrónicos:", calcularValor(electronicos));

// Polimorfismo de Inclusión de Interfaces

// Definimos una interfaz Empleado con métodos comunes
interface Empleado {
    calcularSalario(): number;
    imprimirDetalle(): void;
}

// Implementamos la interfaz para diferentes tipos de empleados
class EmpleadoTiempoCompleto implements Empleado {
    calcularSalario() {
        return 2000;
    }

    imprimirDetalle() {
        console.log("Empleado a tiempo completo");
    }
}

class EmpleadoMedioTiempo implements Empleado {
    calcularSalario() {
        return 1000;
    }

    imprimirDetalle() {
        console.log("Empleado a medio tiempo");
    }
}

class Consultor implements Empleado {
    calcularSalario() {
        return 50; // Tarifa por hora
    }

    imprimirDetalle() {
        console.log("Consultor independiente");
    }
}

// Creamos instancias de diferentes tipos de empleados
const empleadoCompleto = new EmpleadoTiempoCompleto();
const empleadoMedioTiempo = new EmpleadoMedioTiempo();
const consultor = new Consultor();

// Llamamos a los métodos de cada tipo de empleado
console.log("Salario del empleado a tiempo completo:", empleadoCompleto.calcularSalario());
console.log("Salario del empleado a medio tiempo:", empleadoMedioTiempo.calcularSalario());
console.log("Honorarios del consultor:", consultor.calcularSalario());

