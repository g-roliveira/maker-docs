---
title: "Email - Data da mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Obtém a data da mensagem passada por parâmetro.

Parâmetro:
1. Mensagem. (Variante) (Ver observação 1)

## Retorno

Data da mensagem. (Letras)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. O retorno é do tipo Letras e precisa ser tratado antes de ser convertido para Data, pois é retornado com
informações adicionais além da data), como detalhado no exemplo.

## Exemplos

Assumindo como parâmetro a mensagem(id) "&lt;27117501.441199967041995.JavaMail.SYSTEM@APOLO&gt;",
que tem como data definida "Fri, 24 Feb 2012 10:36:29 -0200", o retorno será "Fri, 24 Feb 2012 10:36:29 -0200".
