---
title: "Obter Valor dos Parâmetos da Consulta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função retorna uma lista com todos os valores dos parâmetros da consulta SQL informada no parâmetro.

Parâmetro:
1. Consulta SQL. (Variante)

## Retorno

Lista contendo os valores dos parâmetros da consulta. (Variante)

## Exemplo

Assumindo como parâmetro a seguinte consulta SQL:
"SELECT
VER_DESCRICAO,
VER_VERSAO
FROM FR_VERSAO
WHERE
VER_CODIGO = :codigo
AND
VER_TIPO = :tipo"

O retorno será uma lista contendo os valores dos parâmetros "codigo" e "tipo".
