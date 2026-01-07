<?php
require_once("../Database.php");
$id = $_GET['id'];
$db = new Database();
$familia = $db->getElementById("familias", $id);
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
    <h1>Actualizar Familia</h1>
    <form method="POST" action="Update.php?id=<?php echo $id ?>">

        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value="<?php echo $familia['nombre'] ?>"><br>

        <div class="enlace">
            <i class="fas fa-arrow-left" onclick="history.back()"></i><br>
        </div>

        <input class="enviar" type="submit" value="Actualizar">
    </form>
</body>

</html>