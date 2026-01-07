<?php
require_once 'insert.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];
    $rol = $_POST['rol'];

    $insert = new Insert();
    $resultado = $insert->insertar($nombre, $apellido, $correo, $contrasena, $rol);
    echo $resultado;
    header('Location: index.php');
}
?>

<html>

<head>
    <title>Insertar Usuario</title>
    <style>
    @import url(../FormularioStyle.css);
    @import url(../Dynopedia/fontawesome/css/all.min.css);
    </style>
</head>

<body>
    <h1>Insertar Usuario</h1>
    <form method="POST" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre"><br>

        <label for="apellido">Apellido:</label>
        <input type="text" name="apellido"><br>

        <label for="correo">Correo:</label>
        <input type="text" name="correo"><br>

        <label for="contrasena">Contraseña:</label>
        <input type="text" name="contrasena"><br>

        <label for="rol">Rol:</label>
        <input type="text" name="rol"><br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <input class="enviar" type="submit" value="Insertar">
    </form>
</body>

</html>