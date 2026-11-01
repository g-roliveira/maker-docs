---
title: "Executar Procedure In Out"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função executa uma procedure do banco de dados Oracle.

## Parâmetro(s)

1. Nome da procedure a ser executada. (Letras)
2. Lista contendo parâmetros de entrada da procedure. (Variante) (Ver observação 1)
3. Conexão. (Variante) (Ver observação 2)
4. Uma lista de número referente ao tipo de dados que serão retornados. (Variante) (Ver observação 3)
5. Lista especificando os tipos de parâmetros da procedure (IN ou OUT). (Variante)

## Retorno

Uma lista de Variantes.
Tipos que podem ser retornados:
12 - VARCHAR
2 - NUMERIC
16 - BOOLEAN
91 - DATE
92 - TIME
93 - TIMESTAMP
8 - DOUBLE
6 - FLOAT
7 - REAL
- 2 - BINARY
1 - CHAR
2004 - BLOB
2005 - CLOB
- 10 - CURSOR (ORACLE) (É necessário avançar para o primeiro registro)

## Observações

1. O 2º Parâmetro será nulo se a procedure não tiver parâmetros de entrada.
2. Caso a conexão do 3º Parâmetro seja nula, será usada a conexão principal do sistema.
3. No 4º Parâmetro deve ser Verificado o número correspondente na tabela.
4. Se no lugar da lista informada do quarto parâmetro for fornecido um valor nulo, a função entenderá que a procedure não possui retorno.
4. 2 ProcedureExecutarComando
4. 3 Valores de entrada
4. 4 Conexão
4. 5 Retornos (12,8)
Legenda referente aos elementos de retorno da procedure
Primeiro elemento da lista = Tipo 12 (Varchar)
Terceiro elemento da lista = Tipo 8 (Double)
4. 6 Lista especificando cada parâmetros da procedure Ex.: &#123;IN, IN OUT, OUT&#125; (Letras)
5. Os números que forem inclusos na lista do 4º parâmetro devem ser do tipo INT.
