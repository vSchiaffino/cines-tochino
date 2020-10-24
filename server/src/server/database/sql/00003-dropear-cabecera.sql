DROP TABLE `cinestochino`.`formasalacabecera`;
ALTER TABLE `cinestochino`.`sala`
    ADD COLUMN `rows` INT UNSIGNED NOT NULL AFTER `nombresala`,
    ADD COLUMN `cols` INT UNSIGNED NOT NULL AFTER `rows`,
    ADD COLUMN `totalseats` INT UNSIGNED NOT NULL AFTER `cols`;
ALTER TABLE `cinestochino`.`formasaladetalle` 
    RENAME TO  `cinestochino`.`formasala` ; 