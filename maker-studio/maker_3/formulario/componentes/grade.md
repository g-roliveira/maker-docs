---
title: "Grade"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/grade.htm"
---

# image172.png   Grade

Uma Grade é um componente tanto de edição como de consulta de dados, de forma que ela consegue organizar seus resultados, exibindo-os em linhas e colunas. O usuário recebe um conjunto de informações, podendo trabalhar com esses dados de maneira mais eficiente (já que ele possui um maior número de dados à sua disposição). Com esse componente, não precisaremos visualizar todos os campos de uma vez. Como os demais componentes usados, ele possui particularidades que o diferem e o tornam indispensável para determinadas representações.

É utilizada para relacionar um registro com vários outros. Fazendo uma analogia com as formas normais que regem os bancos de dados relacionais, pode-se dizer que é um componente que atende ao tipo de relação 1:N (relacionamento de um para ene). Alguns componentes podem ser utilizados juntamente com componente grade, são eles: [Caixa de texto](caixa_de_texto), [Lista](lista), [Lista Dinâmica](lista_dinamica), [Botão](botao), [Imagem](imagem) e [Check](check).

A grade exibe um volume grande de dados. Consegue de forma fácil e intuitiva, fazer com que o usuário possa ter acesso a todos eles, dando-lhe a possibilidade para consultar informações, alterá-las ou até excluí-las.

## Atualização do Componente

O componente Grade foi atualizado e funcionalidades novas foram inseridas:

- Novo layout - O componente está de cara nova, seguindo as tendências do mercado, com um visual limpo e sofisticado, a nova grade cumpre o compromisso de proporcionar uma melhor experiência para o usuário, facilitando a interação e proporcionando uma maior funcionalidade do componente.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/grade1.PNG)
- Performance - O componente recebeu uma melhoria na performance, tornando o processamento de dados mais rápido e objetivo, facilitando o seu uso, gerando otimização de tempo.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/performance.gif)
- Congelamento de colunas  diretamente do menu de contexto da Grade - Com a atualização, é possível realizar o congelamento das colunas, que resulta em uma melhor visualização de dados e busca de informações;

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/congelar.gif)
- Ocultamento de colunas  diretamente do menu de contexto da Grade - Com a atualização, é possível realizar o ocultamento das colunas de forma prática, que resulta em uma busca de dados com maior precisão.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ocultar.gif)

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ocultarantigo.gif)
- Exportar os dados em diversos formatos - É possível exportar os dados da grade para as principais plataformas da atualidade, com isso, os dados podem ser consultados nos formatos disponíveis facilitando a análise dos mesmos.

  ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/export.gif)
- Novos recursos de ajustes e otimização na visualização dos dados:

  - Ordenar os registros da grade a partir das colunas diretamente do menu de contexto da Grade;

    ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ordenarcontexto.gif)
  - Definir a ordem das colunas diretamente da grade, com a praticidade de apenas arrastar a coluna desejada;

    ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reordenar.gif)

    ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reordenarantigo.gif)

A Grade possui algumas propriedades particulares, que serão detalhadas a seguir:

- Propriedade Formulário - nessa propriedade indicaremos o formulário que alimentará os dados da Grade.
- Propriedade SubFormulário - nessa propriedade pode ser habilitada ou não a chamada do formulário, cadastrado na propriedade Formulário.
- Propriedade Parâmetros - é nesta propriedade que indicamos um ou mais campos de ligação entre o formulário principal e a Grade. Esta propriedade serve de filtro para os dados.

Selecione o Campo do formulário detalhe que irá relacionar com o Campo do formulário master e clique no botão ![image160.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image160.png) (equivalente). Mais abaixo, defina o Tipo de ligação, informando:

- - Padrão (AND) - a ligação entre os dados é verdadeira quando forem iguais;
  - Ignorar Nulo - a ligação será verdadeira mesmo que os dados do formulário detalhe sejam nulos;
  - União (OR) - a ligação será verdadeira contendo valores do formulário detalhe ou apenas do formulário master.
- Propriedade Colunas - nesta propriedade indicamos um ou mais campos que serão exibidos como colunas da Grade;
- Propriedade Editável - as grades podem ser classificadas em editáveis ou não editáveis (informe Sim ou Não).

