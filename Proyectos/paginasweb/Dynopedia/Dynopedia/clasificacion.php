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
    <title>Categorias</title>
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
            <h1>Clasificación</h1>
            <section>
                <h2 id="linkSaurisquios">Saurisquios</h2>
                <p>Los Saurisquios son un orden perteneciente al superorden dinosaurio, aparecieron en el triásico
                    superior
                    y
                    se diversificaron durante el jurásico y cretácico. Saurisquios significa cadera de reptil.</p>
                <h4>Características</h4>
                <p>Se diversifican en 2 linajes principales, terópodos y saurópodos. Los terópodos fueron los carnívoros
                    dominantes durante la mayor parte del Jurásico y del Cretácico. El otro linaje, el de los
                    saurópodos,
                    que se inició en saurisquios carnívoros y bípedos del Triásico, produjo formas que adoptaron un
                    régimen
                    herbívoro y que regresaron a la locomoción cuadrúpeda.</p>
                <div id="saurisquios">
                    <h3>Tyrannosaurus rex</h3>
                    <img src="img/SaurisquisTR.jpg">
                    <p>Nombre: peso estimado, entre 6 y 9 toneladas</p>
                    <p>Altura: 4 metros</p>
                    <p>Longitud: de 12 a 13 metros</p>
                    <p>Dieta: depredador</p>

                    <h3>Brachiosaurus</h3>
                    <img src="img/SaurisquiosBRA.jpg">
                    <p>Peso: peso estimado de 35 toneladas</p>
                    <p>Altura: 9 metros</p>
                    <p>Longitud: 26 metros</p>
                    <p>Dieta: herbívoros</p>
                </div>
            </section>
            <section>
                <h2 id="linkOrnitrisquios">Ornitrisquios</h2>
                <p>Los Ornitrisquios son un orden perteneciente al superorden dinosaurio, aparecieron en el triásico
                    superior y
                    se diversificaron durante el jurásico y cretácico .Ornitrisquios significa cadera de ave.</p>
                <h3>Características</h3>
                <p>En los ornitisquios el pubis señala hacia abajo y hacia atrás (hacia la cola), paralelo al isquion,
                    con un
                    proceso prepubico delantero para apoyar el abdomen. Esto hace una estructura pélvica de cuatro
                    extremos,
                    y una pelvis más ancha y estable..</p>
                <div id="ornitrisquios">
                    <h3>Anquilosaurio</h3>
                    <img src="img/ornitrisquiosANQ.jpg">
                    <p>Peso: peso estimado, entre 5 y 8 toneladas</p>
                    <p>Altura: 2 metros</p>
                    <p>Longitud: de 6 metros</p>
                    <p>Dieta: herbívoro</p>

                    <h3>Triceratops</h3>
                    <img src="img/ornitrisquiosTRI.jpg">
                    <p>Peso: peso estimado de entre 6 y 12 toneladas</p>
                    <p>Altura: 3 metros</p>
                    <p>Longitud: de 7 a 9 metros</p>
                    <p>Dieta: herbívoros</p>
                </div>
            </section>
        </section>
    </main>
</body>

</html>