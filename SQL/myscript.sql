-- CRIAR O BANCO DE DADOS
CREATE DATABASE myappdb;

-- SETAR O BANCO DE DADOS
USE myappdb;

-- CRIAR AS TABELAS
CREATE TABLE tbl_name (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- INSERIR DADOS NA TABELA NAME (tbl_name)
/*
INSERT INTO tbl_name SET tbl_name.name = 'Wanderson Gomes';
INSERT INTO tbl_name SET tbl_name.name = 'Ricardo';
*/