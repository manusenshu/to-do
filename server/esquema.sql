CREATE TABLE `mascotas` (
  `id` bigint(11) UNSIGNED NOT NULL primary key AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `fecha` date NOT NULL,
  `caducidad` date DEFAULT NULL,
  `cierre` date DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `lMod` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;