<?php
require_once("../Database.php");
$id = $_GET['id'];
$valores = [$_POST['nombre'], $_POST['era'], $_POST['familias_id'], $_POST['zonas_id'], $_POST['imagen']];
$sql = "UPDATE 16_dinosaurios SET nombre = '$valores[0]', era = '$valores[1]' ,familias_id=$valores[2]  ,zonas_id=$valores[3] ,imagen='$valores[4] ' WHERE id = $id;";
$db = new Database();
echo $sql;
$db->modificacion($sql);
header('Location: index.php ');