Essa implementação serve para o desenvolvedor escolher os eventos que podem ser relacionados com a grade.

- Permitir Ordenação Simples

Essa implementação permite a ordenação dos itens da grade.

- Habilitar coluna Numérica

Essa implementação habilita uma coluna com numérção dos itens.

- Largura da Coluna Numérica

Essa implementação permite a configuração de largura da coluna numérica.

- Executar Apenas Duplo-Clicar

Essa implementação faz com que o usuário possa somente executar um duplo clique na grade.

- Habilitar coluna Numérica

Essa implementação habilita uma coluna com numérção dos itens.

- Desabilitar Customização Usuário

Essa implementação não deixa o usuário customizar a grade.

- Ativar 'Ao Modificar' na Paginação

Essa implementação ativa a modificação da grade na paginação.

- Permitir Congelar Colunas

Essa implementação permite que a opção de congelar as colunas seja exibida no menu de contexto da Grade

- Permitir Exportação

Essa implementação permite que a opção de exportar os dados seja exibida no menu de contexto da Grade

/*Por padrão, esta funcionalidade é habilitada. Caso queira desabilitar para todos os componentes Grade do sistema, utilize o script abaixo.*/

INSERT INTO FR_PROPRIEDADE (FRM_CODIGO, COM_CODIGO, PRO_NOME, PRO_VALOR)

Select

fr_componente.frm_codigo,

fr_componente.com_codigo,

'EnableGridExport' As Export,

'false' As Value

From

fr_componente

Where

(fr_componente.com_tipo = 'G')

And

(fr_componente.com_codigo Not In

(Select

fr_propriedade.com_codigo

From fr_propriedade

Where

fr_propriedade.pro_nome = 'EnableGridExport'

)

)

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

1. Caso a Grade possua no formulário vinculado a ela, algum componente(exceto CheckBox) que esteja utilizando um evento em comum com a grade (Ex: Ao Clicar), ao executá-lo será disparado primeiramente a regra vinculada ao evento do componente e em seguida a regra vinculada ao evento da grade.
2. Caso o evento Ao Duplo Clicar seja definido, a grade não entrará em modo de edição com o clique duplo. Caso queira executar o evento e a ação de edição, defina o [Parâmetro Avançado](../../propriedades_e_eventos_da_area_de_trabalho) GradeExecutarApenasDuploClicar como false. O padrão deste é true;
3. O evento Ao Duplo Clicar não funcionará quando a grade estiver desabilitada, entretanto funcionará normalmente caso esteja Apenas Leitura;

## Comportamento do componente Grade

O componente grade possui alguns comportamentos específicos. São eles:

- Ao desabilitar uma grade através de fluxograma, utilizando a função Habilitar Componente, caso ela possua um checkbox, o mesmo não é desabilitado. Para desabilitar será necessário utilizar a função Atualizar Componente.

- O componente Grade não mais permite customizações de usuário, quando:
- 1. O usuário não estiver logado em um perfil;
  2. A propriedade avançada Grade:DesabilitarCustomizarUsuario estiver ativa.

- No navegador Chrome as colunas que estejam ligadas a componentes com tamanho 0, não irão aparecer na grade logo quando carregada, mas caso o componente grade esteja em modo de inserção ou edição pelo menos uma vez, a coluna poderá ser exibida porém  com tamanho reduzido.
- Por padrão, a largura das colunas é de acordo com a respectiva largura do componente. Para que se tenha a largura da coluna desejada, é necessário reajustar a largura do componente correspondente.

- A propriedade Descrição não possui efeitos visuais no Webrun para o componente Grade.

- O tipo de formatação escolhida na propriedade Fonte da grade reflete tanto para o conteúdo quanto para números das linhas e títulos de colunas da mesma.

- Alterações realizadas na propriedade fonte dos componentes, tais como, Fonte, Estilo da Fonte, Tamanho dentre outras não se aplicam quando o formulário é exibido em forma de grade, para isso existe a propriedade fonte do componente Grade;
- Existindo um formulário com a grade editável e contendo o componente Lista Dinâmica vinculado ao outro formulário, ao editar a grade e selecionar o componente Lista Dinâmica, pressione F5 para abrir o formulário que foi vinculado ao componente;
- O scroll do mouse não funciona no browser Mozilla Firefox para movimentar-se na barra de rolagem desse componente;

