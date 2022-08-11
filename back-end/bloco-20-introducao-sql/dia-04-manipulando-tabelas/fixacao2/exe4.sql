SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.film
SET `rental_rate` = (
	CASE 
		WHEN length <= 100 THEN 10
		WHEN length > 100 THEN 20
END);