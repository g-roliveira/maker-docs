---
title: "Grade - Encontrar Coluna"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função encontra a posição da coluna na grade.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Nome da Coluna. (Letras)

## Retorno

Retorna a posição da coluna. Se a coluna for a primeira da Grade retorna o valor 0, se for a segunda retorna 1
e assim sucessivamente. (Inteiro)

## Observações

1. A numeração das colunas começam de 0 à N.
2. Caso a coluna não seja encontrada, será retornado o valor -1.

## Exemplo

Assumindo que o nome da grade é "Lista de Produtos" e o nome da coluna sendo "Informática". Passando esses
parâmetros, será verificado em que posição a coluna "Informática" está na grade "Lista de Produtos".
