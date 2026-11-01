---
title: "Tornar consulta não gerenciável"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Torna consulta não gerenciável, ou seja, o Maker não a fechará automaticamente.

Parâmetro:
1. Tabela com o resultado da consulta desejada. (Tabela)

## Retorno

A consulta não gerenciada da tabela passada por parâmetro. (Tabela)

## Exemplo

Assumindo que o 1° parâmetro seja o retorno (Tabela) da função "Abrir Consulta Não Gerenciada" (pode ser outra função),
o retorno, será atribuído a uma variável do tipo tabela, que conterá a mesma consulta anterior, porém não gerenciada.
