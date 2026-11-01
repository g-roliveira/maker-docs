---
title: "Email - Destinatários da mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Retorna uma lista de destinatários da mensagem passada por parâmetro.

Parâmetro:
1. Mensagem. (Variante) (Ver observação 1)

## Retorno

Lista de destinatários. (Variante)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. Para manipular o retorno desta mensagem é necessário o uso das funções de Lista.

## Exemplo

Assumindo como parâmetro a mensagem(id) "&lt;27117501.441199967041995.JavaMail.SYSTEM@APOLO&gt;",
que tem como destinatários "[Suporte@softwell.com.br,comercial@softwell.com.br", o retorno será "
[Suporte@softwell.com.br,comercial@softwell.com.br".
