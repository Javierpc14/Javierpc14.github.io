<?php
// 1. Reanudo sesion
session_start();
if (isset($_SESSION['pepito'])) {
    // 2. Comprobar si tengo o no permisos (rol_id) para estar aqui
    if ($_SESSION['pepito']['rol'] == 1) {
        // Correcto compañeros
    } else if ($_SESSION['pepito']['rol'] == 2) {
        // header('Location: ../index.php');
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" type="image/jpg" href="img/icono.ico" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="formulariostyle.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fontawesome/css/all.min.css">
</head>

<body>
    <header>
        <div class="cabecera">
            <a href="index.php"><img src="img/logo.png" id="logo"></a>
            <ul class="listaNav">
                <li>
                    <a href="#" class="nav-link" id="dropdownMenuLink">
                        <?php
                        if (isset($_SESSION['pepito'])) {
                            echo "<i class='fas fa-user-astronaut';'></i>";
                            echo "  ";
                            echo $_SESSION['pepito']['nombre'];
                        } ?>

                    </a>
                </li>
                <li>
                    <a href='index.php' class='nav-link'>
                        <i class='fas fa-home'>
                            Inicio
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    </header>

    <main>
        <form action="comprobar.php" method="post" name="iniciarsesion">
            <label for="email">Email</label><br>
            <input type="email" name="email" id="email" placeholder="email" required>
            <br>
            <label for="password">Contraseña</label><br>
            <input type="password" name="password" id="password" placeholder="Contraseña"><br>

            <input id="enviar" type="submit" name="enviar" value="Enviar datos" />

            <div class="enlace">
                <i class="fas fa-arrow-left" onclick="history.back()"></i>
            </div>

            <div>
                <p>¿No tienes una cuenta?</p>
                <a href="registro.php">Haz clic aqui para registrarte</a>
            </div>
        </form>
    </main>
</body>

</html>