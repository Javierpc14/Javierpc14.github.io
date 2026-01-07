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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url(style.css);
        @import url(dinosauriostyle.css);
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
    <nav>
    </nav>

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
        <section>
            <h1>Era</h1>
            <section>
                <h2 id="cretacico">Cretácico</h2>
                <p>Se conoce como Período Cretácico o simplemente Cretácico, al período de la escala temporal geológica que culmina la Era Mesozoica
                    (que empezó hace 252.2 millones de años y culminó hace 66 millones de años).
                    Es el tercero después de los períodos Triásico (período inicial) y Jurásico (período intermedio).</p>
                <img src="img/cretacico.jpg">
                <section>
                    <h2 id="jurasico">Jurásico</h2>
                    <p>En la escala temporal geológica, el Período Jurásico es el segundo de los tres períodos en que se divide la Era Mesozoica
                        (la cual empezó hace 252.2 millones de años y culminó hace 66 millones de años).
                        Lo antecede el período Cretácico y lo sucede el Triásico.</p>
                    <img src="img/jurasico.jpg">
                </section>
                <section>
                    <h2 id="triasico">Triásico</h2>
                    <p>El Período Triásico es el período inicial de la era Mesozoica de la escala temporal geológica (la cual empezó hace 252.2 millones de años y culminó hace 66 millones de años).
                        Kunto a los posteriores períodos Jurásico y Cretácico, constituyen el reinado de los dinosaurios sobre la Tierra.</p>
                    <img src="img/triasico.jpg">
                </section>
            </section>
        </section>
    </main>
</body>

</html>