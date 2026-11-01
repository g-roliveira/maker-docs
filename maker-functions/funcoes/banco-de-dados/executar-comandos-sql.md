---
title: "Executar Comandos SQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função recebe como parâmetro uma constante do tipo letras, onde dentro dessa constante pode conter apenas
um comando SQL. Essa função executa o comando SQL no banco de dados.
Caso seja necessário passar parâmetros, este deve estar na consulta com uma interrogação (?) na ordem da
passagem dos mesmos.

## Parâmetro(s)

1. Comando SQL a ser executado. (Letras)
2. Conexão com outro banco de dados. (Variante, Opcional)
3. Lista de parâmetros. (Variante, Opcional)

## Retorno

Retorna NULO caso o comando SQL seja executado com sucesso. Caso haja algum erro, este será retornado.
(Variante)

## Observações

1. Não é possível o uso da instrução SELECT uma vez que o retorno NULO indica que foi executado com sucesso
2. Deve ser executado apenas um comando na função.

## Exemplo

1. Assumindo como 1° Parâmetro : INSERT INTO EMPRESA (CODIGO, DESCRICAO) VALUES (1,"Softwell"), 2° e 3° parâmetro NULO, o retorno será NULO caso o comando seja executado com sucesso, ou variante caso ocorra algum erro durante a execução da instrução SQL.
2. Assumindo os valores como:
1° Parâmetro: INSERT INTO EMPRESA (CODIGO, DESCRICAO) VALUES (?, ?).
2° Parâmetro: (Null) - *Conexão Principal.
3° Parâmetro: Lista com os valores 1 e "Softwell".
