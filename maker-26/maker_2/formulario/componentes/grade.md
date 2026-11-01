---
title: "Grade"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/componentes/grade.htm"
---

# image123.gif   Grade

É utilizada para relacionar um registro com vários outros. Fazendo uma analogia com as formas normais que regem os bancos de dados relacionais, pode-se dizer que é um componente que atende ao tipo de relação 1:N (relacionamento de um para ene). Alguns componentes podem ser utilizados juntamente com componente grade, são eles: [Caixa de texto](caixa_de_texto), [Lista](lista), [Lista Dinâmica](lista_dinamica), [Botão](botao), [Imagem](imagem) e [Check](check).

Uma Grade é um componente tanto de edição como de consulta de dados, de forma que ela consegue organizar seus resultados, exibindo-os em linhas e colunas. O usuário recebe um conjunto de informações, podendo trabalhar com esses dados de maneira mais eficiente (já que ele possui um maior número de dados à sua disposição). Com esse componente, não precisaremos visualizar todos os campos de uma vez. Como os demais componentes usados, ele possui particularidades que o diferem e o tornam indispensável para determinadas representações.

A grade exibe um volume grande de dados. Consegue de forma fácil e intuitiva, fazer com que o usuário possa ter acesso a todos eles, dando-lhe a possibilidade para consultar informações, alterá-las ou até excluí-las.

A Grade possui algumas propriedades particulares, que serão detalhadas a seguir:

- Propriedade Formulário - nessa propriedade indicaremos o formulário que alimentará os dados da Grade.
- Propriedade SubFormulário - nessa propriedade pode ser habilitada ou não a chamada do formulário, cadastrado na propriedade Formulário.
- Propriedade Parâmetros - é nesta propriedade que indicamos um ou mais campos de ligação entre o formulário principal e a Grade. Esta propriedade serve de filtro para os dados.

Selecione o Campo do formulário detalhe que irá relacionar com o Campo do formulário master e clique no botão ![image124.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image124.gif) (equivalente). Mais abaixo, defina o Tipo de ligação, informando:

- - Padrão (AND) - a ligação entre os dados é verdadeira quando forem iguais;
  - Ignorar Nulo - a ligação será verdadeira mesmo que os dados do formulário detalhe sejam nulos;
  - União (OR) - a ligação será verdadeira contendo valores do formulário detalhe ou apenas do formulário master.
- Propriedade Colunas - nesta propriedade indicamos um ou mais campos que serão exibidos como colunas da Grade;
- Propriedade Editável - as grades podem ser classificadas em editáveis ou não editáveis (informe Sim ou Não).

Na grade não editável, as suas colunas são definidas pela propriedade Colunas, onde escolhemos os campos (mesmos campos do formulário origem da Grade). Nesse tipo de grade, pode-se vincular um formulário à ela. Sendo assim, quando precisar alterar um campo da grade, será chamado um formulário no qual serão feitas as alterações.

Já na grade editável, todas as suas colunas são herdadas do formulário com que ela está ligada. Essas colunas vão se encontrar na mesma ordem e com o mesmo tipo definidos no formulário de origem. Observar que, com a grade sendo editável, a opção de chamar um novo formulário a partir dessa grade não funciona. Quando clicamos duas vezes na grade, ela irá disponibilizar a alteração de registros. Para que uma grade editável chame um formulário, a sua origem deve possuir um botão com a chamada Ao Clicar apontando para um formulário. Observe um exemplo apresentado na dica Criando uma Grade com botão que aciona formulário.

A grade, no modo de execução, editável ou não editável, permite a ordenação dos dados com a combinação da tecla SHIFT + &lt;clique duplo&gt; sobre o título da coluna.

Quando criado um formulário e nele agregar-se uma Grade Editável, a barra de edição da grade só ficará visível, se houver informações na fonte de dados principais do formulário.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Eventos não funcionais do componente Grade

Nem todos os eventos são funcionais no componente Grade, alguns estão desabilitados para o mesmo. Abaixo consta a lista de eventos não funcionais:

- Ao Entrar
- Ao Sair

Eventos não funcionais ao formulário da Grade:

- Ao Entrar
- Ao Navegar
- Ao Sair

Observações:

1. Caso o evento Ao Duplo Clicar seja definido, a grade não entrará em modo de edição com o clique duplo. Caso queira executar o evento e a ação de edição, defina o [Parâmetro Avançado](../../propriedades_e_eventos_da_area_de_trabalho) GradeExecutarApenasDuploClicar como false. O padrão deste é true;
2. O evento Ao Duplo Clicar não funcionará quando a grade estiver desabilitada, entretanto funcionará normalmente caso esteja Apenas Leitura;

## Comportamento do componente Grade

O componente grade possui alguns comportamentos específicos. São eles:

- Por padrão, a largura das colunas é de acordo com a respectiva largura do componente. Para que se tenha a largura da coluna desejada, é necessário reajustar a largura do componente correspondente.

- A propriedade Descrição não possui efeitos visuais no Webrun para o componente Grade.

- O tipo de formatação escolhida na propriedade Fonte da grade reflete tanto para o conteúdo quanto para números das linhas e títulos de colunas da mesma.

