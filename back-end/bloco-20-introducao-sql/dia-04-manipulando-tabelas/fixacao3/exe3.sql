SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_text
WHERE `description` LIKE '%saga%';