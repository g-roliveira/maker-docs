---
title: "Erros & Soluções - Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/erros/maker/erros_solucoes_maker.htm"
---

A softwell solutions busca através deste guia, apresentar ao usuário uma lista de erros mais comuns no Maker e sua solução. Este tópico estará em constante atualização.

- ## Bloqueio por acesso simultâneo

  ![image1767.jpg](../../assets/images/legacy/image1767.jpg)

  O nome do usuário logado será demonstrado no campo Usuário conectado.

  1. Desabilitação de todos os itens do submenu Controle de Acesso do menu Projeto na versão Standard Edition.
  2. O usuário com perfil de Administrador ou Gerente pode executar qualquer ação em formulário bloqueado por qualquer usuário, e somente o Administrador poderá desbloquear qualquer restrição criada pelo usuário.
  3. Login de acesso automático a projetos desenvolvidos pela versão Standard Edition;
  4. Caso o usuário esteja utilizando o Maker no Sistema Operacional Windows Vista e for o administrador da máquina, recomenda-se que abra o executável do Maker com clique direito do mouse e escolha Executar como administrador.
  5. Quando um usuário é promovido do status de usuário comum, ícones que deveriam aparecer após a promoção não aparecem. Para resolver o problema, basta reiniciar o Tomcat. Após reiniciar, alguns ícones poderão ser exibidos sobrepostos, portanto será necessário teclar "F4" para reorganizar os ícones.
- ## Não foi possível excluir o sistema

  ![image1768.jpg](../../assets/images/legacy/image1768.jpg)

  Causa: Para a exclusão de um projeto, é pré-requisito ter excluído anteriormente todos os seus menus, formulários e relatórios.

  Solução: Remova todos os objetos do sistema antes de exclui-lo completamente
