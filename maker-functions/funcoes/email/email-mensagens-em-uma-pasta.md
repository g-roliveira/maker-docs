---
title: "Email - Mensagens em uma pasta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Retorna uma lista com todas as mensagens contidas em uma pasta do repositório de emails.

Parâmetro:
1. Pasta do repositório de emails. (Variante) (Ver observação 1)

## Retorno

Lista de mensagens contidas na pasta do repositório de emails. (Variante)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Obter pasta do repositório de emails".
2. Para manipular o retorno desta função é necessário o uso das funções de Lista.

## Exemplo

Assumindo como parâmetro o retorno da função "Email - Obter pasta do repositório de emails", o retorno
será uma lista com as mensagens contidas na pasta.
