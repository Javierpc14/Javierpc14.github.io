<?php

// 1. Reanudo sesion
session_start();

if (isset($_SESSION['pepito'])) {
  // 2. Comprobar si tengo o no permisos (rol_id) para estar aqui
  if ($_SESSION['pepito']['rol'] == 2) {
    // Correcto compañeros
  } else if ($_SESSION['pepito']['rol'] == 1) {
    header('Location: Dynopedia/index.php');
  }
} else {
  header('Location: Dynopedia/formulario.php');
}


?>




<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    @import url(indice.css);
  </style>
</head>

<body>
  <h1><a href="Dynopedia/index.php">Volver a la página web</a></h1>

  <aside class="lista">
    <h3>Índice</h3>
    <ul>
      <li><a href="Dinosaurios/index.php">Dinosaurios </a></li>
    </ul>
    <ul>
      <li> <a href="Familias/index.php">Familias</a></li>
    </ul>
    <ul>
      <li><a href="Usuario/index.php">Usuario</a></li>
    </ul>
    <ul>
      <li><a href="Zonas/index.php">Zonas</a></li>
    </ul>
  </aside>
</body>

</html>