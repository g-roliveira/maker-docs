---
title: "Armazenamento Local - Obter Variável"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Obtém o valor de uma variável do armazenamento local.

O armazenamento local é um tipo de armazenamento do navegador do usuário, onde são armazenados os dados dos websites. Esse armazenamento é separado por domínio/subdomínio, ou seja, poderá ser compartilhado entre todos os sistemas e Webrun que estão rodando no mesmo domínio.

Para saber mais acesse: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage

## Parâmetros

1. Nome da Variável. (Letras)

## Retorno

Valor da variável especificada. (Letras)

## Observações

1. Se a variável não existir, a função irá retornar NULO.
2. O valor da variável sempre é do tipo Letras.
