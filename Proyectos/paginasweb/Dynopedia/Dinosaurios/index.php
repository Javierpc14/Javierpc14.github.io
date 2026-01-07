<?php
require_once('../Database.php');
$db = new Database;
$result = $db->getAll("16_dinosaruios");
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
      <th>Era</th>
      <th>Familias_id</th>
      <th>Zonas_id</th>
      <th>Direccion Imagen</th>
    </tr>
    <?php
    while ($row = $result->fetch()) {
      echo "<tr>";
      echo "<td>" . $row["id"] . "</td>";
      echo "<td>" . $row["nombre"] . "</td>";
      echo "<td>" . $row["era"] . "</td>";
      echo "<td>" . $row["familias_id"] . "</td>";
      echo "<td>" . $row["zonas_id"] . "</td>";
      echo "<td>" . $row["imagen"] . "</td>";
      echo "<td>";
      echo " <a href='FormularioUpdate.php?id=".$row["id"]."'><button class='actualizar'>Actualizar</button></a>";
      echo " <a href='../Delete.php?id=".$row["id"]."&pagina=Dinosaurios/index.php&tabla=16_dinosaurios'><button class='borrar'>Borrar</button></a>";
      echo "</td>";
      echo "</tr>";
    }
    ?>
     <tr>
      <td colspan=8>
      <a href='FormularioInsert.php'><button class='insertar'>Insertar</button></a>
      </td>
    </tr>

  </table>

</body>

</html>