- Não é possível filtrar o componente grade pelas propriedades Parâmetros e Grade Mestre simultaneamente.
- Quando a Grade for editável, será respeitada a tabulação do formulário de origem. Quando for não editável, seguirá a ordem de tabulação da propriedade de coluna do componente;

- Ao pressionar no teclado as setas direita ou esquerda, e a grade estiver em modo:
- - de inclusão ou alteração e o foco do cursor estiver em uma tupla dela: o cursor se moverá entre os caracteres;
  - normal: a grade será paginada (propriedade Paginação).

- Existe uma área reservada acima do componente grade editável ou não editável, portanto caso seja posicionado algum componente nesta área o mesmo não poderá ser acessado.

- O tamanho da lista não pode exceder o tamanho da grade, caso isso ocorra não será mostrado o inicio do valor do componente lista.
- Algumas teclas de atalho podem ser utilizadas no componente Grade. São elas:

- a seta para cima e a seta para baixo navega entre os registros da grade quando em modo normal;
  Observação: Caso o último registro da grade esteja selecionado, e a seta para baixo for utilizada, o modo da grade será alterado para inserção.
- a seta para baixo, a combinação de teclas CTRL + Insert" ou CTRL + I, exceto se o foco do cursor estiver sobre um componente Lista Dinâmica (contido na Grade), muda o estado do componente Grade para o modo de inserção. Caso o componente Grade já esteja em modo de inserção ou alteração, o registro é gravado e o componente volta para o modo de inserção;
- a combinação de teclas CTRL + E altera o modo normal do componente para o modo de alteração;
- a combinação de teclas CTRL + D exclui o registro que estiver com o foco do cursor no componente;
- a tecla PAGE UP navega de 10 em 10 registros para cima;
- a tecla PAGE DOWN navega de 10 em 10 registros para baixo;
- a tecla HOME seleciona o primeiro registro da grade;
- a tecla END seleciona o último registro da grade;
- a tecla ESC cancela a inserção ou edição de um registro da grade;

- Ao selecionar uma linha de uma Grade Mestre e atualizar seu conteúdo, o foco relacionado a linha selecionada sumirá e retornará a primeira linha da grade.

## Parâmetros automáticos do componente Grade

Todo fluxo de ação, uma vez vinculado ao evento Ao Clicar, Ao Duplo Clicar ou Ao Modificar do componente Grade, recebe 2 Parâmetros automáticos por padrão, mas é possível extende-lo até 5 parâmetros. Para que esses parâmetros sejam obtidos corretamente pelo fluxo de ação, quando executado no Webrun, é necessária a criação de cinco Parâmetros de Entrada: o primeiro parâmetro chamado de Linha Real (nome opcional - correspondendo ao valor geral da linha da tabela que é salva na memória principal para, em seguida, ser mostrada na Grade); o segundo parâmetro chamado de Linha da Grade (nome opcional - que corresponde ao valor da linha que é mostrada em cada paginação da Grade), o terceiro parâmetro chamado de Lista de Chaves Primárias (nome opcional – que corresponde a Lista de chaves primárias que é determinado ao selecionar uma linha da grade), o quarto parâmetro chamado de Lista de valores apresentados (nome opcional – que corresponde a Lista de valores apresentados que é determinado ao selecionar uma linha da grade) e o quinto e último parâmetro chamado de Lista de Valores da Consulta (nome opcional – que corresponde a Lista de Valores da Consulta que é determinado ao selecionar uma linha da grade) estes parâmetros deverão ser respectivamente dos tipos inteiro, inteiro, variante, variante e variante.

![image2004.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image173.png)

Como foi citado no parágrafo anterior, por serem parâmetros passados automaticamente pelo Webrun, estes não devem ser associados a campo ou componente. Caso se queira associar, é necessária a criação de um novo parâmetro, tendo este que ser criado como sexto parâmetro de entrada do fluxo de ação.

Exemplo: Caso tenho sido informado o valor 2 para a propriedade Paginação do componente Grade, e esta tenha quatro registros para serem mostrados, então dois registros serão exibidos na primeira paginação e os dois últimos na segunda paginação. Se for utilizado o evento:

