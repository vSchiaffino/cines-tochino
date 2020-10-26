ALTER TABLE `cinestochino`.`funciones` 
DROP COLUMN `fechahora`,
ADD COLUMN `fecha` DATE NOT NULL AFTER `formato`,
ADD COLUMN `hora` TIME NOT NULL AFTER `fecha`;