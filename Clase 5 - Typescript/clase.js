var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Si no ponemos modificadores de Acceso todo es publico en Typescript.
var Avenger = /** @class */ (function () {
    function Avenger(nombreReal, peleasGanadas, nombre) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
    }
    Avenger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreReal + ", " + this.peleasGanadas;
    };
    Object.defineProperty(Avenger.prototype, "nombre", {
        // Getter y setter.
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
// Declaramos una variable con LET(Esta posee alcance limitado).
var a1 = new Avenger("Tony", 10, "Ironman");
a1.peleasGanadas = 10;
console.log(a1);
console.log(a1.mostrar());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nr, pg, n, p) {
        var _this = _super.call(this, nr, pg, n) || this;
        _this._poder = p;
        return _this;
    }
    return Xmen;
}(Avenger));
var x1 = new Xmen("Wolverin", 4, "Carlos", "Garras");
console.log(x1);
var array = new Array();
array.push(a1);
array.push(x1);
console.log(array);
// Patron singleton
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Object.defineProperty(Apocalipsis, "Instance", {
        get: function () {
            if (!this._instancia) {
                this._instancia = new Apocalipsis("HELLLL");
            }
            return this._instancia;
        },
        enumerable: true,
        configurable: true
    });
    return Apocalipsis;
}());
console.log(Apocalipsis.Instance);
