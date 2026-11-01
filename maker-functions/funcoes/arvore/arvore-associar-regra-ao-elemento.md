---
title: "Árvore - Associar Regra ao Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=27"
---

**Categoria:** [Árvore](../../categorias/arvore)

**Compatibilidade:** Cliente

## Descrição

Associa uma regra ao clicar no elemento passado por parâmetro.

## Parâmetro(s)

1. Árvore. (Variante)
2. Elemento. (Variante)
3. Nome da regra que será associada. (Letras)
4. Lista de parâmetros que serão enviados para a regra. (Variante)

## Retorno

Não possui.

## Observações

1. Os parâmetros deverão ser passados por uma lista de valores.
2. Essa função só pode chamar regras clientes.

## Exemplo

Supondo que a regra "Imprimir" mostra na tela a soma dos números passados por parâmetro e assumindo os
parâmetros como Árvore, Elemento, "Imprimir", [5,6], será mostrado na tela o valor 11.
