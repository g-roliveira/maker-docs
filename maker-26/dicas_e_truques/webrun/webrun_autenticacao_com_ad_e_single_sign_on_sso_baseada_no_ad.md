---
title: "Webrun - Autenticação com AD e Single Sign On (SSO) baseada no AD"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/webrun/webrun_autenticacao_com_ad_e_single_sign_on_sso_baseada_no_ad.htm"
---

Esta nova implementação permite ao Webrun uma autenticação integrada com o Active Directory, ou seja, ao acessar o endereço do sistema no navegador, será feito um login automático com o usuário logado atualmente no AD. Esta implementação é suportada nativamente pelo navegador Internet Explorer, para o Mozilla Firefox é necessária uma configuração adicional:

Digite about:config na barra de endereço do navegador e defina os seguintes parâmetros:

- network.ntlm.send-lm-response: true
- network.automatic-ntlm-auth.trusted-uris: endereço que terá autenticação integrada (Ex: http://127.0.0.1).

![image1484.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1484.jpg)

Após esta modificação é necessário reiniciar o Firefox.

Para que o usuário de rede seja automaticamente reconhecido pelo Webrun, é necessário que no cadastro do usuário, o login seja cadastrado no formato &lt;domínio&gt;\&lt;login&gt;. Por exemplo: AD\marcos

![image1485.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1485.jpg)

Feito isso, o sistema tentará autenticar no domínio especificado para validar a entrada no sistema.

Além disso, é necessário efetuar a criação de um parâmetro avançado no sistema: AutenticacaoIntegrada=true.

![image1486.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1486.jpg)

Enquanto este parâmetro estiver definido como true, a autenticação integrada estará ativa. Após efetuados estes passos, basta reiniciar o sistema e acessá-lo para verificar a funcionalidade em ação.

Observações:

- Fazendo isso, a senha cadastrada no sistema será sempre ignorada e repassada para o domínio validar.
- Ao usar esse mecanismo de autenticação, a funcionalidade de alterar senha será desativada.
- Esta funcionalidade está disponível a partir da versão 2.6.1.4 do Webrun.
