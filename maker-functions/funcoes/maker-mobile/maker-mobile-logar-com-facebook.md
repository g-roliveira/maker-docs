---
title: "Maker Mobile - Logar com Facebook"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Solicita autorização para logar com o Facebook do usuário.

## Parâmetro(s)

1. Fluxo de sucesso.
2. Parâmetros extras para o fluxo de sucesso. (Variante)
3. Fluxo de erro.
4. Parâmetros extras para o fluxo de erro. (Variante)
5. Lista de parâmetros de permissões para o Facebook. (Variante)

## Retorno

Não possui.

## Observações

1. É necessário definir o ID da aplicação do Facebook na propriedade "Avançado" da área de trabalho do projeto, com a descrição FacebookID.
2. O fluxo de sucesso deverá conter um parâmetro do tipo variante, onde receberá um JSON com as informações solicitadas no parâmetro 5.
2. 1. As permissões podem ser encontradas no seguinte link: https://developers.facebook.com/docs/facebook-login/permissions
3. É necessário definir a seguinte Hash chave nas definições do seu projeto Android: 0WIQzU0HT5kEuWsgE7jqZDZDQOU=