- Ao Clicar e Ao Duplo Clicar, assim que:
- - o primeiro registro recebe um clique ou duplo clique, o valor recebido pelo Parâmetro de Entrada Linha Real do fluxo será o valor 0 ,  o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 0, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e o valor recebido pelo parâmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
  - o segundo registro recebe um clique ou duplo clique, o valor recebido pelo Parâmetro de Entrada Linha Real do fluxo será o valor 1 , o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 1 , o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e o valor recebido pelo parãmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
  - o terceiro registro recebe um clique/duplo clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 2,  o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e  o valor recebido pelo parâmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
  - o quarto registro recebe um clique ou duplo clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 3, o valor recebido pelo Parâmetro de entrada Linha da Grade do fluxo será o valor 1, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e  o valor recebido pelo parãmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;

- Ao Modificar, assim que:

- o primeiro registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 1, o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e  o valor recebido pelo parâmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
- o segundo registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 2,  o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo também será o valor 1, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e  o valor recebido pelo parãmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
- o terceiro registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 3, e o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 0, o valor recebido pelo parâmetro de entrada Lista de Chaves Primárias será uma lista com as chaves primárias da linha selecionada, o valor recebido pelo parâmetro de entrada Lista de Valores Apresentados será uma lista com os valores da linha selecionada e  o valor recebido pelo parâmetro Lista de Valores da Consulta  será uma lista de valores da consulta efetuado na linha selecionada;
- o quarto registro recebe um clique, o valor recebido pelo parâmetro de entrada Linha Real do fluxo será o valor 4, o valor recebido pelo parâmetro de entrada Linha da Grade do fluxo será o valor 1

Para mais detalhes sobre a configuração da Grade, acesse o tópico Propriedades e Eventos.

Observações:

1. Caso a propriedade Grade Mestre esteja definida, a propriedade Parâmetros será ignorada.

