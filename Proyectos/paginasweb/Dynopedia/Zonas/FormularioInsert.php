<?php
require_once 'insert.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $clima = $_POST['clima'];
    $region = $_POST['region'];

    $insert = new Insert();
    $resultado = $insert->insertar($clima, $region);
    echo $resultado;
    header('Location:index.php');
}
?>

<html>

<head>
    <title>Insertar Zona</title>
    <style>
    @import url(../FormularioStyle.css);
    @import url(../Dynopedia/fontawesome/css/all.min.css);
    </style>
</head>

<body>
    <h1>Insertar Zona</h1>
    <form method="POST" action="">
        <label for="clima">Clima:</label>
        <input type="text" name="clima"><br>

        <label for="region">Region:</label>
        <input type="text" name="region"><br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <input class="enviar" type="submit" value="Insertar">
    </form>
</body>

</html>