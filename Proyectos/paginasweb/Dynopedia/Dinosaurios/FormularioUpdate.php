<?php
require_once("../Database.php");
$id = $_GET['id'];
$db = new Database();
$admin = $db->getElementById("dinosaurios", $id);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url(../FormularioStyle.css);
        @import url(../Dynopedia/fontawesome/css/all.min.css);
    </style>
</head>

<body>
    <h1>Actualizar Administrador</h1>
    <form method="POST" action="Update.php?id=<?php echo $id ?>">

        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="<?php echo $admin['nombre'] ?>"><br>

        <label for="era">Era:</label>
        <input type="text" name="era" value="<?php echo $admin['era'] ?>"><br>

        <label for="era">Familias_id:</label>
        <input type="text" name="familias_id" value="<?php echo $admin['familias_id'] ?>"><br>

        <label for="era">Zonas_id:</label>
        <input type="text" name="zonas_id" value="<?php echo $admin['zonas_id'] ?>"><br>

        <label for="era">Imagen:</label>
        <input type="text" name="imagen" value="<?php echo $admin['imagen'] ?>"><br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <input class="enviar" type="submit" value="Actualizar">
    </form>
</body>

</html>