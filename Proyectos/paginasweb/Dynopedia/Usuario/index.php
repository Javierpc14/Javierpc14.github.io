<?php
require_once('../Database.php');
$db = new Database;
$result = $db->getAll("16_usuario");
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    @import url(../style.css);
    @import url(../indice.css);
  </style>
</head>

<body>
  <aside>
    <ul>
      <a href="../index.php">
        <li>Índice</li>
      </a>
    </ul>
  </aside>
  <table>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Correo</th>
      <th>Contraseña</th>
      <th>Rol</th>
    </tr>
    <?php
    while ($row = $result->fetch()) {
      echo "<tr>";
      echo "<td>" . $row["id"] . "</td>";
      echo "<td>" . $row["nombre"] . "</td>";
      echo "<td>" . $row["apellido"] . "</td>";
      echo "<td>" . $row["correo"] . "</td>";
      echo "<td>" . $row["contrasena"] . "</td>";
      echo "<td>" . $row["rol"] . "</td>";
      echo "<td>";
      echo " <a href='FormularioUpdate.php?id=".$row["id"]."'><button class='actualizar'>Actualizar</button></a>";
      echo " <a href='../Delete.php?id=" . $row["id"] . "&pagina=Usuario/index.php&tabla=16_usuario'><button class='borrar'>Borrar</button></a>";
      echo "</td>";
      echo "</tr>";
    }
    ?>
    <tr>
      <td colspan=7>
        <a href='FormularioInsert.php'><button class='insertar'>Insertar</button></a>
      </td>
    </tr>
  </table>

</body>

</html>