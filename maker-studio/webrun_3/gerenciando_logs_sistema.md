---
title: "Gerenciando Logs no Sistema"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/gerenciando_logs_sistema.htm"
---

Este recurso, por meio do qual se podem visualizar todas as tarefas de inclusão, exclusão ou alteração de dados nas telas do sistema, está habilitado para usuários com permissão de administrador.

Para acessar este recurso, siga os passos:

1. [Acesse o Webrun](acessando_webrun).
2. [Acesse um sistema com privilégios de administrador](acessando_sistema_webrun).
3. Execute um clique no botão ![image514.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image514.png) Log. Será exibida a seguinte tela:

![image257.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image257.png)

A tela é composta pelos seguintes componentes de controle de busca:

1. O conteúdo da lista pode ser configurado para ![image554.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image554.gif) (restringe o conteúdo da lista apenas ao registro selecionado na lista Log deste Registro) ou ![image555.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image555.gif) (tudo que foi alterado no sistema).
2. Campo Formulário - permite filtrar o conteúdo da lista Log deste Registro com as edições ao formulário selecionado no campo.
3. Campo Status - permite selecionar entre as opções Inclusão, Alteração ou Exclusão, filtrando o conteúdo na lista Log deste Registro.
4. Campo Usuário - filtra o conteúdo na lista Log deste Registro pelo nome do usuário indicado no campo;
5. Em Campo - esta opção só funcionará caso indique um Formulário.
6. Em Valor - esta opção só funcionará se indicar um Campo anteriormente.
7. Botão ![image556.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image556.gif) - executa a pesquisa de acordo com os parâmetros indicados nas opções anteriores.

O lado direito da tela exibirá o resultado da pesquisa, mostrando os registros do log (data, hora, tipo e usuário) e abaixo o conteúdo anterior e atual.

Observações:

1. Para o Webrun o [SubForm](../maker_3/formulario/componentes/subformulario) e o [Form](../maker_3/formulario/definicao_de_formulario) são tratados como um só, por isso não é exibido no log em forma de árvore como acontece com a grade, que no caso é tratada como elemento diferente.
2. Alterações efetuadas no componente [Lista Dupla](../maker_3/formulario/componentes/lista_dupla) não são registradas em Log.
