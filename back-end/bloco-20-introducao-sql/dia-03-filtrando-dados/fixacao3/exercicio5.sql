SELECT title, rating FROM sakila.film
WHERE rating IN ('PG', 'G', 'PG-13')
ORDER BY title
LIMIT 500;