---
title: "Menor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Todas as camadas

## Descrição

Essa função verifica se o valor do 1º parâmetro é menor que o valor do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso.
Se os valores dos parâmetros forem iguais o retorno será falso, pois o mesmo valor não é menor que ele mesmo.

## Parâmetro(s)

1. Valor a ser verificado. (Variante)
2. Valor a ser verificado. (Variante)

## Retorno

Retorna verdadeiro se o valor do 1º parâmetro for menor que o valor do 2º parâmetro, caso contrário o retorno será falso. (Lógico)

## Observação

Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são
numéricos, será necessário converter os valores para número (inteiro ou fracionário) ao passar os parâmetros para a
função (mesmo se as variáveis utilizadas já forem numéricas).

## Exemplos

1. Assumindo o valor do 1º parâmetro sendo 26 e o 2º parâmetro sendo 12 o valor de retorno será falso, pois 26 não é menor que 12.
2. Assumindo o valor do 1º parâmetro sendo 5 e o 2º parâmetro sendo 87 o valor de retorno será verdadeiro, pois 5 é menor que 87.