2. Ao utilizar mais de um subformulário ou grade num mesmo formulário master, não deverá existir mais de um componente (subformulário ou grade) vinculado ao mesmo formulário detalhe.
3. A partir da versão 2.5.0.42a do Webrun o procedimento correto para obter a linha da grade, no evento Ao clicar é utilizando o 2º [Parâmetro automático](grade#parametros_automaticos_componente_grade) do próprio componente.
4. No mesmo computador, caso o usuário abra mais de uma instância de um mesmo formulário, ambos compartilharão da mesma fonte de dados (a que foi associada ao formulário). Sendo assim, para exemplificar, se for executada uma consulta em um formulário, a restrição dos dados oriunda da consulta se replicará nos demais formulários. Essa informação vale para todas as formas possíveis de abertura do mesmo formulário;
5. Valor Real da linha da Grade - a primeira linha da Grade corresponde ao valor 0 (zero) a segunda corresponde a um e assim sucessivamente;
6. Redimensione a coluna da grade no Modo Normal do Webrun, pois no Modo Gerente o redimensionamento não será salvo, voltando à configuração anterior na atualização

Propriedades

- Colunas

Clicando sobre o botão  (Construtor) nessa opção (Colunas), aparece a tela Colunas disponibilizando para seleção os campos da fonte de dados do formulário escolhido na propriedade Formulário. Para alterar a ordem de apresentação dos campos selecionados que aparecerão na grade, marque o campo desejado e, mantendo pressionada a tecla CTRL, use as teclas do teclado Page Up (a coluna fica mais à esquerda na grade) ou Page Down (a coluna fica mais à direita na grade). Assim que concluída a configuração desejada, clique em OK para confirmar.

Considerando que o usuário tenha definido o valor Não para a propriedade Editável do componente:

- Se não for selecionada nenhuma coluna (campos) nesta propriedade, serão exibidos todos os campos contidos no Assistente de Consulta da tela Definições do Formulário;
- Se forem selecionadas algumas colunas (campos) nesta propriedade, apenas elas serão exibidas.

Lembrando que se houverem componentes associados aos campos, a propriedade Tabulação de cada um dos componentes será considerada para efeito de posicionamento das colunas quando apresentadas na Grade.

- Cor Condicional

Clicando sobre o botão ![....png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) da opção Cor Condicional, aparece a tela Editor condicional de cores para grade. Para criar condições, utilize a barra de navegação e edição superior (execute a mesma atividade para criar, na grade inferior, registros que serão vinculados ao registro (posicionados na grade superior) que estiver em foco no momento da criação do registro inferior. Assim que as configurações nesse formulário estiverem, o usuário deve clicar no botão OK para confirmar. São operações para que o usuário possa criar uma condição:

1. Clicar no botão ![....png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) da coluna Condição (grade superior) e na tela que se abre, a tela Montador de Expressões, informe a expressão condicional. São componentes/agrupamentos da tela:

   1. O campo Condição (em estado editável), local no qual aparece a expressão montada;
   2. O agrupamento Operandos, local no qual constam: botões representando números, caixa de texto contendo os campos oriundos da fonte de dados vinculada ao formulário que simula a grade e o botão Adicionar;
   3. O agrupamento Operadores Aritméticos, local no qual constam botões representando operadores aritméticos;
   4. O agrupamento Operadores Lógicos, local no qual constam botões representando operadores lógicos;
   5. O agrupamento Operadores Relacionais, local no qual constam botões representando operadores relacionais;
   6. O agrupamento String, local no qual constam botões representando aspas simples e duplas e;
   7. O botão Testar, que é usado para verificar se a estrutura da condição está correta. Após um clique no botão, caso a condição esteja certa, aparece a mensagem "Ok! Expressão Correta", caso contrário, aparece a mensagem "Não é uma expressão lógica".
2. Clicar no botão da coluna Cor para abrir a tela também chamada de Cor e, nessa última tela, selecionar a cor que aparecerá no fundo do componente vinculado ao campo selecionado (item abaixo). Para confirmar a escolha, clique no botão OK, caso contrário, clique em Cancelar;
3. Selecionar os campos que serão o foco da condição.

Observações:

- 1. Para que esta propriedade possa ser utilizada, a propriedade Formulário deve ser configurada anteriormente.
  2. O componente grade, ao utilizar a propriedade cor condicional, realizará uma atualização(refresh) após cada edição ou inserção de dados. Sendo assim, componentes vinculados a grade que não estão ligados a banco poderão não ter seus dados persistidos.
- Editável

Ao selecionar a opção Sim, quando o usuário for incluir ou editar qualquer registro no componente grade, o formulário que está vinculado a ela se abre para que ocorra a ação desejada. Vale ressaltar também que todos os componentes do formulário que estão vinculados à grade aparecerão independente de terem sido escolhidos na propriedade Colunas. Selecionando a opção Não, qualquer inclusão ou edição de registro será executada no próprio componente, aparecendo apenas às colunas selecionadas na propriedade Colunas.

- Grade Mestre

Permite que trabalhe com dois componentes Grade em que, um é identificado como Mestre e outro de Detalhe. A grade mestre irá definir o valor filtrado para a grade detalhe.

Caso esta propriedade esteja definida, a propriedade Parâmetros será ignorada.

- Paginação

Este parâmetro permite que, dado determinado valor, a grade pagine os registros ao atingir o valor determinado. O valor-padrão desta propriedade é 0(zero) e, se for mantido esse valor, o componente mostrará os 100 (cem) primeiros registros nas colunas selecionadas (propriedade Colunas do menu suspenso);

- Subformulário

Ao selecionar a opção Sim, será possível abrir o formulário configurado na propriedade Formulário. Para abrir o formulário, a grade deve estar configurada como Editável=Não e o usuário deve clicar duas vezes sobre o componente.

- Agrupamento

Ao clicar no botão ![....png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) abrirá uma janela mostrando opções para serém utilizadas no agrupamento (Habilitar Agrupamento, Exibir Sumário no Cabeçalho, Agrupamento Múltiplo, Exibir Sumário no Agrupamento, Exibir Sumário Geral e Exibir Sumário em Grupos Contraídos).

1. Habilitar Agrupamento - Ao marcar essa opção, será permitido agrupar os registros utilizando o menu de contexto de uma das colunas da grade. Assim os registros aparecerão dentro de cada linha contida na coluna selecionada.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-habilitar_agrupamento.gif)
2. Agrupamento Múltiplo - Ao marcar essa opção, será permitido realizar o agrupamento, aninhando uma coluna dentro da outra.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-agrupamento_multiplo.gif)
3. Exibir Sumário no Agrupamento - Ao marcar essa opção será mostrado o resultado de uma operação da(s) coluna(s) selecionada(s) no Sumário do Grupo ou no Sumário Geral.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-exibir_sumario.gif)
4. Exibir Sumário no Cabeçalho - Ao marcar essa opção, será mostrado o resultado de uma operação da(s) coluna(s) selecionada(s) na mesma linha que for exibida o nome do grupo sem a necessidade de expandi-lo.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-exibir_sumario_cabecalho.gif)
5. Exibir Sumário em Grupos Contraídos - Ao marcar essa opção, será mostrado o resultado de uma operação da(s) coluna(s) selecionada(s) uma linha abaixo dos respectivos grupos.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-exibir_sumario_grupos_contraidos.gif)
6. Exibir Sumário Geral - Ao marcar essa opção será mostrado o resultado da quantidade de todos os registros das colunas do tipo inteiro abaixo da grade. Também é possível definir as colunas para serem sumarizadas a operação e o fluxo que irá receber o resultado do sumário. (Ver Observação 4)

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/agrupamento-exibir_sumario_geral.gif)

