CREATE TABLE `cinestochino`.`peliculas_actores` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idactor` INT UNSIGNED NOT NULL,
  `idpelicula` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
