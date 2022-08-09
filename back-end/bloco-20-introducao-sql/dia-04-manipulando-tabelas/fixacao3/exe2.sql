SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE actor_id IN (8, 103, 181);