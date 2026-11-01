---
title: "Desinstalando o Maker"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/desinstalando_maker/desinstalando_maker.htm"
---

Para desinstalar o Maker, siga os passos:

1. Acesse o Painel de Controle do Windows.
2. Ative a opção Adicionar ou remover programas.
3. Localize Maker 2.
4. Clique no botão ![image471.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image471.gif)

![image216.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image216.jpg)

5. Confirme a remoção.

O desinstalador para o serviço do Gerenciador de Aplicações Web (Apache Tomcat) desinstala, mas não irá remover os bancos do PostgreSQL 8.2.5.

Caso você venha a reinstalar o Maker, será necessário que o usuário PostgreSQL 8.2.5 seja removido antes de iniciar os procedimentos descritos no tópico [Instalação do Maker](../instalacoes/instalacao_do_maker).

Excluindo conta existente no PostgreSQL 8.2.5:

1. Acesse o Painel de Controle do Windows;
2. Clique duplo em Ferramentas Administrativas;
3. Clique duplo em Gerenciamento do computador;
4. Clique duplo em Ferramentas do Sistema;
5. Clique duplo em Usuários e grupos locais;
6. Clique em Usuários;
7. A tela ao lado mostrará todos os usuários criados. Clique com o botão direito do mouse sobre o usuário ![image472.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image472.gif);
8. Selecione a opção Excluir e confirme.

Observação: Para usuários do Windows Vista ou XP, acesse o tópico [Excluindo o usuário postgres_webrun no Windows Vista](../../dicas_e_truques/banco_de_dados/excluindo_usuario_postgres_webrun_windows_vista).
