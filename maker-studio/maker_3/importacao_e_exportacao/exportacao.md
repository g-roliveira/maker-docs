---
title: "Exportação"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/importacao_e_exportacao/exportacao.htm"
---

A tela Exportação permite a criação de um arquivo contendo todos os objetos, propriedades e procedimentos de cada um dos itens selecionados ou do sistema como um todo. O arquivo é criado com a extensão *.FRZ e fica a critério do usuário do Maker o local no qual será salvo.

Para exportar um arquivo, clique no botão ![image449.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image558.png) da [Barra de Ferramentas do Maker](../barra_de_ferramenta_do_sistema) ou, então, selecione no menu Objetos a opção Exportar:

![image1127.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image559.png)

Observe as opções da tela:

- Imagens em uso - marcando esta opção, todas as imagens da [Galeria de Imagens](../cadastro_de_imagens/catalogo_de_imagens) que estão sendo utilizadas em formulários ou como imagem de fundo do sistema, por exemplo, serão exportadas;
- Todas as imagens - marcando esta opção, todas as imagens contidas no sistema, independentemente de estarem sendo utilizadas, constarão no arquivo de exportação.
- Tipos de Dados - marcando esta opção, todos os tipos de dados contidos no sistema serão exportados;

- Ações do Sistema - está opção foi descontinuada na versão 2.5 do Maker.
- Menu do Sistema - marcando esta opção, toda a estrutura de menus e submenus será exportada, de modo que, no momento da importação, possa ser reconstruída corretamente;
- Abas - em todas as abas estão listados os objetos relativos a cada uma delas, passíveis de seleção:
- - Formulários - lista o nome de todos os formulários contidos no projeto;

- O formulário Configurações do Sistema, possui a função de armazenar as configurações do sistemas, que podem ser vistas com maiores detalhes executando o seguinte comando sql no "executor de Script"

                                        Select

FR_PROPRIEDADE.PRO_NOME,

FR_FORMULARIO.FRM_CODIGO,

FR_PROPRIEDADE.PRO_VALOR

From

FR_FORMULARIO Inner Join

FR_PROPRIEDADE On FR_FORMULARIO.FRM_CODIGO = FR_PROPRIEDADE.FRM_CODIGO

Where

(FR_FORMULARIO.FRM_CODIGO = 1).

- Relatórios - lista o nome de todos os relatórios contidos no projeto;
- Fluxos - lista todos os fluxos de ações contidos no banco de dados no qual o projeto foi criado;
- Dicionário de Dados - lista todas as entidades contidas no banco de dados no qual o projeto foi criado.
- Estrutura de Dados - lista todas as entidades contidas no banco de dados no qual o projeto foi criado. Ao exportar estrutura e dados, o *.wfre está configurado para exportar as tabelas de todos os esquemas contidos no banco de dados. A exportação não contemplará a inclusão de visões.

Observações:

1. Esta funcionalidade está disponível para projetos criados nos bancos de dados Microsoft SQL Server, Postgresql e Oracle.
2. Poderá ocorrer um erro durante o processo de exportação de uma tabela do banco de dados Microsoft SQL Server que tenha campos associados aos tipos decimal, numeric, money e smallmoney.
3. Este recurso está disponível apenas para a versão Enterprise.

- Tarefas - lista todas as tarefas agendadas na tela Agendador de Tarefas.

- Tradução - Possibilita a exportação de todos os elementos traduzidos para um determinado idioma na tabela de tradução.

- Os componentes checkbox da grade da aba Tradução são utilizados para selecionar os tipos de tradução que serão importados ou exportados, esses tipos são setados no status da tradução e podem ser (Sem Tradução, Tradução Automática, Tradução Manual, Revisão, Concluído).

- Funções - lista todas as funções contidas no banco de dados no qual o projeto foi criado.

Para selecionar um item para ser exportado nas abas:

Formulários, Relatórios, Fluxos e Dicionário de Dados, deve-se marcar o ![image619.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image619.gif) (checkbox) que aparece à esquerda do nome do item. E para selecionar todos os itens, deve-se marcar o ![image619.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image619.gif) que aparece na parte inferior esquerda da aba. Exemplo: ![image620.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image566.png);

Estrutura e Dados - caso se queira exportar apenas a estrutura de criação da entidade, deve-se marcar o ![image619.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image619.gif) (checkbox) contido na coluna Estrutura; caso se queira exportar apenas a estrutura dos dados, deve-se marcar o ![image619.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image619.gif) (checkbox) contido na coluna Dados;

- Botão ![image454.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image567.png) seleciona automaticamente fluxos e formulários (vinculados através de grade, subformulário ou botão) que possuem relação com aqueles que já foram selecionados pelo usuário.
- Botão ![image455.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image650.png) ativa o processo de exportação dos objetos selecionados, criando um arquivo com o nome e local indicado pelo usuário e com a extensão *.FRZ.

Observações:

1. Para as abas Formulário e Fluxo, temos comandos que podem ser habilitados com o botão da direita do mouse:

   1. Incluir dependências deste item - seleciona automaticamente as dependências de um item específico.
   2. Incluir dependências de todos os itens selecionados- seleciona automaticamente as dependências de todos os itens selecionado.

2. Para a aba Funções, temos botões que podem ser utilizados para auxiliar na seleção dos itens da aba:

   1. ![image450.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image562.png) - clicando sobre o botão, organiza-se a lista na ordem ascendente ou descendente da categoria. Caso arraste o botão para parte da lista, estará retirando, assim, a possibilidade de organização. O botão retornará para a tela na próxima vez em que chama-la;
   2. ![image451.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image563.png) - seleciona automaticamente todos os itens;
   3. ![image452.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image564.png) - desmarca todos os itens;
   4. ![image453.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image565.png) - inverte a seleção do conjunto de itens selecionados.
3. Ao exportar um fluxo de ação (pela aba **Fluxos** desta tela ou da opção Fluxo do submenu Exportar do menu Arquivo do Editor de Fluxo de Ações), a caixa de seleção Formulário de Trabalho da tela **Parâmetros de Entrada** do objeto **Início** (**Editor de Fluxo de Ações**) não é levada. Ou seja, após a importação, terá que defini-la novamente.
