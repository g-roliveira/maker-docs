---
title: "Substituir Elemento da Lista"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=13"
---

**Categoria:** [Lista](../../categorias/lista)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função busca um elemento, a partir da sua posição na lista e o substitui por um novo elemento.

## Parâmetro(s)

1. Objeto Lista. (Variante)
2. Posição do elemento na lista que será substituído. (Inteiro)
3. Novo elemento. (Variante)

## Retorno

Elemento substituído. (Variante)

## Exemplos

1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: &#123;a, t, c, h&#125;, o 2º parâmetro seja 1 e o 3º parâmetro "k". O retorno será a lista atualizada com os seguintes elementos: &#123;k, t, c, h&#125;, pois o elemento que está na posição 1 da lista é o "a".
2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: &#123;95, 35, 02, 806&#125;, o 2º parâmetro seja 3 e o 3º parâmetro "357". O retorno será a lista atualizada com os seguintes elementos: &#123;95, 35, 357, 806&#125;, pois o elemento que está na posição 3 da lista é o "02".
