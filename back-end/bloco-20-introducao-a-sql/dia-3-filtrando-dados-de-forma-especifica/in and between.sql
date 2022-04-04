SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);

SELECT * FROM sakila.customer WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM sakila.address 
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT first_name, last_name FROM sakila.customer 
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') ORDER BY first_name ASC;

SELECT email FROM sakila.customer WHERE address_id BETWEEN 172 AND 176;

SELECT COUNT(payment_date) FROM sakila.payment WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6 ORDER BY title;

SELECT title, rating FROM sakila.film 
WHERE rating IN ('G', 'PG', 'PG-13') ORDER BY title LIMIT 500;