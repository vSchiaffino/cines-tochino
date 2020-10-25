CREATE TABLE `cinestochino`.`peliculas_categorias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idpelicula` INT UNSIGNED NOT NULL,
  `idcategoria` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `cinestochino`.`categorias` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));
