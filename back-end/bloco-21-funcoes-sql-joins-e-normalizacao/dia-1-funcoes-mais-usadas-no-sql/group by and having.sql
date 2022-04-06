SELECT first_name FROM sakila.actor
GROUP BY first_name; -- remove duplicações

SELECT first_name, COUNT(*) FROM sakila.actor 
GROUP BY first_name; -- isso só funciona assim com group by

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT active, COUNT(*) FROM sakila.customer
GROUP BY active;

SELECT COUNT(active) FROM  sakila.customer WHERE active = 0;

SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(rental_duration) FROM sakila.film
GROUP BY rating ORDER BY AVG(rental_duration) DESC; 

SELECT rating, AVG(rental_duration) AS media FROM sakila.film
GROUP BY rating ORDER BY media DESC; 

SELECT district, COUNT(address) AS farofa FROM sakila.address
GROUP BY district ORDER BY farofa DESC;


-- =-=-=-=-=-=-=-=-=-=-=- Having -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

SELECT rating, AVG(length) AS media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50
ORDER BY media DESC;

SELECT rating, SUM(replacement_cost) AS soma
FROM sakila.film
GROUP by rating
HAVING soma > 3950.50
ORDER BY soma;