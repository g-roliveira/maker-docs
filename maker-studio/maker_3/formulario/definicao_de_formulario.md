---
title: "Formulário"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/definicao_de_formulario.htm"
---

Por ser a principal porta para a manipulação dos dados das entidades de um banco de dados, é o objeto no qual é disponibilizada uma [Barra de ferramentas](propriedade_do_formulario#botoes_da_barra_de_ferramentas_do_formulario), componentes (em abas) e ações (independentes das abas do formulário) que, após serem configuradas, são disparadas no momento: da execução de transações (inserção, alteração, exclusão e seleção);da abertura ou fechamento do formulário; e do pressionamento de tecla, estando o formulário com o foco. Todos os [Componentes](componentes/componentes) que podem ser utilizados nos formulários são disponibilizados na aba Formulário da Paleta Objetos, sendo necessário que um formulário seja aberto para que apareçam. Para visualizar um exemplo de criação de formulário acesse o tópico [Criando um Formulário](../../dicas_e_truques/maker/criando_um_formulario).

## Abas do Formulário

Todo novo formulário é criado com duas abas, a aba Cadastro e a aba Localizar. Ao clicar com o botão direito do mouse sobre a área, pode-se:

- adicionar uma nova aba - a nova aba aparece à direita da aba na qual estava o ponteiro do mouse no momento da efetuação do clique com o botão direito do mouse;
- renomear a aba - aparece uma tela para que o usuário possa definir o novo nome da aba;
- e excluir a aba - é excluída a aba na qual estava o ponteiro do mouse no momento da efetuação do clique com o botão direito do mouse.

Cabe lembrar:

- havendo apenas duas abas no formulário (as abas Cadastro e Localizar), não será possível excluir a aba Cadastro (ou outro nome dado pelo usuário à aba), pois, obrigatoriamente, todo formulário deve ter pelo menos uma aba além da aba Localizar;
- não é possível excluir nem renomear a aba Localizar.

A aba Cadastro é a aba utilizada para a disposição dos componentes que serão ou não associados aos campos da fonte de dados do formulário. Sua área é composta por pequenos pontos separados um do outro por um espaçamento (vertical e horizontal) de oito pixels, os quais podem ser observados para efeito de posicionamento dos componentes.

A aba Localizar (no Maker) é composta por duas colunas:

- Campos de pesquisa - são os campos (componentes Caixa de Texto) que disponibilizarão ao usuário a possibilidade da execução de consultas na fonte de dados associada ao formulário. E acima de cada um destes campos há uma caixa de texto na qual se pode escolher o operador que deverá ser considerado durante a execução da consulta (se o dado associado ao campo for do tipo número (todas as variações), então aparecerão os operadores =, &gt;, &lt;, &gt;=, &lt;= e Iniciando Com; se o dado associado ao campo for do tipo texto (todas as variações), então aparecerão os operadores Contendo, Iniciando Com, Terminando Com e Igual);
- Campos para grade - são as colunas que mostrarão o resultado da execução das consultas feitas na fonte de dados associada ao formulário.

 Abaixo consta uma imagem que demonstra a aba Localizar de um formulário.

![image1146.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image32.png)

Os componentes pertencentes a aba Localizar são:

- ![image88.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image33.png) Buscar - é executada a consulta, observados antes os parâmetros de pesquisa definidos nos Campos de pesquisa;
- ![image89.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image34.png) Buscar Todos - cancela a listagem filtrada por uma pesquisa, reexibindo todos os registros;
- ![image90.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image35.png) Consulta Avançada - oculta os Campos de Pesquisa e habilita a área Consulta avançada com outras opções de filtro:

![image1145.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image36.png)

- ![image91.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image37.png) Limpar consulta - limpa uma consulta criada pelo componente ![image74.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image38.png) Adicionar Novo Campo à Consulta;
- ![image92.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image39.png) Aplicar consulta - executa a consulta;
- ![image93.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image40.png) Carregar consulta salva - abre uma consulta que foi salva;
- ![image74.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image38.png) Adicionar novo campo à consulta - adiciona um campo para uma consulta. Mostra uma tela para escolher o campo de pesquisa;
- Salvar consulta - salva uma consulta. É necessário especificar um nome para identificar a consulta salva;
- Remover campo - remove um campo da consulta.

A tabulação da aba Localizar ocorre entre os campos do filtro e o tipo de filtro. Dentro da aba Localizar, caso o usuário queira ir para o registro da aba Cadastro, é só pressionar a tecla Page Down em qualquer campo do filtro e, em seguida, selecione o registro e pressione a tecla Enter.

Observações:

1. Caso o formulário esteja com a propriedade Entrar como pesquisa marcada como Sim, o botão Ultimo Registro da aba de Navegação do formulário desaparecerá.
2. Caso a quantidade de abas ultrapasse o tamanho do formulário, para visualizá-las no Webrun é necessário aumentar a largura do formulário.
3. A pesquisa da aba localizar é realizada na consulta que está vinculada nas definições do formulário. Com isso, caso o desenvolvedor tenha modificado a consulta do formulário, ele terá que criar sua própria aba localizar.
4. Não é possível filtrar um campo que possua conteúdo do tipo lógico através da aba localizar, para isso será necessário criar um case dentro da consulta SQL.
5. As pesquisas realizadas na aba localizar são feitas utilizando a cláusula where do banco, logo se a mesma contiver caracteres especiais eles serão tratados no SQL do banco de dados utilizado.
6. Ao associar o evento À aba localizar, esta não carregará os dados padrão, pois o mesmo será sobrescrito pelo evento associado

Exemplo: Ao utilizar o "_"(underline) em uma pesquisa, a consulta retornará todos os registro pois, o "_"(underline) representa qualquer caracter.

Nota: Caso queira realizar uma busca onde o caracter pesquisado seja por exemplo o (_) usa-se o caracter de escape \.

Por exemplo:

select* from fr_acao where aco_nome like '%\_%';

ou

select* from fr_acao where aco_nome like '%\%%';

Dessa forma, o banco tratará o caracter especial como se fosse qualquer outro.

- Não é possível filtrar subselects na aba localizar. Para tal deverá ser feito um join entre as tabelas utilizadas.
- Limite a quantidade de Campos de Pesquisa à largura do formulário, pois ela é estática. Sendo assim, se houver mais campos que a largura do formulário suportar, estes não aparecerão.
- O botão ![image912.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image41.png) não atualiza a grade da aba Localizar. Quando acionado esse botão, é apresentada a mensagem: "Você deve sair da guia Localizar";
- Caso o usuário crie uma aba no Maker e não cole nenhum componente nela, esta não aparecerá ao ser aberto o formulário.
- Existe uma área reservada acima do componente grade editável ou não editável, portanto caso seja posicionado algum componente nesta área ele não poderá ser acessado.

- Para um maior desempenho, os dados incluídos no formulário serão sempre inseridos no final da lista da aba localizar, portanto, mesmo que a fonte de dados do formulário esteja na ordem descendente, a lista da aba localizar só será reordenada após atualizar o formulário ou clicar buscar todos.

- Ao serem pesquisados registros na aba Localizar de um formulário aberto no Webrun, não haverá sucesso ao tentar digitar a parte da hora da data num campo do tipo datetime ou timestamp, pois os tipos citados armazenam em sua estrutura além da data, hora, minutos, segundos e milisegundos.

## Preservando valores dos registros na aba consulta: não permitir scripts:

Por padrão, a grade na aba consulta permitirá scripts e tags HTML (mas o texto da tag aparece). Para desabilitar, use a propriedade avançada DesabilitarScriptAbaLocalizar para não escapar valores dos registros na aba de consulta.

## Barra de Ferramentas da Grade de Listagens

- ![image94.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image42.png) Listagem - gera um relatório simples, via browser, com todos os campos da Grade de Listagem;
- ![image95.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image43.png) Exportar para HTML - gera um relatório via browser no formato HTML com todos os campos da Grade de Listagem;
- ![image96.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image44.png) Exportar para XML - gera um relatório via browser no formato XML com todos os campos da Grade de Listagem;
- ![image97.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image45.png) Exportar para TXT - gera um relatório via browser no formato Texto com todos os campos da Grade de Listagem;
- ![image98.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image46.png) Gerenciar campos da grid - gerencia os campos da grade da aba Localizar, ocultando/exibindo e ordenando visualmente;
- ![image17.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image47.png) Remover ordenação do grid - remove todas as ordenações da grade (a ordenação ocorre quando se executa clique duplo no rótulo da coluna da grade da aba localizar: quando se executa clique duplo, ocorre a ordenação ascendente do conteúdo alfanumérico ou numérico. Quando se executa pela segunda vez, ocorre a ordenação descendente);
- ![image18.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image48.png) Importar arquivos - ativa um Assistente de importação de dados para a origem do formulário (Esta funcionalidade foi depreciada):

![image915.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image49.png)

Observação: Esta importação é somente para dados do tipo texto (String) e data. Não é possível a importação de dados a serem inseridos em campos de outros tipos que não seja string ou data.

## Componentes

Na paleta, temos os componentes que poderão ser utilizados no formulário. Estes componentes aparecem quando entramos no modo de edição de formulário. Cada componente possui propriedades específicas.

O Maker utiliza alguns componentes já conhecidos em ambientes de desenvolvimento, tais como: Lista, Caixa de Texto, Texto, Texto Longo, Botão, Grade, Lista Dinâmica, Opções, Imagem, Moldura, SubFormulário, Check.

O Maker possibilita a construção de sistemas apenas arrastando componentes e arrumando-os nos formulários.

Para mudar a posição do componente em relação ao limite esquerdo e superior do formulário, deve-se proceder da seguinte forma:

1. Abra o formulário que deseja editar;
2. Clique com o botão direito do mouse no campo do tipo Caixa de Texto;
3. Selecione em Propriedades a opção PosiçãoX para 25;
4. Selecione em Propriedades a opção PosiçãoY para 98;
5. Utilize controles de alinhamento para agilizar a organização dos componentes

À medida que se edita a propriedade, a nova configuração é aplicada automaticamente.

A atualização do formulário ocorrerá no navegador, Modo Projeto do sistema em uso no Webrun.

Todo Componente. possui Eventos. Esses eventos podem estar habilitados ou não: "Ao Clicar", "Ao Entrar", "Ao Sair", "Ao Modificar" são eventos disponíveis para cada componente. A ação que ocorrerá quando determinado evento for acionado depende do fluxo associado.

## Menu pop-up ativado da Área do Formulário

Este menu permite acessar uma série de recursos, a partir do clique direito do mouse na área do formulário:

![image747.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image50.png)

- [Alinhamento](opcoes_comuns_para_os_objetos_em_um_formulario/alinhamento)
- [Edição](opcoes_comuns_para_os_objetos_em_um_formulario/edicao)
- [Controles](opcoes_comuns_para_os_objetos_em_um_formulario/controles)
- [Novo Componente](opcoes_comuns_para_os_objetos_em_um_formulario/novo_componente)

Clicando com o botão direito do mouse na aba do Formulário, aparecem as opções abaixo:

- Inserir - insere uma nova aba;
- Renomear - renomeia a aba;
- Excluir - exclui uma aba criada;
- Assistente - abre a tela Assistente de Criação de Novo Formulário;
- Criar tabela... - abre a tela Assistente de Banco de Dados para criar tabela;
- Reorganizar Componentes - reorganiza os componentes do formulário alinhando à margem esquerda do formulário.

Procedimento para visualizar a alteração de tamanho do formulário

Para visualizar a alteração de tamanho de um formulário, é necessário recarregar o formulário e o menu do sistema. Para isso, siga os procedimentos abaixo:

1. Abra o formulário com o tamanho alterado.
2. Utilize a combinação de teclas Ctrl + F5 para atualiza-lo (Limpar Cache).
3. Feche o Formulário.
4. Recarregue o Menu do sistema.
5. Abra o formulário novamente (Através do menu).

## Comportamento do Formulário

O formulário possui alguns comportamentos específicos, são eles:

- Caso o modo de apresentação seja definido como desktop todos os atalhos referente ao navegador serão desabilitados ao utilizar o formulário, caso contrario não será possivel utilizar atalhos do navegador em formulários onde os mesmos coincidem com os atalhos utilizados pelo Webrun.
- Ao abrir um formulário, cuja tabela tenha sido excluída, uma mensagem será apresentada informando que ocorreu um erro ao tentar carregar o formulário e a operação será abortada.

- Caso um formulário tenha resolução superior a suportada pelo monitor, o mesmo poderá apresentar-se de forma incorreta.

- Os eventos Ao Entrar, Ao Navegar, Ao Pressionar Tecla, Ao Sair não se aplicam quando o formulário está em um subform.
- A opção "Remover controles existentes no formulário" só é mostrando quando abre a tela [Assistente de Criação de Novo Formulário](assistente_criacao_novo_formulario) ao clicar com o botão direito do mouse sobre a aba do formulário e escolhendo a opção Assistente. Com a opção ativada, o formulário é reestruturado conforme os campos marcados na grade da tela desfazendo toda estrutura existente no formulário;
- Configurações feitas na [Área de Trabalho do Maker](../propriedades_e_eventos_da_area_de_trabalho) (plano de fundo do projeto, formulários associados a fontes de dados de conexões adicionais, dentre outros) não são consideradas na pré-visualização, sendo necessário que o usuário reinicie o sistema para que passem a ser consideradas.

Observações:

1. Não pode ser utilizado "union" no sql vinculado ao formulário. Pode ser contornado criando uma view.
2. A tecla F9 permite pré-visualizar o formulário. Caso sejam pressionadas as teclas Ctrl + F9 no Maker, abrirá o projeto no Webrun;
3. Quando o [Assistente](assistente_criacao_novo_formulario) for aberto com um clique com o botão direito do mouse na área das abas do formulário, não serão consideradas as configurações preexistentes, ou seja, serão selecionados todos os campos da tabela para que possam ser aplicados no formulário.
4. Ao ser utilizado um campo obrigatório e o mesmo não possuir nenhuma descrição, será exibida a seguinte mensagem:"Existem campos obrigatórios não preenchidos!".

Propriedades

- Aba Localizar

Ao selecionar a opção Não, a aba localizar do formulário será oculta. Por padrão, esta propriedade vem configurada como Sim.

- Abas

Ao selecionar a opção Não, as abas existentes no formulário serão ocultas e apenas os componentes existentes na primeira aba serão exibidos.  Por padrão, esta propriedade vem configurada como Sim.

- Apresentação

Ao selecionar a opção Web, o formulário aparecerá com a barra de menu e ferramentas padrão do browser. Ao selecionar Desktop, o formulário será exibido sem o menu do browser.

- Barra de Rolagem

Ao selecionar a opção Sim, o formulário aparecerá com uma barra de rolagem horizontal/vertical, caso tenham sido colocados componentes em uma área do formulário que exceda os seus limites (largura e altura, no Maker) quando apresentado no Webrun.

Observações:

1. O usuário deverá recarregar o sistema para que as alterações tenham efeito.

2. Ao definir esta propriedadade como Sim no formulário, a barra de rolagem irá aparecer independente do tamanho do formulário e de seus componentes, pois todo formulário no webrun é aberto através da função javacript "window.open", que por padrão, utiliza o parâmetro "scrollbar", habilitando assim todas as barras de rolagem.

- Botão Maximizar

Ao selecionar a opção Sim, o botão Maximizar, na barra de títulos, do formulário estará habilitado. Por padrão, esta propriedade vem configurada como Não.

- Campo Versão

O campo da fonte de dados informado nesta propriedade armazena o identificador da transação mais antiga dentre as que estão ativas na edição de um registro. Havendo uma transação mais recente apontando para o mesmo registro (para o qual a transação mais antiga aponta), esta será confirmada ou desconsiderada a depender do tipo da transação. Quando um novo formulário é criado pelo "Assistente de Criação de Novo Formulário" ou pelo "Assistente de Criação de Múltiplos Formulários", o Maker reconhece o identificador da fonte de dados automaticamente, vinculando-o a esta propriedade. Se o projeto tiver sido criado no banco de dados:

- Postgresql - deve ser adicionado um novo campo chamado "xmin" na consulta ("Assistente SQL") do formulário. Esse campo é criado automaticamente pelo banco de dados toda vez que uma nova tabela é criada, mesmo não aparecendo na estrutura da tabela, quando é visualizada pelo aplicativo administrador do banco de dados;
- Microsoft SQL Server - deve ser criado um campo vinculado ao tipo de dado "Timestamp" e, em seguida, adicionado o novo campo à consulta ("Assistente SQL") do formulário
- Oracle - na criação da tabela deve ser inserido o comando ROWDEPENDENCIES como no exemplo:
  CREATE TABLE tabela (
  id INT NOT NULL,
  nome VARCHAR ( 20 ))
  ROWDEPENDENCIES;

  Deve ser adicionado um novo campo chamado **ORA_ROWSCN** na consulta do formulário. Esse campo é criado automaticamente pelo banco de dados toda vez que uma nova tabela é criada, apesar de não ser exibido na estrutura da tabela, quando é visualizada pelo administrador do banco de dados;

Observação: Para os demais bancos de dados, verifique na documentação do fornecedor correspondente, qual tipo de dados é compatível.

- Centralizado

Ao selecionar a opção Não, o formulário será aberto na posição que foi salvo pela última vez no Maker. Ao selecionar a opção Sim, o formulário será aberto centralizado de acordo com a tela do usuário. Por padrão, esta propriedade vem configurada como Sim.

- Entrar como pesquisa

Ao selecionar a opção Sim, o formulário será aberto em modo de pesquisa, ou seja, a Aba Localizar é aberta inicialmente e os registros não são exibidos. Deve-se observar que o botão ![exibirtodosregistros.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image34.png) (Exibir todos os registros) não terá sua função disponível neste estado (já que os registros não foram carregados).

O custo de exibir dados de tabelas com muitos registros no ambiente Web é superior para sistemas desktop. Amortizar o impacto desse custo requer algumas estratégias que podem ser implementadas no Maker. Como por exemplo: ao acessar um formulário de pesquisa, o Maker solicita ao usuário que filtre os dados. Dessa forma a eficiência do seu sistema é assegurada, evitando assim que formulários que contenham muitos registros apresentem lentidão na carga do mesmo.

Observe que a barra de navegação do último registro está inativo. Essa funcionalidade é uma estratégia para evitar com que os registros sejam carregados na tela.

Por padrão, esta propriedade vem configurada como Não.

- Modal

Ao selecionar a opção Sim, o formulário será objeto com janela exclusiva, ou seja, o formulário recebe o foco de objeto principal, impedindo a manipulação de outro formulário. Por padrão, esta propriedade vem configurada como Não.

Esta funcionalidade não está disponível para os browsers:

- Google Chrome,
- Firefox 1.x,2.x.

Ao ser criado uma regra na camada servidor que em algum momento possua um processamento que solicite a abertura de um formulário modal, os processamentos que estiverem após esta solicitação, continuarão a sua execução, independente da abertura do mesmo.

- Navegação
- Ao selecionar a opção Não, o formulário aparecerá com a barra de navegação invisível. Por padrão, esta propriedade vem configurada como Sim.
- Imagem
- Esta propriedade aplica uma imagem de fundo ao formulário. A imagem a ser selecionada deve existir na Galeria de Imagens.
- Para vincular uma imagem, selecione a imagem (a imagem ficará com a borda laranjada) e clique no botão Selecionar (imagens podem ser gravadas no Maker pela opção Galeria de Imagens do menu Projeto);
- Para desvincular uma imagem do formulário, clique no botão Nenhum;
- Eventos

  - Antes de Alterar

  O evento é executado assim que o usuário altera um registro já existente e confirma a gravação das alterações feitas, mas antes do registro ter sido gravado efetivamente.

  - Antes de Inserir

  O evento é executado assim que o usuário confirma a inclusão de um registro, mas antes de o registro ter sido gravado efetivamente.

  - Ao Navegar

  O evento é executado assim que o usuário abrir o formulário ou ao navegar entre os registros.

  Observações:

  1. Caso o evento seja associado a um formulário que contenha um subform,o mesmo não será válido a este componente.
  2. Caso este evento contenha uma ação com intuito de alterar, substituir ou desfazer o conteúdo, contido no componente [Texto Longo](componentes/texto_longo), este com a propriedade HTML Básico ou HTML Avançado, é necessário fazer esta alteração a partir de um fluxo chamado pela função Agendar Execução de Fluxo.
  - Depois de Deletar

  O evento é executado assim que o usuário confirma a exclusão de um registro no formulário, mas depois de o registro ter sido excluído efetivamente.

  - Depois de Alterar

  O evento é executado assim que o usuário altera um registro já existente e confirma a gravação das alterações feitas, mas depois de o registro ter sido gravado efetivamente.

  - Depois de Inserir

  O evento é executado assim que o usuário confirma a inclusão de um registro, mas depois de o registro ter sido gravado efetivamente.

  Observações:

  1. Caso uma regra associada ao evento Depois de Inserir possua interações com o banco de dados, o Webrun não permitirá inserir os dados que estão no formulário no banco caso a regra lance uma exceção.
  2. Em um formulário, caso se queira editar propriedades e/ou eventos de vários componentes simultaneamente, definindo assim valores idênticos para eles, basta que todos os componentes que se quer que sejam envolvidos sejam selecionados antes da edição.
  3. Os modos de exibição de um formulário são distintos entre si para atender a cada necessidade de um sistema. É permitido vincular fluxos de ações a esses modos por meio dos Eventos, mas existem diferenças entre cada um. Podemos citar, como exemplo, ações vinculadas ao evento Ao Navegar: são realizadas no modo normal do formulário. Para ações, durante a gravação de dados (modo inserção ou alteração), é mais recomendável utilizar o evento Antes de Inserir ou Antes de Alterar, que são realizados ainda no modo de inserção ou alteração do formulário.

  - Antes de Deletar

  O evento é executado assim que o usuário confirma a exclusão de um registro no formulário, mas antes de o registro ter sido excluído efetivamente.

  ___________________________________________________________________________

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
