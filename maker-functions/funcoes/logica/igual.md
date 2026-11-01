---
title: "Igual"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Todas as camadas

## Descrição

Essa função verifica se os valores passados por parâmetro são iguais, ou seja, possuem o mesmo valor.

## Parâmetro(s)

1. Valor a ser verificado. (Variante)
2. Valor a ser verificado. (Variante)

## Retorno

O Retorno será verdadeiro se o valor do 1º parâmetro for igual ao valor do 2º parâmetro, caso contrário o retorno será falso. (Lógico)

## Observações

1. Essa função diferencia letras maiúsculas e minúsculas.
2. Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são
numéricos, será necessário converter os valores para número (inteiro ou fracionário) ao passar os parâmetros para a
função (mesmo se as variáveis utilizadas já forem numéricas).

## Exemplos

1. Assumindo o valor do 1º parâmetro sendo "ab" e o 2º parâmetro sendo "AB" o valor de retorno será falso, pois a função diferencia letras maiúsculas e minúsculas.
2. Assumindo o valor do 1º parâmetro sendo "80" e o 2º parâmetro sendo "80" o valor de retorno será verdadeiro, pois 80 é igual a 80.
