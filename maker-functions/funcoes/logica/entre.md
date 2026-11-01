---
title: "Entre"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função verifica se o valor passado no 1º parâmetro está contido no intervalo que é delimitado pelo 2º e 3º parâmetros. A depender do resultado, retorna verdadeiro ou falso.

## Parâmetro(s)

1. Valor a ser verificado. (Variante)
2. Menor valor do intervalo. (Variante)
3. Maior valor do intervalo. (Variante)

## Retorno

Retorna verdadeiro se o valor verificado estiver no intervalo, caso contrário o retorno será falso. (Lógico)

## Exemplos

1. Assumindo que o valor do 1º parâmetro seja 50, o do 2º parâmetro 10 e o valor do 3º parâmetro 100 o retorno será verdadeiro, pois 50 está entre 10 e 100.
2. Assumindo que o valor do 1º parâmetro seja 5, o do 2º parâmetro 35 e o valor do 3º parâmetro 70 o retorno será falso, pois 5 não está entre 35 e 70.
