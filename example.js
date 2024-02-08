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
// Definimos una clase base MetodoPago
var MetodoPago = /** @class */ (function () {
    function MetodoPago() {
    }
    MetodoPago.prototype.realizarPago = function () {
        console.log("Realizando pago...");
    };
    return MetodoPago;
}());
// Definimos una subclase TarjetaCredito que extiende de MetodoPago
var TarjetaCredito = /** @class */ (function (_super) {
    __extends(TarjetaCredito, _super);
    function TarjetaCredito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TarjetaCredito.prototype.realizarPago = function () {
        console.log("Realizando pago con tarjeta de crédito...");
    };
    return TarjetaCredito;
}(MetodoPago));
// Definimos una subclase PayPal que extiende de MetodoPago
var PayPal = /** @class */ (function (_super) {
    __extends(PayPal, _super);
    function PayPal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPal.prototype.realizarPago = function () {
        console.log("Realizando pago con PayPal...");
    };
    return PayPal;
}(MetodoPago));
// Definimos una subclase Bitcoin que extiende de MetodoPago
var Bitcoin = /** @class */ (function (_super) {
    __extends(Bitcoin, _super);
    function Bitcoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bitcoin.prototype.realizarPago = function () {
        console.log("Realizando pago con Bitcoin...");
    };
    return Bitcoin;
}(MetodoPago));
// Creamos instancias de cada clase y llamamos al método realizarPago
var tarjeta = new TarjetaCredito();
var paypal = new PayPal();
var bitcoin = new Bitcoin();
tarjeta.realizarPago();
paypal.realizarPago();
bitcoin.realizarPago();
