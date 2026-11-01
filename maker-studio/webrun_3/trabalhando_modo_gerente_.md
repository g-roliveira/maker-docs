---
title: "Trabalhando no Modo Gerente"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/trabalhando_modo_gerente_.htm"
---

Recurso utilizado por usuários administradores-gerais de sistemas para a definição de permissões de acesso (para Grupos) aos menus/submenus/itens de menu, formulários e componentes dos formulários do sistema. Para acessar o Modo Gerente, estando o usuário em:

- Modo Normal no sistema, basta a efetuação de um clique no botão Modo Gerente ![image930.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image930.png) da barra de menu;
- Modo Projeto no sistema, é necessária a efetuação de um clique no botão Modo Normal ![image931.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image931.png) e, em seguida, executar o passo explicado para o botão Modo Normal.

Para a definição de permissões a qualquer objeto, é utilizada a mesma tela, a tela Permissões de Acesso; acontece que nem sempre todas as permissões se aplicam para todos os objetos, conforme documentação abaixo.

Ao clicar sobre um menu/submenu/item de menu, então aparece a tela Permissões de Acesso, a partir da qual podem ser definidas apenas permissões para ele. Em seguida, ao clicar no botão Acessar Formulário, torna-se possível definir permissões para:

- o formulário - clicando sobre a barra de navegação dele, ou por um clique na cincunferência de cor vermelha posicionada na parte inferior direita da área dele;
- qualquer componente contido no formulário, clicando sobre o componente.

Observação: Durante a execução de ambas as possibilidades acima relacionadas, apesar de o formulário não ficar em estado modal (bloqueando o acesso a outras telas), a barra de ferramentas do *browser não fica acessível.*

![image1072.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1072.png)

*A tela é composta:*

- Na parte superior esquerda por:

- etiqueta que informa ao usuário o objeto que está sendo foco da definição de permissões;
- nome do objeto que está sendo foco da definição de permissão;
- botão Acessar Formulário: só aparece na tela quando for efetuado um clique em um item de menu, o qual tenha associado a ele um formulário ou relatório.

- Na parte superior direita, por dois botões:
- - botão Copiar: utilizado para a cópia das permissões definidas através da tela (área de transferência do sistema operacional);
  - botão Colar: utilizado para a colagem das permissões copiadas (botão Copiar) de outra tela.

- na parte central, pelas etiquetas (abaixo foram listados apenas os objetos que dão suporte à permissão):

- - Visível - permissão que impacta a possibilidade de se visualizar o objeto. Quando definida para o:

    - menu/submenu/item de menu: aplicável para este componente;
    - componente - aplicável para todos os componentes, exceto para a [Moldura](../maker_3/formulario/componentes/moldura) e para o [SubForm](../maker_3/formulario/componentes/subformulario) (é possível determinar esta permissão para os componentes do formulário associado a um componente SubForm, mas a área do componente SubForm aparecerá continuamente).
  - Habilitado - permissão que impacta na possibilidade de se manipular o objeto. Quando definida para o:
  - - componente - aplicável para todos os componentes, exceto para a [Moldura](../maker_3/formulario/componentes/moldura). Há ainda uma consideração sobre essa permissão para o componente [Lista Dinâmica](../maker_3/formulario/componentes/lista_dinamica), a qual diz respeito ao botão que aparece ao lado do componente (o botão aparece quando são configuradas as propriedades [Formulário](../maker_3/formulario/propriedades_e_eventos#form_e) e [SubFormulário](../maker_3/formulario/propriedades_e_eventos#subform_e) dele).
  - Apenas Leitura - permissão que impacta na possibilidade de se modificar o dado contido no objeto. Quando definida para o:
  - - componente: aplicável para os componentes [Caixa de Texto](../maker_3/formulario/componentes/caixa_de_texto), [Check](../maker_3/formulario/componentes/check), [Imagem](../maker_3/formulario/componentes/imagem) (mesmo que tenha sido configurada esta propriedade para este componente, é possível visualizar a imagem contida no componente pelo botão Ampliar Imagem), [Lista](../maker_3/formulario/componentes/lista), [Lista Dupla](../maker_3/formulario/componentes/lista_dupla), [Lista Dinâmica](../maker_3/formulario/componentes/lista_dinamica), [Opções](../maker_3/formulario/componentes/opcoes), [Texto Longo](../maker_3/formulario/componentes/texto_longo), [Grade](../maker_3/formulario/componentes/grade) e [SubForm](../maker_3/formulario/componentes/subformulario) (é possível determinar essa permissão para os componentes do formulário associado a um componente SubForm, mas a área do componente SubForm aparecerá continuamente).
  - Incluir - permissão que impacta a possibilidade de se incluir um registro de um objeto. Quando definida para o:
  - - formulário - aplicável para este objeto;
    - componente - aplicável para o componente Grade (aparece uma tela questionando o usuário se ele deseja configurar permissão relativa à própria grade ou ao formulário associado a ela).
  - Excluir - permissão que impacta a possibilidade de se excluir um registro de um objeto. Quando definida para o:
  - - formulário -  aplicável para este objeto;
    - componente - aplicável para o componente Grade (aparece uma tela questionando o usuário se ele deseja configurar permissão relativa à própria grade ou ao formulário associado a ela).
- abaixo das etiquetas citadas acima, o botão:

- Marcar Todas -  ao receber um clique, todos os Grupos listados na área abaixo dele são marcados;
- Desmarcar Todas - ao receber um clique, todos os Grupos listados na área abaixo dele são desmarcados;
- Inverter - ao receber um clique, todos os Grupos listados na área abaixo dele que estiverem marcados serão desmarcados, e os que estiverem desmarcados serão marcados.

- *Na parte inferior há:*

- uma área que lista os Grupos cadastrados no sistema. Basta efetuar um clique no lado esquerdo do Grupo (checkbox) para que a permissão seja aplicada (permissão ratificada pela mensagem que informa o sucesso da aplicação da permissão);
- o link Atualizar grupos, o qual, ao receber um clique, mostra novos grupos que tenham sido cadastrados para o sistema (por meio de outro usuário em outro computador que esteja cadastrando Grupos no sistema), marcando todas as opções (Visível, Habilitado, Apenas Leitura, Incluir e Excluir) para eles automaticamente. Para grupos (nomes) que tenham sido renomeados (tela Grupos), o recomendado é que o sistema seja reiniciado, a fim de que estes apareçam na tela que é foco desta documentação;
- botão Fechar - fecha a tela

Observação: O administrador não poderá configurar o acesso aos recursos da área do projeto (Grupos, Usuários, Logs do Sistema, Alterar Senha, Depurador e Importação de Relatórios).
