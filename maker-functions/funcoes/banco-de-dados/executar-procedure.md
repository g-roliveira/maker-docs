---
title: "Executar Procedure"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função executa uma procedure do banco de dados.

## Parâmetro(s)

1. Nome da procedure a ser executada. (Letras)
2. Lista contendo parâmetros de entrada da procedure. (Variante) (Ver observação 4)
3. Conexão. (Variante) (Ver observação 5)
4. Lista de número referente ao tipo de dados que serão retornados. (Variante) (Ver observação 6)

## Retorno

Uma lista de Variantes. (Variante)
Segue a tabela com os tipos que podem ser retornados:
---- 12 - VARCHAR
2 - NUMERIC
16 - BOOLEAN
91 - DATE
92 - TIME
93 - TIMESTAMP
8 - DOUBLE
6 - FLOAT
7 - REAL
2 - BINARY
1 - CHAR
2004 - BLOB
2005 - CLOB
5 - BIGINT
---- 10 - CURSOR (ORACLE) (É necessário avançar para o primeiro registro)

## Observações

1. Se no lugar da lista informada do quarto parâmetro for fornecido um valor nulo, a função entenderá que a procedure não possui retorno.
2. Os números que forem inclusos na lista do 4º parâmetro devem ser do tipo INT.
3. Ao executar procedures com parâmetros IN,OUT é necessário que os parâmetros OUT sejam declarados ao final.
4. O 2º Parâmetro será nulo se a procedure não tiver parâmetros de entrada.
5. Caso no 3º Parâmetro a conexão seja nula, será usada a conexão principal do sistema.
6. No 4º Parâmetro deve ser verificado o número correspondente na tabela.

## Exemplo

Suponhamos que temos uma procedure no banco de dados que faz a soma de dois números ( parâmetros de entrada IN ) e retorna o resultado desta soma (OUT).
O 1° parâmetro será o nome da função "sp_soma", o 2° parâmetro fará o uso da função: "Criar Lista a partir dos elementos" com os valores Num1 e Num 2, 3° parâmetro será uma conexão (passando nulo para usar a conexão principal do sistema) e o 4° parâmetro
faremos o uso da função "Criar Lista a partir dos elementos" com o valor do resultado com o mesmo tipo da procedure do banco (inteiro).
