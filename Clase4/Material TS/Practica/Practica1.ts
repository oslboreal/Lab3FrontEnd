// Tipos
var batman:string = "Batman";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string,string] = [batman,superman];
var villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
//var fuerzaFlash = 5;
//var fuerzaSuperman = 100;
//var fuerzaBatman = 1;
//var fuerzaAcuaman = 0;

enum caracteristicas{
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0
}

// Retorno de funciones --> Se agrega :string para retornar un string.
function activar_batiseñal():string{
  return "activada";
}

// ???????????????????????

function pedir_ayuda(){
  console.log("Auxilio!!!");
  Validaciones.contarCaracteres("test");
}

// PARA QUE LOS ELEMENTOS DENTRO DE UN NAMESPACE SE VEAN, ANTES DEL OS MODIFICADORES DE ACCESO TENGO QUE AGREGAR EXPORT.
namespace Validaciones
{
  // Aserciones de Tipo
  export var poder = "100";

  export function contarCaracteres(poder:string){
  var largoDelPoder = poder.length;
  console.log( largoDelPoder );
  }
}