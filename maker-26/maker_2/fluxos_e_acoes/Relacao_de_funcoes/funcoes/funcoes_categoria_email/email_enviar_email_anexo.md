---
title: "Email - Enviar Email - Anexo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_email/email_enviar_email_anexo.htm"
---

Descrição:

Envia um e-mail para os destinatários passados como parâmetro com anexo.

Parâmetros:

1. Sessão atual (Ver observação 1)

2. Remetente

3. Destinatários (Ver observação 2)

4. Assunto

5. Corpo da mensagem (Ver observação 3)

![image1311.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1311.gif)

Retorno:

Não possui.

Obrservações:

1. A sessão passada como parâmetro é criada com a função "Email - Repositório de emails" com o protocolo SMTP.

2. Os destinatários podem ser passados separados por "," e são enviados como "TO". Para enviar destinatários "CC" e "BCC" é necessário passar como parâmetro o retorno da função "Email - Criar lista de destinatários".

3. Se o parâmetro passado for um texto, a mensagem vai como texto. Para enviar html ou anexar arquivos é necessário passar como parâmetro o retorno da função "Email - Criar corpo da mensagem".

Nome Real:

ebfSMTPSendMail

Compatibilidade:

Servidor
