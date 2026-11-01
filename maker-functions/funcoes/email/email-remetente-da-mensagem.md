---
title: "Email - Remetente da mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Obtém o remetente da mensagem passada como parâmetro.

Parâmetro:
1. Mensagem. (Variante) (Ver observação 1) (Função: Email - Mensagens em uma pasta)

## Retorno

Remetente da mensagem. (Letras)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. Para obter sempre somente o email do remetente, utilize a função "Email - Email do remetente da mensagem".

## Exemplo

1. Assumindo como parâmetro a mensagem(id) "&lt;27117501.441199967041995.JavaMail.SYSTEM@APOLO&gt;",
que tem como email do remetente "suportesoftwell@softwell.com.br" e nome "Suporte Softwell", o retorno será
"Suporte Softwell" ou o próprio email "suportesoftwell@softwell.com.br".
