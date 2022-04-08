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

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

SELECT C.email, C.address_id, A.address, A.district  
FROM 
  sakila.customer AS C
  INNER JOIN 
    sakila.address AS A
    ON first_name LIKE '%rene%' AND A.district = 'California';


-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT
  c.first_name, 
  COUNT(a.address) AS `quantidade de endereço`
FROM
  sakila.customer c
  INNER JOIN 
    sakila.address AS a 
    ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name, c.last_name;


-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

SELECT A.actor_id, A.first_name, F.film_id, F.title 
FROM sakila.actor AS A
INNER JOIN 
  sakila.film_actor AS FA ON A.actor_id = FA.actor_id 
INNER JOIN sakila.film AS F
ON FA.film_id = F.film_id;

SELECT A.actor_id, A.first_name, F.film_id, F.title 
FROM sakila.actor AS A, sakila.film_actor AS FA, sakila.film AS F
WHERE A.actor_id = FA.actor_id AND FA.film_id = F.film_id;


SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;