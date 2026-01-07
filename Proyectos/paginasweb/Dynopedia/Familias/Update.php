<?php
require_once("../Database.php");
$id = $_GET['id'];
$valores = [$_POST['nombre']];
$sql = "UPDATE 16_familias SET nombre = '$valores[0] ' WHERE id = $id;";
$db = new Database();
echo $sql;
$db->modificacion($sql);
header('Location: index.php ');
