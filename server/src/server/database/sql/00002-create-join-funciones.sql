CREATE OR REPLACE VIEW `joinfunciones` AS SELECT f.*, p.titulo, p.sinopsis, p.estreno, p.director FROM funciones f JOIN peliculas p ON f.idpelicula = p.id;;