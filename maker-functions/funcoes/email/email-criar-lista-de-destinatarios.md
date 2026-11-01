---
title: "Email - Criar lista de destinatários"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Cria uma lista de destinatários para o envio de email.

## Parâmetro(s)

1. Destinatários "TO". (Letras)
2. Destinatários "CC". (Letras)
3. Destinatários "BCC". (Letras)

## Retorno

Lista de destinatários. (Letras)

## Observações

1. Os destinatários passados por parâmetros são separados por ","(Vírgula).
2. O retorno desta função é usado como parâmetro para as funções de envio de email.

## Exemplo

Assumindo como 1º parâmetro "suportesoftwell@softwell.com.br", como 2º parâmetro
"maker@softwell.com.br" e 3º parâmetro "softwell@softwell.com.br", o retorno será "[[1,
suportesoftwell@softwell.com.br], [2, maker@softwell.com.br], [3, softwell@softwell.com.br]]".
