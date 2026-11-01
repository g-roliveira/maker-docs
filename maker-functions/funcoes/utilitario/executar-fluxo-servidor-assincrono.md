---
title: "Executar Fluxo Servidor Assíncrono"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

Essa função executa uma regra servidor de forma assíncrona.

## Parâmetro(s)

1. Regra a ser executada.
2. Lista de parâmetros da regra. (Variante)
3. Fluxo de sucesso.
4. Lista de parâmetros do fluxo de sucesso. (Variante)
5. Fluxo de erro.
6. Lista de parâmetro do fluxo de erro. (Variante)

## Retorno

Não possui.

## Observações

1. O fluxo definido no terceiro parâmetro receberá automaticamente como parâmetro o retorno da regra executada caso
a mesma retorne. O primeiro parâmetro da regra deve ser reservado.
2. O fluxo definido no quinto parâmetro receberá automaticamente como parâmetro o detalhes do erro. O primeiro parâmetro da regra deve ser reservado.
