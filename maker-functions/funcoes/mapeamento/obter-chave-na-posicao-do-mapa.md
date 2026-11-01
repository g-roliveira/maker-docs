---
title: "Obter Chave na Posição do Mapa"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=18"
---

**Categoria:** [Mapeamento](../../categorias/mapeamento)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função retorna o valor de uma chave numa determinada posição da lista.

## Parâmetro(s)

1. Objeto Mapa. (Variante)
2. Posição a buscar a chave. (Inteiro)

## Retorno

Retorna o objeto definido na posição. (Variante)

## Observação

Caso a posição seja negativa, o primeiro será retornado, caso a posição seja maior que o tamanho do mapa, o último elemento será retornado.
