---
title: "Obter Parâmetro da Requisição"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém um parâmetro da requisição.

Parâmetro:
1. Nome do parâmetro na requisição.
2. Contexto (Observação 2)

## Retorno

Retorna o valor do parâmetro definido na requisição ou Nulo caso o mesmo não exista. (Letras)

## Observação

1. Esta função deve ser utilizada no evento "Ao Entrar" do Formulário.
2. Contexto a ser verificado o parâmetro. Somente para a camada cliente.

## Exemplo

Utilizando a função no evento "Ao Entrar" de um formulário, passando o primeiro parâmetro como formID, ela retornará o próprio valor de formID.
