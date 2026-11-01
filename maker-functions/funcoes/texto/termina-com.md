---
title: "Termina com?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Verifica se o conteúdo do primeiro parâmetro termina com o conteúdo do 2° parâmetro.

## Parâmetro(s)

1. Texto onde será feita a pesquisa. (Letras)
2. Valor final do texto. (Letras)

## Retorno

"Verdadeiro" se o texto do 1º parâmetro iniciar com o valor informado no 2º parâmetro, caso contrário, retornará "Falso". (Lógico)

## Observação

Ao informar o 2º parâmetro como "" (vazio), o retorno será "Verdadeiro".

## Exemplos

1. Assumindo os parâmetros como "Maker Flow" (Letras) e "ow" (Letras) , o retorno seria Verdadeiro.
2. Assumindo os parâmetros como "Maker Flow" (Letras) e "wo" (Letras) , o retorno seria Falso.
