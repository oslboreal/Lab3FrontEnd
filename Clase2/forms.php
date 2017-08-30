<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Clase 2 - Tablas y CSS</title>
    <link rel="stylesheet" href="css/estilo.css">
</head>

<body>
    <form action="#" method="POST">
        <fieldset style="margin-left: 30%; margin-right: 30%;">
             <legend>Datos</legend>
        
        <input type="text" name="nombre" id="nombre" placeholder="Escriba aqui">
        <label for="nombre">Nombre</label><br>
        
        <select name="" id="">
            <option value="asd">Opcion uno</option>
            </select>

        <input type="radio" name="genero1" id="generoM" value="valorEnviado"><label for="genero1">Masculino</label>   
        <input type="radio" name="genero2" id="generoF" value="valorEnviado"><label for="genero1">Masculino</label><br> 
        

        <optgroup label="MUESTRO">
            <option value="valor">PRUEBA</option>
        </optgroup>

        <input list="marcas">
        <datalist id="marcas">
            <option value="Renault"></option>
            <option value="Ford"></option>
        </datalist>
        </input>
<br>
        <input type="checkbox" name="check" value="informatica"><label for="check">Acepto los terminos y condiciones.</label><br>
        

        <button type="submit">Enviar</button>

        <!-- Lista de inputs usados -->
        <!--
            <input type="
            "color"
            "date"
            "email"
            "url"
            "number" min="0" max="10" step="2"
            "password"


            -->
           
        </fieldset>
        
    </form>
</body>

</html>
