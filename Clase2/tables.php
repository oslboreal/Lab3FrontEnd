<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Clase 2 - Tablas y CSS</title>
    <style>

    </style>
</head>

<body>
    <table width="300px" border="1px" style="margin-left: 40%; margin-top: 5%;">
<caption>Nuestros Cursos</caption>
<thead>
    <tr>
        <th>Tema</th>
        <th>Precio</th>
        <th>Horas</th>
        <th>Docente</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td rowspan="2">HTML</td>
        <td>99,9</td>
        <td>18</td>
        <td>Octavio</td>
    </tr>
    <tr>
       
        <td>95,9</td>
        <td>18</td>
        <td>Octavio</td>
    </tr>
    <tr>
        <td>PHP</td>
        <td>959,9</td>
        <td>18</td>
        <td>Octavio</td>
    </tr>
    <tr>
        <td>PYTHON</td>
        <td>9</td>
        <td>18</td>
        <td>Laura</td>
    </tr>
    <tr>
        <td>AJAX</td>
        <td>54</td>
        <td>18</td>
        <td>Neiner</td>
    </tr>
    <tr>
        <td>HTML</td>
        <td>99,9</td>
        <td>18</td>
        <td>Octavio</td>
    </tr>
</tbody>
<tfoot>
    <tr>
        <td colspan="4">Estan en descuento!</td>
    </tr>
</tfoot>
</table>
<br>
<br>

<video src="codigo.mp4" controls width="300px" style="margin-left: 40%;" loop autoplay>
    <source src="codigo.mp4" type="video/mp4">
    <source src="codigo.ogv" type="video/ogg">
    <source src="codigo.webm" type="video/webm">
    Su navegador no admite video.
    </video>


</body>

</html>
