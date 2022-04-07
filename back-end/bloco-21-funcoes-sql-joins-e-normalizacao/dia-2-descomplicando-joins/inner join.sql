SELECT city.city, city.country_id, country.country 
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT actor.actor_id, actor.first_name, film.film_id 
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
ON actor.actor_id = film.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT staff.first_name, staff.last_name, address.address 
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;


-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT 
  c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM 
  sakila.customer AS c
  INNER JOIN 
    sakila.address AS a
    ON c.address_id = a.address_id
ORDER BY c.first_name 
LIMIT 100;

SELECT * FROM sakila.address;