- Alterações realizadas na propriedade fonte dos componentes, tais como, Fonte, Estilo da Fonte, Tamanho dentre outras não se aplicam quando o formulário é exibido em forma de grade, para isso existe a propriedade fonte do componente Grade;
- Existindo um formulário com a grade editável e contendo o componente Lista Dinâmica vinculado ao outro formulário, ao editar a grade e selecionar o componente Lista Dinâmica, pressione F5 para abrir o formulário que foi vinculado ao componente;
- O scroll do mouse não funciona no browser Mozilla Firefox para movimentar-se na barra de rolagem desse componente;

- Não é possível filtrar o componente grade pelas propriedades Parâmetros e Grade Mestre simultaneamente.
- Quando a Grade for editável, será respeitada a tabulação do formulário de origem. Quando for não editável, seguirá a ordem de tabulação da propriedade de coluna do componente;

- Ao pressionar no teclado as setas direita ou esquerda, e a grade estiver em modo:
- - de inclusão ou alteração e o foco do cursor estiver em uma tupla dela, o cursor se moverá entre os caracteres;
  - normal, a grade será paginada (propriedade Paginação).

- Existe uma área reservada acima do componente grade editável ou não editável, portanto caso seja posicionado algum componente nesta área o mesmo não poderá ser acessado.

- O tamanho da lista não pode exceder o tamanho da grade, caso isso ocorra não será mostrado o inicio do valor do componente lista.
- Algumas teclas de atalho podem ser utilizadas no componente Grade. São elas:

- a seta para cima - grava um registro que esteja sendo inserido ou alterado;
- a seta para baixo, a combinação de teclas CTRL + Insert" ou CTRL + I, exceto se o foco do cursor estiver sobre um componente Lista Dinâmica (contido na Grade), muda o estado do componente Grade para o modo de inserção. Caso o componente Grade já esteja em modo de inserção ou alteração, o registro é gravado e o componente volta para o modo de inserção;
- a combinação de teclas CTRL + E altera o modo normal do componente para o modo de alteração;
- a combinação de teclas CTRL + D exclui o registro que estiver com o foco do cursor no componente;

- Ao selecionar uma linha de uma Grade mestre e atualizar seu conteúdo, o foco relacionado a linha selecionada sumirá e retornará a primeira linha da grade.

## Parâmetros automáticos do componente Grade

Todo fluxo de ação, uma vez vinculado ao evento Ao Clicar, Ao Duplo Clicar ou Ao Modificar do componente Grade, recebe dois . Para que esses parâmetros sejam obtidos corretamente pelo fluxo de ação, quando executado no Webrun, é necessária a criação de dois Parâmetros de Entrada: o primeiro parâmetro chamado de Linha Real (nome opcional - correspondendo ao valor geral da linha da tabela que é salva na memória principal para, em seguida, ser mostrada na Grade); e o segundo parâmetro chamado de Linha da Grade (nome opcional - que corresponde ao valor da linha que é mostrada em cada paginação da Grade).

Como foi citado no parágrafo anterior, por serem parâmetros passados automaticamente pelo Webrun, não devem ser associados a campo ou componente. Caso se queira associar, é necessária a criação de um novo parâmetro, tendo este que ser criado como terceiro parâmetro de parâmetros de entrada do fluxo de ação.

Exemplo: Caso tenho sido informado o valor 2 para a propriedade Paginação do componente Grade, e esta tenha quatro registros para serem mostrados, então dois registros serão exibidos na primeira paginação e os dois últimos na segunda paginação. Se for utilizado o evento:

- Ao Clicar e Ao Duplo Clicar, assim que:
- - o primeiro registro recebe um clique ou duplo clique, o valor recebido pelo Parâmetro de Entrada Linha Real do fluxo será o valor 0 , e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 0;
  - o segundo registro recebe um clique ou duplo clique, o valor recebido pelo Parâmetro de Entrada Linha Real do fluxo será o valor 1 , e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 1;
  - o terceiro registro recebe um clique/duplo clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 2, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0;
  - o quarto registro recebe um clique ou duplo clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 3, e o valor recebido pelo Parâmetro de entrada Linha da Grade do fluxo será o valor 1.

- Ao Modificar, assim que:

- o primeiro registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 1, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0;
- o segundo registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 2, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 1;
- o terceiro registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 3, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0;
- o quarto registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 4, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 1.

Para mais detalhes sobre a configuração da Grade, acesse o tópico Propriedades e Eventos.

Observações:

1. Caso a propriedade Grade Mestre esteja definida, a propriedade Parâmetros será ignorada.

2. Ao utilizar mais de um subformulário ou grade num mesmo formulário master, não deverá existir mais de um componente (subformulário ou grade) vinculado ao mesmo formulário detalhe.
3. A partir da versão 2.5.0.42a do Webrun o procedimento correto para obter a linha da grade, no evento Ao clicar é utilizando o 2º [Parâmetro automático](grade#parametros_automaticos_componente_grade) do próprio componente.
4. No mesmo computador, caso o usuário abra mais de uma instância de um mesmo formulário, ambos compartilharão da mesma fonte de dados (a que foi associada ao formulário). Sendo assim, para exemplificar, se for executada uma consulta em um formulário, a restrição dos dados oriunda da consulta se replicará nos demais formulários. Essa informação vale para todas as formas possíveis de abertura do mesmo formulário;
5. Valor Real da linha da Grade - a primeira linha da Grade corresponde ao valor 0 (zero) a segunda corresponde a um e assim sucessivamente;
6. Redimensione a coluna da grade no Modo Normal do Webrun, pois no Modo Gerente o redimensionamento não será salvo, voltando à configuração anterior na atualização
