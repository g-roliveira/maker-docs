---
title: "Email - Pasta existente no repositório de emails?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Recebe ´por parâmetro uma pasta e verifica se ela existe no repositório de emails.

Parâmetro:
1. Pasta do repositório de emails. (Variante) (Ver observação 1)

## Retorno

Retorna "True" se a pasta existe, caso contrário retorna "False". (Lógico)

## Observação

O 1º Parâmetro é o retorno da função "Email - Obter pasta do repositório de emails".

## Exemplo

Assumindo como parâmetro a pasta "INBOX" e que a mesma exista no repositório de emails, o retorno será o
valor lógico "True".
