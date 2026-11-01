---
title: "Email - Corpo da Mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Obtém o corpo da mensagem passada por parâmetro.

Parâmetro:
1. Mensagem. (Variante) (Ver observação 1)

## Retorno

Corpo da mensagem. (Letras)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Mensagens em uma pasta".
2. Caso o corpo da mensagem esteja formatado, o retorno terá tags HTML.
3. Caso o email contenha anexo, o mesmo será desconsiderado.

## Exemplo

Assumindo como parâmetro a mensagem(id) "&lt;27117501.441199967041995.JavaMail.SYSTEM@APOLO&gt;",
que tem como corpo "Qualquer dúvida entre em contato com o suporte", o retorno será "Qualquer dúvida entre
em contato com o suporte".
