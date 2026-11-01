---
title: "Carregando múltiplos sistemas no Webrun"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/webrun/carregando_multiplos_sistemas_webrun.htm"
---

É possível acessar sistemas idênticos contidos em bases de dados diferentes a partir de um único apontador (arquivo *.wfre), por meio da tela de login de sistemas no Webrun.

Siga os passos:

1. Para isso, será necessário instanciar o *.wfre de um sistema apontado como principal. Para os demais projetos, defina o mesmo nome de instância:

![image1375.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1375.jpg)

2. Deve ser criada uma pasta com o mesmo nome do *.wfre que representa o sistema principal dentro da pasta de sistemas (normalmente, systems):

![image354.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image354.jpg)

3. Em seguida, dentro da pasta criada, deve ser criada uma outra pasta chamada DataConnections:

![image355.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image355.jpg)

4. Dentro desta última pasta citada, insira os *.wfre que representam os sistemas, sendo que o wfre principal deverá permanecer na pasta systems.

![image356.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image356.jpg)

5. Agora, reinicie o serviço do Webrun.
6. Na tela Sistemas, localize o projeto que deseja acessar:

![image1467.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1467.jpg)

Observações:

1. Caso existam objetos externos no sistema, os objetos acessados serão sempre do sistema principal.
2. Quando utilizamos  este recurso, a opção de "Modo Projeto" não fica acessível para os usuários mesmo se o sistema estiver em desenvolvimento.
3. Esta funcionalidade só irá funcionar com o template Multiplo.
4. Este Procedimento não é feito com apenas um projeto. Para conseguir realizar, além de ter um projeto já criado você deverá criar outro projeto com um banco de dados diferente, realizando um backup do projeto principal, não é importando os dados no maker e sim realizando o backup no banco de dados principal, ex: PostgreSQL, MS SQL Server, Firebird ...., os parametros da criação do novo banco tem que está do mesmo modo que o banco do projeto principal e realizando a restauração do backup no banco de dados criado.
