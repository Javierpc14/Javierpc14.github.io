<?php
require_once 'insert.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];

    $insert = new Insert();
    $resultado = $insert->insertar($nombre);
    echo $resultado;
    header('Location: index.php');
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar Familia</title>
    <style>
        @import url(../FormularioStyle.css);
        @import url(../Dynopedia/fontawesome/css/all.min.css);
    </style>
</head>

<body>
    <h1>Insertar Familia</h1>
    <form method="POST" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre"  ><br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <input class="enviar"type="submit" value="Insertar">
    </form>
</body>

</html>