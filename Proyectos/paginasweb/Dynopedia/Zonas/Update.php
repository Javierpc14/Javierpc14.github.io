<?php
require_once("../Database.php");
$id = $_GET['id'];
$valores = [$_POST['clima'],$_POST['region']];
$sql = "UPDATE 16_zonas SET clima = '$valores[0] ',region='$valores[1] ' WHERE id = $id;";
$db = new Database();
echo $sql;
$db->modificacion($sql);
header('Location: index.php ');
