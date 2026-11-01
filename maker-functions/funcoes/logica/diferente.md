---
title: "Diferente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função verifica se o 1º parâmetro é diferente do 2º parâmetro.

## Parâmetro(s)

1. Primeiro valor. (Variante)
2. Segundo valor. (Variante)

## Retorno

Retorna verdadeiro se o 1º parâmetro for diferente do 2º parâmetro, caso contrário retorna falso. (Lógico)

## Observações

1. Essa função diferencia letras maiúsculas e minúsculas.
2. Devido a tipagem dinâmica das variáveis na camada cliente a função em questão considera que os parâmetros criados como numéricos
necessita que seus valores sejam convertidos para inteiro ou fracionado, através do uso das funções "Para Inteiro" e "Para Fracionado".

## Exemplos

1. Assumindo os parâmetros como 10 (inteiro) e 2 (Inteiro), o retorno será verdadeiro.
2. Assumindo os parâmetros como A (letra) e A (letra), o retorno falso.
