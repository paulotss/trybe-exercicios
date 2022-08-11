SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE actor_id = 12;