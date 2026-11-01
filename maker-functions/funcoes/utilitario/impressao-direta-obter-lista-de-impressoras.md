---
title: "Impressão Direta - Obter Lista de Impressoras"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Esta função obtém a lista de todas as impressoras disponíveis no momento.
Essa função é executada de forma assíncrona, isso quer dizer que, o resultado da função será enviado para outro fluxo
definido como Callback.

Para mais informações, acesse: https://manual.softwell.com.br/#/configuracao_impressao

## Parâmetro(s)

1. Fluxo de Callback (Fluxo que receberá a lista com todas as impressoras do sistema)
2. Lista de Parâmetros (Lista) (Lista de Parâmetros extras que o fluxo de Callback)

## Retorno

Não possui.

## Observações

1. O Fluxo informado no parâmetro receberá no primeiro parâmetro uma lista com todas as impressoras disponíveis.
