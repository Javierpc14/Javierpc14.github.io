<?php
require_once 'insert.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $era = $_POST['era'];
    $familias_id = $_POST['familias_id'];
    $zonas_id = $_POST['zonas_id'];
    $imagen = $_POST['imagen'];
    echo $imagen;
    $insert = new Insert();
    $resultado = $insert->insertar($nombre, $era, $familias_id, $zonas_id, $imagen);
    header('Location: index.php');
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar dinosaurio</title>
    <style>
        @import url(../FormularioStyle.css);
        @import url(../Dynopedia/fontawesome/css/all.min.css);
    </style>
</head>

<body>
    <h1>Insertar dinosaurio</h1>
    <form method="POST" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre"><br>

        <label for="era">Era:</label>
        <input type="text" name="era"><br>

        <label for="familias_id">ID de familia:</label>
        <input type="text" name="familias_id"><br>

        <label for="zonas_id">ID de zona:</label>
        <input type="text" name="zonas_id"><br>

        <label for="imagen">Imagen del dinosaurio</label><br>
        <input type="text" name="imagen"><br>
        <br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <a href="../Dynopedia/img/"></a>
        <input class="enviar" type="submit" value="Insertar" onclick="guardarImagen()">
    </form>

    <!-- <script>
        function guardarImagen(){
            let nombreDinosaurio=document.getElementById("nombre").value;
            let direccionImagen=document.getElementById("imagen").value;
            var object = new ActiveXObject("Scripting.FileSystemObject");
            let imagen=object.GetFile(direccionImagen);
            imagen.Move("../img/");
            console.log(direccionImagen);
        }
    </script> -->
</body>

</html>