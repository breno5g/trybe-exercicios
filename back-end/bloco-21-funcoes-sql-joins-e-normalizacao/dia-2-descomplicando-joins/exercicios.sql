-- --  Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme. 
-- SELECT 
--   movie.title, 
--   sales.domestic_sales, 
--   sales.international_sales 
-- FROM 
--   Pixar.Movies AS movie,
--   Pixar.BoxOffice AS sales
-- WHERE movie.id = sales.movie_id;

SELECT 
  movie.title, 
  sales.domestic_sales, 
  sales.international_sales 
FROM 
  Pixar.Movies AS movie
INNER JOIN 
  Pixar.BoxOffice AS sales
  ON movie.id = sales.movie_id;

--  Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ). 

-- SELECT 
--   movie.title, 
--   sales.domestic_sales, 
--   sales.international_sales 
-- FROM 
--   Pixar.Movies AS movie,
--   Pixar.BoxOffice AS sales
-- WHERE movie.id = sales.movie_id
--   AND sales.international_sales > sales.domestic_sales;

SELECT 
  movie.title, 
  sales.domestic_sales, 
  sales.international_sales 
FROM 
  Pixar.Movies AS movie
INNER JOIN 
  Pixar.BoxOffice AS sales
  ON movie.id = sales.movie_id 
  AND sales.international_sales > sales.domestic_sales;

--  Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente. 

-- SELECT 
--   movie.title, 
--   sales.rating
-- FROM 
--   Pixar.Movies AS movie,
--   Pixar.BoxOffice AS sales
-- WHERE movie.id = sales.movie_id
-- ORDER BY sales.rating ASC;

SELECT 
  movie.title, 
  sales.rating
FROM 
  Pixar.Movies AS movie
INNER JOIN 
  Pixar.BoxOffice AS sales
  ON movie.id = sales.movie_id
ORDER BY sales.rating DESC;

--  Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética. 

SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM
  Pixar.Theater As t
  LEFT JOIN 
    Pixar.Movies AS m
  ON m.id = t.id
ORDER BY t.name;

-- SELECT
--   t.name,
--   t.location,
--   m.title,
--   m.director,
--   m.year,
--   m.length_minutes
-- FROM
--   Pixar.Theater As t,
--   Pixar.Movies AS m
-- WHERE m.id = t.id
-- ORDER BY t.name;

--  Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética. 

SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Pixar.Theater t
        RIGHT JOIN
    Pixar.Movies m ON t.id = m.theater_id
ORDER BY t.name;

--  Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8. 

SELECT 
  movie.title, 
  sales.rating
FROM 
  Pixar.Movies AS movie
INNER JOIN 
  Pixar.BoxOffice AS sales
  ON movie.id = sales.movie_id
    AND sales.rating > 8
ORDER BY sales.rating DESC;