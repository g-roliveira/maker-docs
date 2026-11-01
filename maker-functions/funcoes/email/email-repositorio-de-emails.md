---
title: "Email - Repositório de emails"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=32"
---

**Categoria:** [Email](../../categorias/email)

**Compatibilidade:** Servidor

## Descrição

Obtém o repositório de email para a manipulação de e-mails.

## Parâmetro(s)

1. Servidor de e-mail. (Letras)
2. Porta do servidor de e-mail. (Inteiro)
3. Protocolo utilizado. (Inteiro)
4. SSL? (Lógico)
5. Usuário. (Letras)
6. Senha. (Letras)

## Retorno

Repositório de Emails. (Variante)

## Observações

1. Os valores aceitos para o protocolo utilizado são 1(IMAP) ou 2(POP3).
2. O repositório é aberto automaticamente, com necessidade apenas de ser fechado após o uso.

## Exemplo

Assumindo que os parâmetros sejam:
1º Parâmetro:"imap.gmail.com"
2º Parâmetro:"993"
3º Parâmetro:1
4º Parâmetro:Verdadeiro
5º Parâmetro:"usuário"
6º Parâmetro:"senha"
Retorno: Repositório de emails (Variante)
