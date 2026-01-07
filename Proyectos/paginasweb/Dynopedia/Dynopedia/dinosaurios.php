<?php
require_once('../Database.php');
$db = new Database;
$result = $db->getAll("dinosaurios_pagina");

// 1. Reanudo sesion
session_start();

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import "style.css";
        @import "tierlist.css";

        aside {
            height: 300px;
        }

        main {
            gap: 1vw;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            padding: 5px;
            width: 60vw;
            height: auto;
            flex-wrap: wrap;
            justify-content: center;
        }

        img {
            height: 20vh;
            width: 20vw;
        }
    </style>
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
                        <i class='fas fa-home'></i> Inicio
                    </a>
                </li>
                <li>
                    <?php
                    if (!isset($_SESSION['pepito'])) {
                        echo "<a href='formulario.php' class='nav-link'><i class='fas fa-sign-in-alt'></i> Iniciar Sesión</a>";
                    } else if ($_SESSION['pepito']['rol'] == 2) {
                        echo "<a href='../index.php' class='nav-link'>";
                        echo "<i class='fas fa-user-cog';'></i>";
                        echo "  ";
                        echo "Administracion";
                        echo "</a>";
                    }
                    ?>

                </li>
            </ul>
        </div>
    </header>
    <aside>
        <ul>
            <li><a href="clasificacion.php">Clasificación</a>
                <ul>
                    <a href="clasificacion.php#linkSaurisquios">
                        <li> Saurisquios</li>
                    </a>
                    <a href="clasificacion.php#linkOrnitrisquios">
                        <li>Ornitrisquios</li>
                    </a>
                </ul>
            </li>
            <li><a href="era.php">Era</a>
                <ul>
                    <a href="era.php#cretacico">
                        <li>Cretácico</li>
                    </a>
                    <a href="era.php#jurasico">
                        <li>Jurásico</li>
                    </a>
                    <a href="era.php#triasico">
                        <li>Triásico</li>
                    </a>
                </ul>
            </li>
            <li><a href="naturaleza.php">Naturaleza</a>
                <ul>
                    <a href="naturaleza.php#habita">
                        <li>Habitat</li>
                    </a>
                    <a href="naturaleza.php#alimentacion">
                        <li>Alimentación</li>
                    </a>

                </ul>
            </li>
            <li> <a href="tierlist.php">Tier list</a></li>
            <li><a href="recetas.php#receta">Recetas </a></li>
            <li><a href="dinosaurios.php">Dinosaurios</a></li>
        </ul>
    </aside>
    <main>
        <?php
        while ($row = $result->fetch()) {
            echo "<div>";
            echo "<img src='img/" . $row["imagen"] . "'></img>";
            echo "<h3> Nombre: " . $row["nombre"] . "</h3>";
            echo "<p> Era: " . $row["era"] . "</p>";
            echo "<p> Familia: " . $row["familia"] . "</p>";
            echo "<p> Region: " . $row["region"] . "</p>";
            echo "</div>";
        }
        ?>
    </main>
</body>

</html>