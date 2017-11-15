// Si no ponemos modificadores de Acceso todo es publico en Typescript.
class Avenger{
    private _nombre:string;
    nombreReal:string;
    peleasGanadas:number;

        constructor(nombreReal:string, peleasGanadas:number, nombre?:string)
        {
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
        }

        mostrar():string{
            return `${this._nombre}, ${this.nombreReal}, ${this.peleasGanadas}`;
        }

        // Getter y setter.
        get nombre():string
        {
            return this._nombre;
        }

        set nombre(nombre:string)
        {
            this._nombre = nombre;
        }
    }

    // Declaramos una variable con LET(Esta posee alcance limitado).
    let a1 = new Avenger("Tony", 10, "Ironman");
    a1.peleasGanadas = 10;

    console.log(a1);
    console.log(a1.mostrar());

    class Xmen extends Avenger{
        private _poder:string;
        constructor(nr:string, pg:number, n:string, p:string)
        {
            super(nr,pg,n);
            this._poder = p;
        }
    }

    let x1:Xmen = new Xmen("Wolverin", 4, "Carlos", "Garras");
    console.log(x1);

    let array = new Array<Avenger>();
    array.push(a1);
    array.push(x1);

    console.log(array);

    // Patron singleton
    class Apocalipsis{
        private static _instancia:Apocalipsis;
        private constructor(public nombre:string){

        }
        static get Instance():Apocalipsis{
            if(!this._instancia)
            {
                this._instancia = new Apocalipsis("HELLLL"); 
            }
            return this._instancia;
        }
    }
    console.log(Apocalipsis.Instance);

    