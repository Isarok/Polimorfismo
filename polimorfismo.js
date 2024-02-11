// Polimorfismo de Subtipos
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definimos una clase base llamada Personaje
var Personaje = /** @class */ (function () {
    function Personaje() {
    }
    // Método para recibir daño
    Personaje.prototype.recibirDanio = function () {
        console.log("¡Ouch! El personaje recibió daño.");
    };
    // Método para ser curado
    Personaje.prototype.serCurado = function () {
        console.log("¡Se siente mejor! El personaje fue curado.");
    };
    return Personaje;
}());
// Definimos una subclase llamada Heroe que extiende de Personaje
var Heroe = /** @class */ (function (_super) {
    __extends(Heroe, _super);
    function Heroe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Método para usar una habilidad especial
    Heroe.prototype.usarHabilidadEspecial = function () {
        console.log("¡El héroe usó su habilidad especial!");
    };
    return Heroe;
}(Personaje));
// Creamos una instancia de Heroe y llamamos a sus métodos
var miHeroe = new Heroe();
miHeroe.recibirDanio();
miHeroe.serCurado();
// Polimorfismo Paramétrico
// Definimos una función genérica llamada imprimirElementos
function imprimirElementos(elementos) {
    // Iteramos sobre los elementos y los imprimimos
    for (var _i = 0, elementos_1 = elementos; _i < elementos_1.length; _i++) {
        var elemento = elementos_1[_i];
        console.log(elemento);
    }
}
// Creamos algunos arreglos de diferentes tipos
var tareas = ["Hacer la compra", "Llamar al doctor", "Enviar correo"];
var numeros = [1, 2, 3, 4, 5];
// Llamamos a la función imprimirElementos con diferentes tipos de arreglos
imprimirElementos(tareas);
imprimirElementos(numeros);
// Polimorfismo Ad Hoc
// Definimos una función calcularValor que suma los precios de una lista de productos
function calcularValor(productos) {
    var total = 0;
    // Iteramos sobre los productos y sumamos sus precios
    for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
        var producto = productos_1[_i];
        total += producto.precio;
    }
    return total;
}
// Creamos algunos arreglos de diferentes tipos de productos
var electrodomesticos = [{ nombre: "Nevera", precio: 800 }, { nombre: "Televisor", precio: 600 }];
var muebles = [{ nombre: "Sofá", precio: 500 }, { nombre: "Mesa", precio: 300 }];
var electronicos = [{ nombre: "Teléfono", precio: 400 }, { nombre: "Tablet", precio: 300 }];
// Calculamos el valor total de cada tipo de producto
console.log("Valor total de los electrodomésticos:", calcularValor(electrodomesticos));
console.log("Valor total de los muebles:", calcularValor(muebles));
console.log("Valor total de los electrónicos:", calcularValor(electronicos));
// Implementamos la interfaz para diferentes tipos de empleados
var EmpleadoTiempoCompleto = /** @class */ (function () {
    function EmpleadoTiempoCompleto() {
    }
    EmpleadoTiempoCompleto.prototype.calcularSalario = function () {
        return 2000;
    };
    EmpleadoTiempoCompleto.prototype.imprimirDetalle = function () {
        console.log("Empleado a tiempo completo");
    };
    return EmpleadoTiempoCompleto;
}());
var EmpleadoMedioTiempo = /** @class */ (function () {
    function EmpleadoMedioTiempo() {
    }
    EmpleadoMedioTiempo.prototype.calcularSalario = function () {
        return 1000;
    };
    EmpleadoMedioTiempo.prototype.imprimirDetalle = function () {
        console.log("Empleado a medio tiempo");
    };
    return EmpleadoMedioTiempo;
}());
var Consultor = /** @class */ (function () {
    function Consultor() {
    }
    Consultor.prototype.calcularSalario = function () {
        return 50; // Tarifa por hora
    };
    Consultor.prototype.imprimirDetalle = function () {
        console.log("Consultor independiente");
    };
    return Consultor;
}());
// Creamos instancias de diferentes tipos de empleados
var empleadoCompleto = new EmpleadoTiempoCompleto();
var empleadoMedioTiempo = new EmpleadoMedioTiempo();
var consultor = new Consultor();
// Llamamos a los métodos de cada tipo de empleado
console.log("Salario del empleado a tiempo completo:", empleadoCompleto.calcularSalario());
console.log("Salario del empleado a medio tiempo:", empleadoMedioTiempo.calcularSalario());
console.log("Honorarios del consultor:", consultor.calcularSalario());
