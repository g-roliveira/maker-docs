---
title: "Gerenciando Usuário de um sistema no Webrun"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/gerenciando_usuario_sistema_webrun.htm"
---

Sua função principal é a configuração das permissões do usuário quanto ao acesso ao sistema em uso. Esta opção é acessível ao usuário com permissão de Administrador.

Os requisitos mínimos para cadastrar um usuário são: informar o Login do Usuário, o Nome do Usuário e os campos sinalizados por um asterisco vermelho no canto superior direito.

Após [Acessar um sistema](acessando_sistema_webrun) no Webrun, na área de trabalho, o ícone ![image513.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image513.png) Usuários permitirá gerenciar os usuários para o acesso ao sistema em uso.

Executando clique duplo sobre o ícone ![image513.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image513.png), é exibida a tela Usuários, permitindo a edição dos usuários:

![image256.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image256.jpg)

A tela Usuários possui os seguintes componentes:

- Barra de Ferramentas da Janela:
- '
  - Botão ![image548.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image548.png) - inclui um novo usuário.
  - Botão ![image549.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image549.png) - altera o registro do usuário já criado.
  - Botão ![image542.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image542.png) - acessa a tela de Log de edições da tela ou de todo o sistema. Para mais informações sobre log, acesse o tópico Gerenciando Logs no Sistema.
  - Botão ![image543.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image543.png) - permite definir valores padrão para o cadastramento de novos registros. Este item não se aplica para este cadastramento;
  - Botão ![image546.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.png) - apresenta opções comuns com as descrições de itens que poderão ser exibidos na tela:

![image805.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image805.jpg)

- Campos da tela:
- - Login - nessa caixa de texto, deve ser informada a identificação do usuário que será utilizada para acesso ao sistema;
  - Senha - informe a senha para este usuário;
  - Administrador-Geral - selecione entre Sim ou Não determinando que o usuário passa a ter ou não poder de criação, edição e exclusão de usuários, grupos de usuários e objetos para todos os sistemas;
  - Impressão Digital - campo do tipo imagem que armazenará a digital do usuário, facilitando o seu acesso ao sistema;
  - Fotografia do Usuário - campo do tipo imagem que armazenará a foto do usuário;
  - Nome do Usuário - campo obrigatório para informar o nome completo do usuário;
  - E-mail - Nesta caixa de texto, deve ser informado o e-mail do usuário para facilitar a comunicação entre usuários, desenvolvedores e administradores dos sistemas;
  - Limite de Senha - é possível delimitar o tempo de acesso do usuário ao sistema, sendo subdivido em:
  - - Nunca Expira - selecionando este item, o usuário terá acesso ilimitado às opções que forem habilitadas para ele;
    - Expira em um determinado número de dias - marcando esta opção, ficam habilitadas as caixas de texto Dias Para Expiração e Data de Referência. No primeiro, deve ser informada a quantidade de dias que será acrescida à data de referência indicada no segundo componente, delimitando, assim o período de acesso do usuário;
    - Troca de senha a cada número de dias - informados os mesmos parâmetros do item anterior, o usuário fica obrigado a alterar sua senha dentro de um determinado número de dias.
- Botão ![image553.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image553.png) - acessa a tela de [Cadastro de Grupos de Usuário](gerenciando_grupos_usuarios_sistema_webrun);
- Campos e componentes da Grade Sistemas:
- - Sistema - selecione o sistema que deseja associar ao cadastro do usuário;
  - Acessar - campo check que indica a possibilidade de acesso ao sistema em uso;
  - Administrador - campo check que estabelece que o usuário passa a ter ou não poder de criação, edição e exclusão de objetos para o sistema determinado no primeiro campo da grade;
  - Acesso Externo - determina se o usuário poderá acessar externamente o sistema;
  - Botão ![image538.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image538.png) - permite incluir um novo grupo;
  - Botão ![image539.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image539.png) - permite editar a descrição de um grupo selecionado;
  - Botão ![image540.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image540.png) - permite excluir um grupo selecionado;
  - Botão ![image541.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image541.png) - atualiza a lista de grupos.

Observações:

1. Após a criação de Grupo ou Usuário, deve-se reiniciar o sistema para que seja vigorada a configuração. Saiba como reiniciar o sistema pelo tópico Módulo de Configurações, utilizando o botão ![image547.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image547.png) (reinicia o serviço de acesso e processos do projeto selecionado).
2. O usuário cadastrado com o perfil de Administrador de projeto só poderá cadastrar usuários pertencente(s) ao(s) mesmo(s) grupo(s) e de perfil Adminstrador ou inferior. Após cadastrar o usuário, é necessário marcar a opção Acessar para que ele acesse o sistema.
3. O usuário com perfil de Administrador-Geral de todos os projetos possui acesso ilimitado aos recursos oferecidos.
4. O usuário com perfil de "Administrador" de Projeto terá as mesmas permissões do "Administrador - Geral", exceto criar usuários com perfil de "Administrador-Geral" e "Administrador" de Projeto, caso não seja administrador do mesmo projeto.
5. Usuário com perfil de somente "Acesso" ao sistema só poderá alterar sua própria senha (atalho disponível na área  de trabalho).
6. O usuário com perfil de "Administrador" do projeto, deverá definir no momento da inserção do usuário, o sistema que ele terá acesso. Caso contrário, não será mais possível visualiza-lo.
