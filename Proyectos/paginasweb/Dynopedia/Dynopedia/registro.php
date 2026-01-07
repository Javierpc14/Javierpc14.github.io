<?php
require_once 'insert.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $contrasena = $_POST["contrasena"];

    $insert = new Insert();
    $insert->insertar($nombre, $apellido, $email, $contrasena);
    header('Location: formulario.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/jpg" href="img/icono.ico" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="formulariostyle.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
</head>

<body>
    <header>
        <div class="cabecera">
            <a href="index.php"><img src="img/logo.png" id="logo"></a>
            <ul class="listaNav">
                <a href="index.php">
                    <li>Inicio</li>
                </a>
                <a href="formulario.html">
                    <li>Iniciar Sesión</li>
                </a>
            </ul>
        </div>
    </header>

    <main>
        <form id="registro" method="POST">

            <!-- Apartado del nombre -->
            <label for="name">Nombre</label><br>
            <input type="name" name="nombre" id="nombre" placeholder="Nombre" onkeyup="llamar()"><br>
            <h5 id="mensajeNom"></h5>

            <!-- Apartado del apellido -->
            <label for="apellido">Apellido</label>
            <input type="apellido" name="apellido" id="apellido" placeholder="Apellido" onkeyup="llamar()"><br>
            <h5 id="mensajeAp"></h5>

            <!-- Apartado del email -->
            <label for="email">Email</label><br>
            <input type="email" name="email" id="email" placeholder="email" onkeyup="llamar()" required><br>
            <h5 id="mensajeEm"></h5>

            <!-- Apartado de la contraseña -->
            <label for="asunto">Contraseña</label><br>
            <input type="password" name="contrasena" id="password" placeholder="Contraseña" onkeyup="llamar()"><br>
            <h5 id="mensajePas"></h5>

            <!-- Apartado de la confirmacion de la contraseña -->
            <label for="asunto">Confirmar contraseña</label><br>
            <input type="password" name="password2" id="passwordConfirm" placeholder="Confirmar contraseña"
                onkeyup="llamar()"><br>
            <h5 id="mensajePasC"></h5>

            <!-- Boton de enviar los datos -->
            <button type="submit" id="enviar" disabled>Enviar</button>

            <!-- Icono de flecha para atras -->
            <div class="enlace">
                <i class="fas fa-arrow-left" onclick="history.back()"></i>
            </div>


        </form>
    </main>
</body>
<script>
    let formularios = document.forms;

    let formularioMain = formularios[0];

    let formularioMainNombre = formularioMain['elements']['nombre']['value'];

    /**
     * Funcion para validar el Nombre en el formulario
     * @param - no
     * @return - no
     */
    function validarNombre() {
        console.log("Validar nombre");
        let nombre = formularios[0]['elements']['nombre']['value'];
        //Creo la variable mensaje para que me coja el id del html que hace referencia al nombre
        let mensaje = document.getElementById('mensajeNom');

        // expresion para que solo se puedan poner letras y no deje introducir números
        let expresion = /^\D+$/;

        let correcto = true;

        if (expresion.test(nombre)) {
            console.log('Esta correcto');
            mensaje.textContent = 'Correcto';
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
        } else {
            console.log('Esta incorrecto');
            mensaje.textContent = 'Incorrecto';
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            correcto = false;
        }
        return correcto;
    }

    /**
     * Funcion para validar el Apellido en el formulario
     * @param - no
     * @return - no
     */
    function validarApellido() {
        console.log("Validar apellido");
        let apellido = formularios[0]['elements']['apellido']['value'];
        //Creo la variable mensaje para que me coja el id del html que hace referencia al apellido
        let mensaje = document.getElementById('mensajeAp');

        // expresion para que solo se puedan poner letras y no deje introducir números
        let expresion = /^\D+$/;

        let correcto = true;

        if (expresion.test(apellido)) {
            console.log('Esta correcto');
            mensaje.textContent = 'Correcto';
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
        } else {
            console.log('Esta incorrecto');
            mensaje.textContent = 'Incorrecto';
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            correcto = false;
        }
        return correcto;
    }

    /**
     * Funcion para validar el email en el formulario
     * @param - no
     * @return - no
     */
    function validarEmail() {
        console.log("Validar email");
        let email = formularios[0]['elements']['email']['value'];
        //Creo la variable mensaje para que me coja el id del html que hace referencia al email
        let mensaje = document.getElementById('mensajeEm');
        // Esta variable la uso para determinar si lo introducido es correcto o incorrecto

        let correcto = true;
        if (email.indexOf("@") == -1) {
            //Comprobar que halla una @
            correcto = false;
        } else if (email.indexOf(".") == -1) {
            //Comprobar que halla un .
            correcto = false;
        } else if ((email.length - email.indexOf(".")) - 1 != 2 && (email.length - email.indexOf(".")) - 1 != 3) {
            //comprobar que halla 2 o 3 caracteres despues del .
            correcto = false;
        } else if (email.indexOf("@") < 2) {
            //comprobar que hay al menos 2 caracteres antes de la @
            correcto = false;
        } else if (email.indexOf(".") - email.indexOf("@") <= 2) {
            //esto es para comprobar que entre la @ y el . hay al menos 2 caracteres
            correcto = false;
        };

        if (correcto) {
            console.log('Esta correcto');
            mensaje.textContent = 'Correcto';
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
            correcto = true;
        } else {
            console.log('Esta incorrecto');
            mensaje.textContent = 'Incorrecto';
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            correcto = false;
        }
        return correcto;
    }

    /**
     * Funcion para validar la contraseña en el formulario
     * @param - no
     * @return - no
     */
    function validarContrasena() {
        console.log("Validar contraseña");
        let password = formularios[0]['elements']['password']['value'];
        //Creo la variable mensaje para que me coja el id del html que hace referencia a la contraseña
        let mensaje = document.getElementById('mensajePas');

        let correcto = true;
        /**
         * La contraseña debe contener:
         * - un minimo de 7 caracteres
         * - una mayuscula
         * - dos dígitos
         * - minusculas
         * - un caracter . - _ , =
         */
        // Expresion que comprueba que tenga los requisitos del comentario de arriba
        let expresion = /(?=.*\d{2})(?=.*[A-Z])(?=.*[a-z])(?=.*[.-_,=])(?=.*.{7,})/;

        if (expresion.test(password)) {
            console.log('contraseña Esta correcto');
            mensaje.textContent = 'Correcto';
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
        } else {
            console.log('contraseña Esta incorrecto');
            mensaje.textContent = 'La contraseña debe contener min 7 caracteres, min 1 mayuscula, min 2 digitos, min 1 minuscula, min 1 ".-_,="';
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            correcto = false;
        }
        return correcto;
    }

    /**
     * Funcion para validarque ambas contraseñas sean iguales
     * @param - no
     * @return - no
     */
    function validarConfirmarContraseña() {
        // con esto valido si es correcto o no ambas contraseñas
        let correcto = true;

        let password = formularios[0]['elements']['password']['value'];
        console.log(formularios[0]['elements']['password']['value']);

        let passwordConf = formularios[0]['elements']['passwordConfirm']['value'];
        console.log(formularios[0]['elements']['passwordConfirm']['value']);

        //Creo la variable mensaje para que me coja el id del html que hace referencia a la segunda contraseña
        let mensaje = document.getElementById('mensajePasC');

        if (password != passwordConf) {
            correcto = false;
        }

        if (correcto) {
            console.log('Las contraseñas estan bien');
            mensaje.textContent = 'Correcto';
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
        } else {
            console.log('contraseña Esta incorrecto');
            mensaje.textContent = 'Las contraseñas no coinciden';
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            correcto = false;
        }
        return correcto;
    }

    /**
     * Funcion para llamar a todas las funciones en el html
     * @param - no
     * @return - no
     */
    let boton = document.getElementById("enviar");
    function llamar() {

        if (validarNombre() &&
            validarApellido() &&
            validarEmail() &&
            validarContrasena() &&
            validarConfirmarContraseña()) {
            document.querySelector('#enviar').disabled = false;

            console.log(2);
        } else {
            document.querySelector('#enviar').disabled = true;

        }
    }
</script>

</html>