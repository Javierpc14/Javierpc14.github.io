<?php
require_once("../Database.php");
$id = $_GET['id'];
$valores = [$_POST['nombre'], $_POST['apellido'], $_POST['correo'], $_POST['contrasena'], $_POST['rol']];
$sql = "UPDATE 16_usuario SET nombre = '$valores[0]', apellido = '$valores[1]' ,correo='$valores[2]',contrasena='$valores[3]'  ,rol=$valores[4]   WHERE id = $id;";
$db = new Database();
echo $sql;
// exit();
$db->modificacion($sql);

header('Location: index.php ');
