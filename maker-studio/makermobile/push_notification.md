---
title: "Notificações Push"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/push_notification.html"
---

- Mensagens push fornecem uma maneira simples e eficaz interagir com os usuários de sua aplicação, enviando mensagens curtas e informativas com facilidade. O MakerMobile utiliza do FCM(Firebase Cloud Message) para o envio das mensagens push, portanto, esteja certo de que o  [Firebase está configurado em seu projeto](arquivo_firebase).
- Para configurar obter o ID do dispositivo para que seja possível a utilização das notificações push, siga os seguintes passos:

  - Em seu console do Firebase, abra as configurações do seu projeto:

    ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push_config_push.png)
  - Ao abrir as configurações, clique em **Cloud Messaging**:

    ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push_push_push.png)
  - Copie o código do remetente:

    ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push_cod_push.png)
- O código do remetente, obtido no procedimento realizado anteriormente, será utilizado com a função Push - Registrar Dispositivo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push_push_push_push.png)

  Observação: Esta função envia no primeiro parâmetro [Letras] do fluxo definido o Token do Dispositivo para o recebimento de push, que foi obtido ao utilizar esta função.
- A função Push - Enviar Mensagem - Firebase será a responsável pelo envio da mensagem ao usuário.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push1.png)

  A função possui como parâmetro:

  - [Variante] Lista contendo os IDS dos dispositivos
  - [Letras] API KEY fornecido pelo Firebase
  - [Letras] Título da mensagem que será enviada
  - [Letras] Mensagem que será enviada
  - [Variante] Mapa com parâmetros extras

  Retorno: a função possui como retorno o JSON retornado do Firebase.
- Posteriormente, a função Associar evento ao receber Push será a responsável pela execução do fluxo associado quando a notificação Push for recebida.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/push2.png)
- O fluxo com a função Associar evento ao receber Push deve ser adicionado como parâmetro "Ao Entrar" do Sistema ou do Formulário para que possa ter sua funcionalidade no aplicativo.

  ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/pushaoentrar.PNG)
