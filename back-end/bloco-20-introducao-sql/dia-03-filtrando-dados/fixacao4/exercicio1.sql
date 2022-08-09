SELECT COUNT(payment_id) as payments FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';