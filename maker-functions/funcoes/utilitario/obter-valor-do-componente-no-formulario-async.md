---
title: "Obter Valor do Componente no Formulário - Async"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Obtém o valor de um componente em outro formulário de forma assíncrona, executando o fluxo de callback após a sua execução.

## Parâmetro(s)

1. Constante formulário ou GUID.
2. Componente.
3. Fluxo de Callback.
4. Lista de Parâmetros (Variante, Opcional)

## Retorno

Não possui.

## Observações

1. Para que essa função funcione da forma esperada, o formulário informado no primeiro parâmetro precisa estar aberto.
2. O fluxo definido como callback receberá automaticamente no primeiro parâmetro o valor do componente.
