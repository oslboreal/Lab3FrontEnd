"use strict";
// Tipos
var batman = "Batman";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
//var fuerzaFlash = 5;
//var fuerzaSuperman = 100;
//var fuerzaBatman = 1;
//var fuerzaAcuaman = 0;
var caracteristicas;
(function (caracteristicas) {
    caracteristicas[caracteristicas["fuerzaFlash"] = 5] = "fuerzaFlash";
    caracteristicas[caracteristicas["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    caracteristicas[caracteristicas["fuerzaBatman"] = 1] = "fuerzaBatman";
    caracteristicas[caracteristicas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(caracteristicas || (caracteristicas = {}));
// Retorno de funciones --> Se agrega :string para retornar un string.
function activar_batiseñal() {
    return "activada";
}
// ???????????????????????
function pedir_ayuda() {
    console.log("Auxilio!!!");
    Validaciones.contarCaracteres("test");
}
// PARA QUE LOS ELEMENTOS DENTRO DE UN NAMESPACE SE VEAN, ANTES DEL OS MODIFICADORES DE ACCESO TENGO QUE AGREGAR EXPORT.
var Validaciones;
(function (Validaciones) {
    // Aserciones de Tipo
    Validaciones.poder = "100";
    function contarCaracteres(poder) {
        var largoDelPoder = poder.length;
        console.log(largoDelPoder);
    }
    Validaciones.contarCaracteres = contarCaracteres;
})(Validaciones || (Validaciones = {}));
