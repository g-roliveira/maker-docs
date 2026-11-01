---
title: "Autenticando via SMS com o Firebase"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/makermobile/autenticacao_via_sms.html"
---

Antes de começar, esteja com todas as configurações do [Firebase configuradas](arquivo_firebase).

- No console do Firebase, vá ao menu Authentication:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/sms01.png)
- Na página aberta, clique na opção de menu "Método de login", no topo da página:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/sms02.png)
- Ative a opção Smartphone dos provedores de Login:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/sms03.png)
- Utilize a função **SMS - Obter código para validação** no Maker Mobile.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/firebase/sms04.png)
- Neste exemplo abaixo, passamos como parâmetro o número que receberá o SMS.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sms1.png)
- Ao executar a função, será aberto uma caixa de diálogo solicitando ao usuário o código enviado via SMS ao número informado:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sms2.png)
  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sms3.png)
- Caso o código seja válido, o fluxo de sucesso será executado:

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sms4.png)
