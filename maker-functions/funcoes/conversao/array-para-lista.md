---
title: "Array para Lista"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=8"
---

**Categoria:** [Conversão](../../categorias/conversao)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Transforma um conjunto de elementos que não podem ser manipulados pelas funções da categoria lista em um conjunto de elementos que podem ser manipulados por essas funções.

Parâmetro:
1. Array (Vetor). (Variante)

## Retorno

Objeto lista com os elementos contidos no array. (Variante)

## Exemplo

Ao obter uma imagem de um banco de dados e utilizar a função "Para Byte", da categoria conversão, ela vem como um array (Vetor) de bytes que não podem ser acessados utilizando as funções da categoria lista, logo é necessária essa conversão para que esse elementos possam ser manipulados.
