---
title: "Autenticar com Biometria"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função realiza a autenticação do usuário utilizando o leitor biométrico do aparelho celular.

## Parâmetro(s)

1. Fluxo de sucesso que será executado.
2. Parâmetros do fluxo de sucesso. (Variante)
3. Fluxo de erro que será executado.
4. Parâmetros do fluxo de erro. (Variante)

## Retorno

Não possui.

## Observações

1. Será considerado erro e será executado o fluxo de erro caso o aparelho celular não possua leitor biométrico ou não haja pelo menos uma digital cadastrada no sistema operacional.
2. Em aparelhos que utilizam o sistema operacional IOS após várias tentativas de validação biométricas falhas irá ser exigido a senha de letras para validação.
3. Em aparelhos que utilizam o sistema operacional Android após varias tentativas falhas a validação biométrica ficará bloqueada por 90 segundos.
