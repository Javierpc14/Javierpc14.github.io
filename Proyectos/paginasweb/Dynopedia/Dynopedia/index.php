<?php
// 1. Reanudo sesion
session_start();

?>

<!DOCTYPE html>
<html>

<head>
    <link rel="shortcut icon" src="icono.png">
    <title>DYNOPEDIA</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
                <?php
                if (!isset($_SESSION['pepito'])) {
                    echo "<li>";
                    echo "<a href='formulario.php' class='nav-link'><i class='fas fa-sign-in-alt'></i> Iniciar Sesión</a>";
                    echo "</li>";
                } else if ($_SESSION['pepito']['rol'] == 2) {
                    echo "<li>";
                    echo "<a href='../index.php' class='nav-link'>";
                    echo "<i class='fas fa-user-cog';'></i>";
                    echo "  ";
                    echo "Administracion";
                    echo "</a>";
                    echo "</li>";
                }
                ?>
                <li>
                    <a href="logout.php" class="nav-link"><i class="fas fa-sign-out-alt"></i> Cerrar sesion</a>
                </li>
            </ul>
        </div>
    </header>
    <nav>
    </nav>
    <h1>La Dynopedia</h1>
    <aside>
        <ul>
            <li><a href="clasificacion.php" class="nav-link">Clasificación</a>
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
        <section id="dos">
            <img src="img/banner1.jpeg" id="banner">
            <div class="contenido">
                <span>
                    <h2>Bienvenidos a la Dynopedia, mejor guia de dinosaurios del planeta.</h2>
                </span>
                <span>
                    <p>Los dinosaurios fueron un grupo de reptiles que vivieron desde el periodo triásico superior hasta
                        fines del cretácico,alrededor de 65 y 225 millones de años.Su desaparicion marca el limite entre
                        la era mesozoica y la cenozoica, y el comienzo de la edad de los mamiferos.
                    </p>
                </span>
                <span>
                    <h2>Clasificación</h2>
                    <p>
                        Todos los dinosaurios compartían una característica que los diferenciaba de sus antecesores, los
                        arcosaurios: la posición erguida. Sus extremidades estaban situadas debajo del cuerpo; esto
                        posibilitaba que el peso del animal se sostuviera desde abajo y en consecuencia su locomoción
                        resultase más eficaz que la del animal de patas abiertas, en la que el peso del cuerpo se
                        soportaba desde los costados. Además, los dinosaurios eran digitígrados: caminaban sobre las
                        puntas de los dedos; sus antecesores reptantes eran plantígrados: se desplazaban pesadamente
                        sobre las plantas de los pies.

                        Los científicos dividen los dinosaurios en dos grandes grupos. Tienen en cuenta,
                        fundamentalmente, la estructura de los huesos de la cadera. Los Saurisquios son el grupo cuya
                        cadera es similar a la de los lagartos, mientras que los Ornitisquios poseen la cadera similar a
                        la de los pájaros. Si bien no hay acuerdo unánime acerca de su origen, se cree que ambos grupos
                        derivan de un antepasado común: un grupo de reptiles primitivos, los tecodontes, del cual
                        provienen también los cocodrilos, los reptiles voladores y las aves.</p>
                </span>
                <span>
                    <h2>Fin de los dinosaurios</h2>
                    <p>
                        Los dinosaurios dominaron el planeta durante 180 millones de años. Sin embargo, al final del
                        período cretácico, desaparecieron sorpresivamente. ¿Por qué se extinguieron los dinosaurios? Las
                        causas de la desaparición no están del todo claras todavía. No sólo los dinosaurios perecieron
                        en esa época, también lo hicieron muchos otros animales. Varias teorías han intentado explicar
                        estas desapariciones basándose en distintas evidencias. La hipótesis más aceptada es la de la
                        caída de un asteroide de enorme tamaño que desencadenó cambios climáticos de inusitada magnitud
                        en la Tierra. Cambios a los cuales los dinosaurios no pudieron adaptarse.

                        Tras la extinción de los dinosaurios, los pequeños mamíferos, hasta ese momento un grupo
                        perseguido por muchos de los grandes reptiles, se diversificaron y expandieron notablemente. Se
                        valieron de sus capacidades adaptativas, como su excelente olfato y su gran inteligencia, para
                        convertirse en el grupo dominante del planeta hasta nuestros días. Sin embargo, muchos piensan
                        que los dinosaurios no han desaparecido totalmente: sus sucesores, las modernas aves, nos traen
                        cotidianamente a la memoria estos gigantes que, en épocas remotas, llegaron a ser los dueños de
                        nuestro cambiante planeta.</p>
                </span>
            </div>
        </section>
        <section id="tres">
            <img src="img/larga.jpg">
        </section>
    </main>
    <footer>
        @Copyright 2022
    </footer>
</body>

</html>