Observações:

- 1. Para utilizar Agrupamento Múltiplo a propriedade Habilitar Agrupamento também deverá esta marcada.
  2. Para utilizar as propiedades Exibir Sumário no Agrupamento, Exibir Sumário no Cabeçalho e Exibir Sumário em Grupos Contraídos  é necessário selecionar uma coluna, marcar  Exibir Sumário do Grupo e definir a Operação/Fluxo ao Sumarizar no Grupo, caso a operação não seja definida será utilizada a padrão (contar).
  3. Para utilizar Exibir no Sumário Geral é necessário selecionar uma coluna, marcar  Exibir Sumário do Grupo e definir a Operação/Fluxo ao Sumarizar no Grupo, caso a operação não seja definida será utilizada a padrão (contar).
  4. Ao selecionar um fluxo nas opções de Exibir no Sumário do Grupo e Exibir no Sumário Geral, será parametrizado um objeto Json.

- Habilitar Filtro - Quando ativo, o componente habilitará para o usuário as opções de filtros para o componente:

1. Filtro por coluna: respectivamente cada coluna renderizará a opção de busca de dados. Colunas do tipo imagem, botão e checkbox não terão a opção de filtro.

   - Operadores: com o clique direito do mouse sobre a opção de busca, serão apresentadas as condicionais/operadores de acordo com o tipo do dado da coluna. Assim o usuário terá maior controle na obtenção da informação.
   - Cláusula: nesse modelo de filtro, ao inserir mais de um campo para busca o valor será agregado ao operador lógico E (AND).

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/grid/grid_filter.png)
2. Filtro avançado: ativo por meio do menu de contexto do componente esta opção permitirá o carregamento do editor de filtro, permitindo assim a cobinação de expressões.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/grid/grid_advanced_filter.png)

   Operadores suportados:

   - Correspondente a tudo =  AND
   - Correspondente a qualquer =  OR
   - Diferente de tudo =  NOT

   Com os operadores supracitados o usuário terá a possibilidade de montar diversas expressões complexas (por exemplo BI), combinando operadores para a obtenção da informação.

   ![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/grid/grid_advanced_editor.png)

- Modo do Filtro - Possibilita o desenvolvedor escolher o modo de obtenção dos dados na realização do filtro:

1. Cache: O filtro será aplicado nos dados carregados em cache, ou seja, diretamente no navegador, evitando assim uma nova requisição para o servidor. É recomendado para grades que não possuem paginação, pois todos os dados estão carregados.
   Obs: A Exportação de dados será obtida a partir da consulta feita pelo componente do servidor, caso deseje obter apenas o resultado do que foi filtrado usar o modo Atualizar Consulta.
2. Atualizar Consulta: obtenção dos dados *(inServer)*, uma requisição é solicitada ao servidor para a aplicação do filtro e obtenção dos dados, assim o *ResultSet* do componente será atualizado.

Eventos

- Ao Duplo Clicar

O evento é executado quando o usuário executa duplo clique com o botão esquerdo do mouse sobre o componente. O fluxo executado neste parâmetro deverá ter obrigatoriamente dois parâmetros de entrada que serão enviados automaticamente pelo Webrun. Estes parâmetros representam a linha real e a linha absoluta da grade.

____________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
