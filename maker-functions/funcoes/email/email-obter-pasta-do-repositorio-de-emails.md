---
title: "Email - Obter pasta do repositório de emails"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Obtém uma pasta do repositório de emails passado como parâmetro.

## Parâmetro(s)

1. Repositório de emails. (Variante) (Ver observação 1)
2. Nome da pasta. (Letras)

## Retorno

Pasta do repositório de emails. (Variante)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Repositório de emails".
2. A pasta é aberta automaticamente.

## Exemplo

Assumindo como 1º parâmetro o repositório de email "imaps://seuemail%40gmail.com@imap.gmail.com:993" e
como 2º parâmetro a pasta "INBOX", o retorno será a pasta "INBOX" do repositório de emails.
