USE sakila;

# SELECT * FROM film;
# SELECT title, release_year, rating FROM film;

# SELECT COUNT(*) FROM film;

# SELECT DISTINCT last_name FROM actor;

# SELECT COUNT(DISTINCT last_name) FROM actor;

# SELECT first_name, last_name FROM actor ORDER By first_name DESC, last_name ASC;

# SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;