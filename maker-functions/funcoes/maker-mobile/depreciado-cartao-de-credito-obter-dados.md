---
title: "[DEPRECIADO] Cartão de Crédito - Obter Dados"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

----- ESSA FUNÇÃO VAI SER REMOVIDA DA API EM BREVE -----

Essa função escaneia o número do cartão de crédito e retorna todos dados do cartão de crédito.

## Parâmetro(s)

1. Fluxo de sucesso. (Fluxo)
2. Lista de parâmetros adicionais para o fluxo de sucesso. (Variante)
3. Fluxo de erro. (Fluxo)
4. Lista de parâmetros adicionais para o fluxo de erro. (Variante)

## Retorno

Não possui.

## Observação

O fluxo passado no primeiro parâmetro receberá como primeiro parâmetro um JSON com as seguintes chaves:
"number": Número completo do cartão (Ex: 1234567812345678);
"numberMask": Número do cartão formatado, mostrando apenas os quatro últimos dígitos (Ex:    5678);
"name": Nome descrito no cartão (Ex: Laura M Farias);
"expiryDate": Data de expiração do cartão em mês/ano (Ex: 01/28);
"cvv": Código verificador do cartão (Ex: 123).
