SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor ASC;

SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%n%';

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%f%';

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%f%';

SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco >= 15 AND Preco <= 40 ORDER BY Preco;

SELECT COUNT(*) FROM  PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-10';