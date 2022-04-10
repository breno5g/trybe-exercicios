-- -- Cria um banco de dados com o nome especificado.
-- CREATE DATABASE nome_do_banco_de_dados;

-- -- Sinônimo de CREATE DATABASE, também cria um banco de dados.
-- CREATE SCHEMA nome_do_banco_de_dados;

-- -- Verifica se o banco de dados ainda não existe.
-- -- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- -- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
-- IF NOT EXISTS nome_do_banco_de_dados;

-- -- Lista todos os bancos de dados existentes.
-- SHOW DATABASES;

-- -- Define o banco de dados ativo para uso no momento.
-- USE nome_do_banco_de_dados;

-- Exemplo
-- CREATE DATABASE IF NOT EXISTS albuns;

-- Primeiro teste
CREATE DATABASE IF NOT EXISTS teste01;

USE teste01;
CREATE TABLE IF NOT EXISTS artist(
  artist_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS style(
  style_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE IF NOT EXISTS album(
  album_id INT AUTO_INCREMENT PRIMARY KEY,
  artist_id INT,
  title VARCHAR(100) NOT NULL,
  price DECIMAL(5, 2) NOT NULL,
  style_id INT,
  FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
  FOREIGN KEY (style_id) REFERENCES style(style_id)
);
