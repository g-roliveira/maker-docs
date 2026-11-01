---
title: "Email - Fechar pasta do repositório de emails"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Fecha a pasta do repositório de emails.

## Parâmetro(s)

1. Pasta do Email. (Variante) (Ver observação 1)
2. Apagar mensagens marcadas como deletadas. (Lógico)

## Observações

1. O 1º Parâmetro é o retorno da função "Email - Obter pasta do repositório de emails".
1. Mensagens não poderão ser lidas caso a pasta a qual ela pertença esteja fechada.
2. O segundo parâmetro só é válido para conexões com o protocolo POP3.

## Exemplo

Assumindo como 1º parâmetro a pasta "INBOX" e como 2º parâmetro o valor lógico "True", a pasta "INBOX"
será fechada e todas mensagens marcadas como deletadas serão apagadas.
