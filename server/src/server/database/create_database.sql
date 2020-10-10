CREATE TABLE `peliculas` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `sinopsis` varchar(700) NOT NULL,
  `estreno` date NOT NULL,
  `director` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `funciones` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idpelicula` INT UNSIGNED NOT NULL,
  `idsala` INT UNSIGNED NOT NULL,
  `seatPrice` FLOAT UNSIGNED NOT NULL,
  `formato` VARCHAR(10) NOT NULL,
  `fecha` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contrasena` varchar(64) NOT NULL,
  `mail` varchar(320) NOT NULL,
  `token` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `sala` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idformasala` INT UNSIGNED NOT NULL,
  `nombresala` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `formasalacabecera` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `rows` int unsigned NOT NULL,
  `cols` int unsigned NOT NULL,
  `totalSeats` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `formasaladetalle` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idcabecera` INT UNSIGNED NOT NULL,
  `row` INT UNSIGNED NOT NULL,
  `col` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);