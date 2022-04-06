-- 1. Escreva uma query que exiba o maior salário da tabela. 
SELECT MAX(SALARY) FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

--  3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente. 
SELECT JOB_ID, AVG(salary) AS media FROM hr.employees
GROUP BY JOB_ID
ORDER BY media DESC;

--  4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias. 

SELECT CONCAT('A grana necessaria para pagar geral é: ', SUM(SALARY)) AS Soma FROM hr.employees;

--  5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais. 
SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM hr.employees;

--  6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ). 

SELECT JOB_ID, COUNT(*) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

--  7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ). 

SELECT JOB_ID, SUM(SALARY) AS pagamento_necessario FROM hr.employees
GROUP BY JOB_ID;

--  8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ). 

SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

--  9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ). 
SELECT JOB_ID, AVG(SALARY) AS media FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media DESC;

--  10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id . 

-- SELECT JOB_ID, AVG(SALARY) AS media FROM hr.employees
-- GROUP BY JOB_ID
-- HAVING JOB_ID <> 'IT_PROG'
-- ORDER BY media DESC;

SELECT DEPARTMENT_ID, AVG(SALARY) AS media, COUNT(*) FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;

--  11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 . 

UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777') 
WHERE phone_number LIKE '515%';

--  12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres. 

SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;