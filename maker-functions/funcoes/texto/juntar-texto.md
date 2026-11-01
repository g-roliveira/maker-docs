---
title: "Juntar Texto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=3"
---

**Categoria:** [Texto](../../categorias/texto)

**Compatibilidade:** Cliente, Servidor

## Descrição

Transforma uma lista (conjunto de valores) em um texto separando cada elemento com um delimitador (separador)
especificado no 2º parâmetro.

## Parâmetro(s)

1. Objeto Lista. (Variante)
2. Separador entre os elementos da lista. (Letras)

## Retorno

Retorna os elementos da lista passada (1° parâmetro) separados pelo conteúdo do 2º parâmetro (Letras).

## Exemplos

1. Assumindo os parâmetros como uma lista com 2 elementos ("Maker" e "Flow" ) e "|"(Letras), o retorno seria "Maker|Flow" (Letras).
2. Assumindo os parâmetros como uma lista com 3 elementos ("ABC" ,"DEF" e "GHI") e nulo (Letras) no segundo parâmetro,
o retorno seria "ABCDEFGHI" (Letras).
