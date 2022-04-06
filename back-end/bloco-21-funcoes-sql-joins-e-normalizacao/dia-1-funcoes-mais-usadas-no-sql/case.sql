-- Sintaxe:
-- SELECT CASE
--   WHEN condicao THEN valor
--   ELSE valor padrao
-- END;

-- SELECT
--     nome,
--     nivel_acesso,
--     CASE
--         WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
--         WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
--         WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
--         ELSE 'Usuário sem acesso'
--     END AS nivel_acesso
-- FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

SELECT title, rating,
  CASE
      WHEN rating = 'G' THEN 'Livre para todos'
      WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
      WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
      WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'público-alvo'
FROM sakila.film;