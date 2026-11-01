---
title: "Quebrar Texto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Separa o texto em um determinado caractere passado no 2° parâmetro e retorna cada parte deste texto em uma posição
de uma lista.

## Parâmetro(s)

1. Texto que será quebrado. (Letras)
2. Caractere. (Letras)

## Retorno

Lista com o texto separado. (Variante)

## Observação

A função "Quebrar Texto", sempre vai considerar o último caracter, ou seja, caso você passe o seguinte texto:
"teste1,teste2,teste3,"
o retorno vai ser:
[teste1, teste2, teste3, ]

## Exemplo

Assumindo os parâmetros como "M,A,K,E,R,F,L,O,W" (Letras), e "," (Letras), o retorno será uma lista com 09 elementos
contendo "M"|"A"|"K"|"E"|"R"|"F"|"L"|"O"|"W" respectivamente.
