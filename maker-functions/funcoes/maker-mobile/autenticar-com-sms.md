---
title: "Autenticar com SMS"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Envia uma mensagem para o servidor Firebase solicitando um código de validação. A mensagem com o código será enviada para o número informado no primeiro parâmetro.
Uma caixa/input será criada para que o usuário informe o código. Caso esteja correto, será executado o fluxo de sucesso, caso contrário, o fluxo de erro será executado.

## Parâmetro(s)

1. Número de Telefone.
2. Fluxo que será executado caso a operação seja realizado com sucesso.
3. Parâmetros adicionais do fluxo de sucesso. (Variante)
4. Fluxo que será executado caso haja algum erro durante a operação.
5. Parâmetros adicionais do fluxo de erro. (Variante)

## Retorno

Não possui.

## Observações

1. Antes de utilizar essa função, é necessário configurar o projeto no Firebase conforme instruções nos links:
"https://manual.softwell.com.br/#/autenticacao_via_sms?id=autenticando-via-sms-com-o-firebase",
"https://manual.softwell.com.br/#/arquivo_firebase".
2. O 1° parâmetro deve estar no formato: + CÓDIGO DO PAÍS + DDD + Nº do Telefone. Exemplo: +557121083800.
