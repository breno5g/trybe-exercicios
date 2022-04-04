# EX 001: Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
SELECT Piece, Provider FROM PiecesProviders.Provides
WHERE Provider = 'RBT';

# EX 002: Escreva uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;

# EX 003: Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5 OFFSET 3;

# EX 004: Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM PiecesProviders.Provides 
WHERE Provider = 'HAL' ORDER BY Price DESC;

# EX 005: Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(Piece) FROM PiecesProviders.Provides
WHERE Piece = '1';
