---
title: "De binário para base 64"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Converte um conteúdo binário para base 64.

## Parâmetro(s)

1. Tabela retornada da consulta ao banco.
2. Campo da tabela.

## Retorno

Conteúdo convertido para base 64. (Letras)

## Observação

A Base 64 é usada para codificar dados. As especificações completas deste tipo de Base64 são dadas pelas RFC 1421 e RFC 2045. (RFC - Request for Comments é um documento que descreve os padrões de cada protocolo da internet previamente a serem considerados como um padrão).

## Exemplo

Assumindo como parâmetros a tabela "Consulta Pessoa" que armazena o resultado de uma consulta SQL na tabela de pessoas e o campo "Foto" que possui a foto da pessoa, o retorno será o conteúdo binário do campo foto convertido para Base64.
