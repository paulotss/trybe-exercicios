SELECT COUNT(customer_id) FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;