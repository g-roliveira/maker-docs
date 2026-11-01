---
title: "Email - Enviar Email com Anexo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_email/email_enviar_email_com_anexo.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Envia uma mensagem instantaneamente para os destinatários.

Parâmetros:

1. Servidor

2. Porta

3. Autenticação SSL ?

4. Usuário

5. Senha

6. Remetente

7. Destinatários (Ver Observação 1)

8. Assunto

9. Mensagem

10. HTML?

11. Lista de anexos (Ver Observação 2)

![image1297.jpg](../../_assets/image1297.jpg)

Observações:

1. Os destinatários podem ser passados separados por "," e serão enviados como "TO". Se for necessário enviar email como "TO", "CC" e/ou "BCC", é necessário utilizar a função "Email - Criar lista de destinatários".

2. Para passar apenas um anexo, é possível passar apenas o caminho do arquivo. Se for preciso passar vários anexos, é necessário passar uma lista de caminhos dos arquivos.

3. Caso o 10º parâmetro seja Verdadeiro, a mensagem será renderizada como HTML, obedecendo a todas as regras da linguagem.

Nome Real:

ebfSMTPSendAuthenticatedAttachEmail

Compatibilidade:

Servidor
