---
title: "Carregando múltiplos sistemas no Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/webrun/carregando_multiplos_sistemas_webrun.htm"
---

É possível acessar sistemas idênticos contidos em bases de dados diferentes a partir de um único apontador (arquivo *.wfre), por meio da tela de login de sistemas no Webrun.

Siga os passos:

1. Para isso, será necessário instanciar o *.wfre de um sistema apontado como principal. Para os demais projetos, defina o mesmo nome de instância:

![image1375.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1375.jpg)

2. Deve ser criada uma pasta com o mesmo nome do *.wfre que representa o sistema principal dentro da pasta de sistemas (normalmente, systems):

![image354.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image354.jpg)

3. Em seguida, dentro da pasta criada, deve ser criada uma outra pasta chamada DataConnections:

![image355.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image355.jpg)

4. Dentro desta última pasta citada, insira os *.wfre que representam os sistemas, inclusive o principal:

![image356.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image356.jpg)

5. Agora, reinicie o serviço do Webrun.
6. Na tela Sistemas, localize o projeto que deseja acessar:

![image1467.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1467.jpg)

Observações:

1. Caso existam objetos externos no sistema, os objetos acessados serão sempre do sistema principal.
2. Quando utilizamos  este recurso, a opção de "Modo Projeto" não fica acessível para os usuários mesmo se o sistema estiver em desenvolvimento.
