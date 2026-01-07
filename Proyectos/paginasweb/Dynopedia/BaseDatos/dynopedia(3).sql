-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 25-05-2023 a las 08:14:44
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `dynopedia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `16_administrador`
--

CREATE TABLE IF NOT EXISTS `16_administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `16_administrador`
--

INSERT INTO `16_administrador` (`id`, `nombre`, `apellido`, `correo`, `contraseña`) VALUES
(1, 'Andres', 'Galindo', 'Andres@andres.com', '12345'),
(2, 'Javier', 'Paz', 'javier@javier.com', '12345'),
(3, 'Stephen', 'Hawkings', 'Stephen@stephen.com', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `16_dinosaruios`
--

CREATE TABLE IF NOT EXISTS `16_dinosaruios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `era` varchar(50) DEFAULT NULL,
  `familias_id` int(11) DEFAULT NULL,
  `zonas_id` int(11) DEFAULT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `familias_id` (`familias_id`),
  KEY `zonas_id` (`zonas_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `16_dinosaruios`
--

INSERT INTO `16_dinosaruios` (`id`, `nombre`, `era`, `familias_id`, `zonas_id`, `imagen`) VALUES
(1, 'Tyrannosaurus_rex', 'Cretacico', 1, 2, 'Tyrannosaurus_rex.jpg   '),
(2, 'Brachiosaurus', 'Jurasico', 2, 1, 'Brachiosaurus.jpg'),
(3, 'Anquilosaurio', 'Cretacico', 3, 2, 'Anquilosaurio.jpg '),
(4, 'Triceratops', 'Cretacico', 4, 1, 'Triceratops.jpg'),
(5, 'Diplodocus', 'Jurasico', 2, 1, 'Diplodocus.jpg '),
(6, 'Alosaurio', 'Jurasico', 3, 1, 'Alosaurio.jpg'),
(7, 'Lariosaurus', 'Triasico', 5, 7, 'Lariosaurus.jpg '),
(8, 'Plateosaurus ', 'Triasico', 6, 2, 'Plateosaurus.jpg ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `16_familias`
--

CREATE TABLE IF NOT EXISTS `16_familias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `16_familias`
--

INSERT INTO `16_familias` (`id`, `nombre`) VALUES
(1, 'Tyrannosauridae '),
(2, 'Brachiosauridae'),
(3, 'Ankylosauridae'),
(4, 'Ceratopsidae'),
(5, 'Nothosauridae'),
(6, 'Plateosauridae');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `16_usuario`
--

CREATE TABLE IF NOT EXISTS `16_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `rol` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `16_usuario`
--

INSERT INTO `16_usuario` (`id`, `nombre`, `apellido`, `correo`, `contrasena`, `rol`) VALUES
(2, 'Ibai', 'Llanos', 'streamer@gmail.com', 'Ibai1234', 1),
(3, 'Cristiano', 'Ronaldo', 'cr7@gmail.com', 'MessiEsMalo', 1),
(6, 'Lola', 'Noguera', 'lola@gmail.com', 'Lola1234', 1),
(7, 'Andres', 'Galindo', 'andres@andres.com', '12345', 2),
(8, 'Javier', 'Paz', 'javier@gmail.com', '12345', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `16_zonas`
--

CREATE TABLE IF NOT EXISTS `16_zonas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clima` varchar(30) DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `16_zonas`
--

INSERT INTO `16_zonas` (`id`, `clima`, `region`) VALUES
(1, 'Calido ', 'NorteamÃ©rica  '),
(2, 'Calido', 'Europa'),
(3, 'Calido', 'Asia'),
(4, 'Calido', 'Sudamerica'),
(5, 'Calido', 'Africa'),
(6, 'Calido', 'Australia'),
(7, 'Calido', 'Oceano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dinosaurios_pagina`
--

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `dynopedia`.`dinosaurios_pagina` AS select `dynopedia`.`dinosaurios`.`nombre` AS `nombre`,`dynopedia`.`dinosaurios`.`era` AS `era`,`dynopedia`.`familias`.`nombre` AS `familia`,`dynopedia`.`zonas`.`region` AS `region`,`dynopedia`.`dinosaurios`.`imagen` AS `imagen` from ((`dynopedia`.`dinosaurios` join `dynopedia`.`familias` on((`dynopedia`.`familias`.`id` = `dynopedia`.`dinosaurios`.`familias_id`))) join `dynopedia`.`zonas` on((`dynopedia`.`zonas`.`id` = `dynopedia`.`dinosaurios`.`zonas_id`)));
-- Error leyendo datos: (#1356 - View 'dynopedia.dinosaurios_pagina' references invalid table(s) or column(s) or function(s) or definer/invoker of view lack rights to use them)

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `16_dinosaruios`
--
ALTER TABLE `16_dinosaruios`
  ADD CONSTRAINT `16_dinosaruios_ibfk_2` FOREIGN KEY (`familias_id`) REFERENCES `16_familias` (`id`),
  ADD CONSTRAINT `16_dinosaruios_ibfk_3` FOREIGN KEY (`zonas_id`) REFERENCES `16_zonas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
