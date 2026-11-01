---
title: "Executar Fluxo no Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Executa uma regra em um determinado formulário passado como parâmetro.

## Parâmetro(s)

1. Constante formulário ou GUID. (Formulário)
2. Fluxo. (Fluxo)
3. Lista de Parâmetros. (Variante, Opcional)
4. Fluxo de Callback. (Fluxo, Opcional) (Ver observação 1)
5. Lista de Parâmetros. (Variante, Opcional)

## Retorno

Não possui.

## Observações

1. O fluxo de callback receberá automaticamente o valor de retorno do fluxo executado, caso o mesmo retorne.
2. Essa função não executa um fluxo no formulário corrente.
