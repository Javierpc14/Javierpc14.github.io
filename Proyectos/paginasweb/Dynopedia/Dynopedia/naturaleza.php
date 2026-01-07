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
    <main style="display:block">
    <h1>Naturaleza</h1>

        <section>
            <h2 id="habita">Habitat</h2><br>
            <p>A comienzo de la era de los dinosaurios, en el paisaje dominaban arbustos parecidos al helecho. Luego llegó un tiempo en el que aparecieron los bosques de colosales.
                Más adelante sucedió el cambio más importante cuando aparecieron las primeras plantas de flores (fanerógamas).
                Los dinosaurios tuvieron que adaptarse a días de mucho sol y noches de oscuridad.
                También se producían continuas erupciones volcánicas, violentas tormentas y riadas repentinas.</p>
            <img src="img/habitat.jpg">
        </section>
        <section>
            <h2 id="alimentacion">Alimentación</h2><br>
            <p> Los dinosaurios podían alimentarse de carne, plantas o de ambos,
                por lo que existieron tres tipos de dinosaurios principales según su alimentación: herbívoros, carnívoros y omnívoros.
                Los dinosaurios herbívoros consumían una gran variedad de plantas o partes de estas, de las cuales obtenían sus nutrientes.
                Sus grandes cuerpos estaban adaptados anatómica y fisiológicamente para este tipo de alimentación,
                la cual consistía en hojas o brotes frescos ubicados en las partes altas de los árboles.
                También consumían frutos, hojas aciculares como de las coníferas, ginkgos y vegetación de pradera.
                Los dinosaurios carnívoros tenían una variada dieta basada en otros animales.
                La alimentación de los dinosaurios carnívoros podía consistir en mamíferos, peces, insectos e incluso otros dinosaurios.
                Algunos se alimentaban de carroña, otros eran cazadores activos de presas vivas y
                ciertas especies tenían una dieta específica que estaba basada en animales acuáticos.</p>
            <img src="img/dieta.jpg">
        </section>
    </main>
</body>

</html>