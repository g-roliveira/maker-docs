---
title: "Autenticando via SMS com o Firebase"
source_url: "https://manual.softwell.com.br/docs/maker-mobile/como_fazer/autenticacao_via_sms"
---

Antes de começar, esteja com todas as configurações do [Firebase configuradas](../../dicas-e-truques/diversos/arquivo_firebase).

- No console do Firebase, vá ao menu Authentication:

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms01-7878139971df5a906b800e939eed242d.png)
- Na página aberta, clique na opção de menu "Método de login", no topo da página:

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms02-032da39385615be9407d305814dfa560.png)
- Ative a opção Smartphone dos provedores de Login:

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms03-d329b505bd214a725fec5485b69ff0da.png)
- Utilize a função **SMS - Obter código para validação** no Maker Mobile.

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms04-250685fe8729f8515c1477826a685b69.png)
- Neste exemplo abaixo, passamos como parâmetro o número que receberá o SMS.

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms1-4a251d30619af1f71486f6d55ccb0c00.png)
- Ao executar a função, será aberto uma caixa de diálogo solicitando ao usuário o código enviado via SMS ao número informado:

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms2-5fc79a103b0b837c97ed86044f519790.png) ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms3-d817c82e5624aed14be7fdd30dee4375.png)
- Caso o código seja válido, o fluxo de sucesso será executado:

  ![Imagem do manual](https://manual.softwell.com.br/assets/images/sms4-1300beb4fe40ae29ab8b0b5c690c20fd.png)
