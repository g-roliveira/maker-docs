---
title: "Campos de Ligação"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/opcoes_comuns_para_os_objetos_em_um_formulario/campos_de_ligacao.htm"
---

Esta propriedade identifica a relação entre um componente e o formulário no qual está inserido ou entre um componente e outro componente. Clicando sobre o botão ![image482.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) da Propriedade Parâmetros, propriedade esta disponível para os componentes Árvore, Botão, Grade, Lista Dupla e Subformulário, aparece a tela Campos de Ligação.

![image876.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image159.png)

A tela acima possui os seguintes campos:

- Campo Campos do formulário detalhe - são listados todos os campos da fonte de dados do componente. No caso do componente:
- - Botão, Grade e SubForm - são listados todos os campos que fazem parte da fonte de dados associada ao formulário vinculado ao componente (propriedade Formulário);
  - Árvore - são listados todos os campos selecionados na propriedade SQL do componente;
  - Lista Dupla - quando a tela for aberta pela propriedade Parâmetros Principal, são listados todos os campos selecionados na propriedade SQL Principal, mas quando a tela for aberta pela propriedade Parâmetros Selecionados, são listados todos os campos selecionados na propriedade SQL Selecionados.
- Campo Campos do formulário mestre - se a opção que tiver sido selecionada no seletor colocado acima for:
- - Campos - são listados todos os campos selecionados da fonte de dados associada ao formulário;
  - Componentes - são listados todos os componentes contidos no formulário.

Observação: Ao efetuar dois cliques sobre um parâmetro é possível definir um valor qualquer ao mesmo. Como demonstra a figura abaixo:

![image1477.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1477.jpg)

- Botão = - para vincular os campos, o usuário deve selecionar um campo na caixa de listagem Campos do formulário detalhe e outro campo ou componente na caixa de listagem Campos do formulário mestre e, em seguida, clicar sobre o botão =;
- Campo Vínculos - apresenta os campos que foram vinculados;
- Campo Tipo de Ligação - são listados os tipos de operadores lógicos que serão levados em consideração quando o Webrun for abrir o formulário. A escolha feita neste componente só se aplica aos casos em que houver mais de uma ligação entre campos na caixa de listagem Vínculo. São opções desta caixa de seleção:
- - Padrão (AND) - selecionando esta opção, só aparecerão na grade os registros que atendam ao critério do operador lógico E entre os campos vinculados. Todas as condições (Vínculos) deverão ser satisfeitas;
  - Ignorar Nulo - é igual à opção-padrão, exceto por imputar ao usuário a necessidade de preenchimento de um dos campos do formulário mestre (formulário no qual a grade está situada);
  - União (OR) - selecionando essa opção, só aparecerão na grade os registros que atendam ao critério do operador lógico OU entre os campos vinculados. Pelo menos uma das condições (Vínculos) deve ser satisfeita.

Componente [Grade](../componentes/grade) - nas propriedades da grade, se o usuário tiver selecionado a opção Sim da propriedade Editável, toda vez que ele clicar sobre o botão Novo na barra de ferramentas que aparece acima da grade, os parâmetros (Vínculos) serão passados dos campos do formulário (mestre) para os campos vinculados à fonte de dados da grade; se o usuário tiver selecionado a opção Não, assim que ele clicar duas vezes sobre a grade para que o formulário vinculado a ela abra e, em seguida, der um clique sobre o botão Novo no formulário que foi aberto, os parâmetros (Vínculos) também serão passados dos campos do formulário (mestre) para os campos vinculados à fonte de dados da grade. Em ambos os casos, os parâmetros só permanecerão gravados se o usuário confirmar a inclusão do registro, clicando no botão Gravar da barra de ferramentas da grade. Os parâmetros (Vínculos) também são observados pelo Webrun quando o usuário navega pelos registros de um formulário que tenha pelo menos uma grade em sua composição. Ademais, é possível inserir registros na grade antes de inserir um registro no formulário (mestre).

Observação: Nas duas situações descritas acima, para que o usuário consiga abrir o formulário que está vinculado à grade, após ter dado dois cliques sobre ela, deve optar pela opção Sim na propriedade tratada na propriedade Subformulário;

Componente [Botão](../componentes/botao) - segue a mesma configuração dos itens iniciais explicados acima, exceto pela forma com a qual o parâmetro é passado do botão para o formulário. Assim que o usuário clicar sobre o botão no formulário que o contém, o formulário que foi configurado na propriedade Formulário abrirá. Em seguida, a fim de que os parâmetros (Vínculos) sejam passados do botão para o formulário que se abriu, o usuário deve clicar no botão Novo do formulário e confirmar a inserção do registro clicando no botão Gravar ou Gravar+. Os parâmetros (Vínculos) também são observados pelo Webrun quando o usuário navega pelos registros de um formulário que foi aberto através de um clique em um botão;

Componente [Subformulário](../componentes/subformulario) - segue a mesma configuração acima, exceto pela forma como o parâmetro é passado do formulário para o Subformulário. Assim que o usuário clicar sobre o botão Novo no formulário (mestre) e confirmar a inserção do registro clicando no botão Gravar ou Gravar+, os parâmetros (Vínculos) serão passados dos campos do formulário (mestre) para os campos vinculados à fonte de dados do Subformulário. Os parâmetros (Vínculos) também são observados pelo Webrun, quando o usuário navega pelos registros de um formulário que tenha pelo menos um Subformulário em sua composição. Ademais, só é possível inserir registros no Subformulário se, antes, o usuário tiver incluído o registro no formulário (mestre).

____________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
