function enviarMision(xmen:{nombre:string, peleasGanadas:number}){
    console.log(xmen.nombre);
}

interface IXmen{
    nombre:string;
    peleasGanadas:number;
    otroAtributo:string;
    miMetodo():string;
}

let xmen:IXmen;
xmen.nombre = "GENIAL";
xmen.peleasGanadas = 4;
xmen.otroAtributo = "otro";

enviarMision(xmen);

class XMEN2 implements IXmen
{
    nombre: string;
    peleasGanadas: number;
    otroAtributo: string;
    miMetodo(): string {
        return "Hola";
    }
    
}

let xmen2:XMEN2 = new XMEN2();


