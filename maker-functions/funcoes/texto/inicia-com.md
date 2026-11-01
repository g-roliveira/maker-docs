---
title: "Inicia com?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Verifica se o conteúdo do primeiro parâmetro inicia com o conteúdo do 2° parâmetro.

## Parâmetro(s)

1. Texto onde será feita a pesquisa. (Letras)
2. Valor inicial do texto. (Letras)

## Retorno

"Verdadeiro" se o texto do 1º parâmetro iniciar com o valor informado no 2º parâmetro, caso contrário, retornará "Falso". (Lógico)

## Observação

Ao informar o 2º parâmetro como "" (vazio), o retorno será "Verdadeiro".

## Exemplos

1. Assumindo os parâmetros como "Maker Flow" (Letras) e "Ma" (Letras), o retorno será "Verdadeiro".
2. Assumindo os parâmetros como "Maker Flow" (Letras) e "Flow" (Letras), o retorno será "Falso".
