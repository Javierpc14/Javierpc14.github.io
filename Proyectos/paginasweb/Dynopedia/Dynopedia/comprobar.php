<?php
// 1. Recoger los elementos del formulario de login.php
$email = $_POST['email'];
$password = $_POST['password'];

// 2. Importar clase Database.php
require_once ('../Database.php');

// 3. Invocar funcion login de Database.php
$database = new Database();
$respuesta = $database->login($email, $password);


// 4. Comprobar contenido de la respuesta
if($respuesta == null){
    // Ir al login
    header('Location: formulario.php');
}else{
    // Comprobamos rol: si es admin te mando a admin y si es usuario te mando a usuario.
    if($respuesta['rol'] == 2){
        // Le llevamos al admin
        session_start();
        $_SESSION['pepito'] = $respuesta;
        header('Location: ../index.php');
    }else if($respuesta['rol'] == 1){
        // Le llevamos al usuario
        session_start();
        $_SESSION['pepito'] = $respuesta;
        header('Location: index.php');
    }else{
        // Ir al login
        header('Location: formulario.php');
    }
}
?>