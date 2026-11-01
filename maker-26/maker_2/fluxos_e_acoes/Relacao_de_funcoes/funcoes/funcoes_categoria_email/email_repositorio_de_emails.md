---
title: "Email - Repositório de emails"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_email/email_repositorio_de_emails.htm"
---

Descrição:

Obtém o repositório de email para a manipulação de e-mails

Parâmetros:

1. Servidor de e-mail

2. Porta do servidor de e-mail

3. Protocolo utilizado

            1- IMAP

            2- POP3

4. SSL

5. Usuário

6. Senha

![image1324.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1324.gif)

Retorno:

Repositório de emails

Observações:

1. Os valores aceitos para o protocolo utilizado é 1(IMAP) ou 2(POP3).

2. O repositório é aberto automaticamente, com necessidade apenas de ser fechado após o uso.

Exemplos:

1º Parâmetro:"imap.gmail.com"

2º Parâmetro:"993"

3º Parâmetro:1

4º Parâmetro:Verdadeiro

5º Parâmetro:"usuário"

6º Parâmetro:"senha"

Retorno: Repositório de emails

Nome Real:

ebfEmailGetStore

Compatibilidade:

Servidor
