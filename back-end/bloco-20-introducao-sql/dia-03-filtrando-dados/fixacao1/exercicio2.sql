SELECT * FROM sakila.customer
WHERE store_id = 2
AND active IS FALSE
ORDER BY first_name;