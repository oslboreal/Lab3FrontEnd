"use strict";
/// <reference path="node_modules\@types\jquery\index.d.ts" />
var Sistema;
(function (Sistema) {
    var Mascotas = /** @class */ (function () {
        // Método constructor.
        function Mascotas(nombre, edad, patas, tipo) {
            this._edad = edad;
            this._nombre = nombre;
            this._patas = patas;
            this._tipo = tipo;
        }
        return Mascotas;
    }());
})(Sistema || (Sistema = {}));
