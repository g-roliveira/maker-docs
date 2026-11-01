---
title: "Lista Dinâmica"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/lista_dinamica.htm"
---

# image148.png   Lista Dinâmica

A Lista Dinâmica é um componente que permite que o usuário possa visualizar uma lista de dados proveniente de uma determinada tabela, que não é a tabela principal do formulário atual. Quando a informação é selecionada desta lista, o dado é gravado em um campo correspondente da tabela principal.

Podemos configurar a Lista Dinâmica para consultas e informações de tabelas existentes no sistema. Para isso, utilizamos as propriedades Campo, Descrição, SQL, Campo-Chave, Campo Lista e as demais propriedades, se assim por necessário.

Observações:

1. É comum utilizar a propriedade Formulário para indicar a origem da lista e a propriedades Subformulário, definindo SIM, para permitir a chamada da origem pelo clique no botão ![image127.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/mao.png) (Exibir formulário de origem);
2. O componente lista dinâmica possibilita a utilização de chave composta. [Saiba como!](../../../dicas_e_truques/componente/utilizando_o_componente_lista_dinamica_com_chave_composta)
3. O componente suporta Common Table Expression (CTE (recurso do MSSQL)) apenas para listagem de dados, não sendo possível realizar pesquisa nos registros. Caso deseje utilizar o filtro de pesquisa é necessário criar uma VIEW com o CTE e associar o SELECT desta VIEW ao componente.
4. O componente suporta FUNCTIONS do banco de dados apenas para listagem de dados. Para demais funcionalidades, é necessário que seja criado uma VIEW no banco de dados e posteriormente, associar o SELECT desta view no componente.

A propriedade Campo definirá onde a informação selecionada será guardada. Colocamos o nome de um campo que esteja presente na consulta do SQL criada na tela principal.

A propriedade Descrição definirá o rótulo do campo no formulário.

A propriedade SQL determinará a consulta que proporcionará os dados para o campo. Nesta propriedade, abre-se uma janela para construirmos o código em SQL que será necessário para alimentar a lista apresentada na Lista Dinâmica. Esse SQL é particular desse componente, ou seja, só ocorrerá quando ele for solicitado.

A propriedade Campo Lista exibirá o conteúdo para o campo do formulário, e a propriedade Campo Chave refere-se ao campo que será o relacionamento lógico entre a tabela principal do formulário e a consulta para o campo.

![image53.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image150.png)

O componente Lista Dinâmica possui algumas funcionalidades que são nativas em modo de execução.

- Quando está editando um campo, em modo de inserção ou alteração, o componente possui controles para facilitar a busca de informações:
- - Os controles ![image128.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image151.png) (iniciando por), ![image129.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image152.png) (terminando por), ![image130.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image153.png) (igual a) e ![image131.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image154.png) (contendo), alternam-se ao receber um clique ou, quando combinamos com as teclas CTRL + &lt;barra de espaço&gt;, auxiliam para busca de contexto;
  - A Barra de Digitação corresponde ao espaço para entrada do contexto da busca;
  - O botão ![image132.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image155.png) (Localizar) executa a busca.
- Quando se está editando um campo, em modo de inserção ou alteração, ao pressionar a tecla F5, o formulário declarado na Propriedade Formulário, é aberto. Observe que isso depende também da Propriedade Subformulário definida SIM.

- Além das funcionalidades citadas, também é possível criar um formulário a partir da "Lista Dinâmica". Para isso, devem ser seguidos os seguintes passos:

1. Insira o componente Lista Dinâmica no formulário;
2. Com o duplo clique sobre a componente, abrirá a tela Assistente de Criação de Novo Formulário (nesta tela devem ser feitas as configurações necessárias para a criação do formulário);
3. Salve o novo formulário criado, fechando-o em seguida.

Observação: Concluídos esses passos, as propriedades "Descrição", "SQL", "Campo Chave", "Campo Lista" e "Formulário" serão preenchidas automaticamente.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Observações:

1. Ao vincular dados ao componente Lista Dinâmica, os campos "Campo Chave" ou "Campo Lista" deverão ser marcados, pois caso a aba de navegação do formulário esteja hablitada um erro será apresentado.
2. Definindo a lista dinâmica como Apenas Leitura pelo [Modo Gerente](../../../webrun_3/trabalhando_modo_gerente_) (Webrun), o acesso ao formulário do componente sempre estará habilitado (para Inclusão, Alteração ou Exclusão).
3. Uma vez utilizada uma concatenação (propriedade SQL) para o Campo Lista (propriedade) do componente Lista Dinâmica, não é possível utilizar o filtro de pesquisa disponibilizado pelo próprio componente (em um formulário no Webrun). Para funcionar corretamente, será necessário a definição de um alias para a concatenação e utilizar esse alias na propriedade Campo Lista.
4. Tecla [Enter] - Aplica o filtro informado na lista dinâmica.

Propriedades

- Campo Chave

Configurada a propriedade SQL, são disponibilizados para seleção todos os campos da fonte de dados que está vinculada ao formulário. O valor contido nesta propriedade (Campo-Chave) é o valor que será gravado no campo (propriedade "Campo"), quando o usuário selecionar uma das opções do componente no formulário (no Webrun).

- Campo Lista

Executada a propriedade SQL, são disponibilizados para seleção todos os campos da fonte de dados que está vinculada ao formulário. O valor contido nessa propriedade (CampoChave) é o valor que será visualizado pelo usuário para seleção.
Nota: A busca é realizada pelo campo Lista, desta forma, para que funcione corretamente é necessário que o tipo de dados seja "Letras". Caso exista a necessidade de utilizar outro tipo de dados (ex. inteiro), realize o cast na consulta SQL conforme sintaxe do banco de dados utilizado no projeto.

- Estilo

Selecionando a opção Combo, o componente aparece em forma de caixa de seleção; selecionando a opção Edit, o componente aparece em forma de caixa de texto e; selecionando a opção Memo, o componente aparece em forma de caixa de texto multi-linha.

- Fonte de Dados

Aplicada ao componente Lista Dinâmica - lista as conexões adicionais que foram configuradas no projeto. Assim que for selecionada uma conexão adicional, a árvore de entidades (tabelas e visões) que aparece na janela Assistente SQL da propriedade SQL mostra todas as entidades relativas à conexão escolhida.

Observação: Quando uma entidade (tabela) de uma conexão adicional for utilizada como Fonte de Dados pelo Formulário, será possível executar as mesmas ações das que são possíveis para a um formulário vinculado a uma fonte de dados oriunda da conexão principal.

- Máscara

Aplicada ao componente Lista Dinâmica - utilizada para definir o valor do campo.

- Paginação

Aplicada aos componentes Grade e Lista Dinâmica - a valor-padrão desta propriedade é 0 (zero) e, se for mantido esse valor, o componente mostrará os 100 (cem) primeiros valores contidos no campo selecionado (propriedade CampoLista do menu suspenso).

- Subformulário

Aplicada aos componentes Grade e Lista Dinâmica - selecionando a opção Sim, será possível abrir o formulário (propriedade Formulário) pelos componentes:

- À direita do campo ![mao.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/mao.png) no modo de execução no Webrun): é este botão que dá acesso ao formulário escolhido.

- SQL

Aplicado aos componentes Lista Dinâmica e Árvore - este item é pré-requisito para o perfeito funcionamento das propriedades de que tratam as propriedades Campo-Chave e Campo-Lista. Clicando sobre o botão ![reticencias.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) nesta opção, aparece a tela Assistente SQL para que o usuário possa criar a fonte de dados que comporá o componente.

Eventos

possibilita a modificação do tipo de busca inicial do componente Lista Dinâmica. Pode ,inclusive, ser definido de forma geral. Tipos de Filtro (Igual, Contendo, Iniciando com, Terminando com):

- - Igual - Ao pesquisar com a busca de tipo "Igual" ao digitar o valor desejado o componente será filtrado com o valor igual ao digitado.

  - Contendo - Filtra a lista caso haja algum objeto que contém o valor digitado na pesquisa.

  - Iniciando com - Iniciando com (PADRÃO), a lista é filtrada caso haja algum objeto que se inicie com o valor digitado na pesquisa.

  - Terminando com) - A lista é filtrada caso haja algum objetro que termine com o valor digitado na pesquisa.

- Ao Preencher Lista

Aplicado ao componente Lista Dinâmica - esta ação deve ser utilizada em conjunto com o método Executar Regra de negócio (tela Ações - usada para associar ações e fluxos aos componentes ou objeto formulário. Acionada pelo botão ![reticencias.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) presente no campo dos Eventos). Na propriedade Nome do método citado, deve ser selecionado um fluxo de ações que retorne uma lista com as opções que poderão ser selecionadas pelo usuário no componente. Após ter sido feita essa configuração, a configuração desenvolvida para as propriedades do componente SQL, CampoChave e CampoLista deverão ser desfeitas.

O Webrun envia 3 parâmetros de entrada no fluxo "Ao Preenche Lista", são eles:

1 - Constante de controle interno de valor 3;

2 - Valor que o usuário digitou no filtro da Lista Dinâmica;

3 - Tipo de filtro selecionado:

1=Igual

2=Contendo

3=Iniciando com

4=Terminando com.

O filtro deve ser feito internamente no fluxograma e retornar um objeto mapa de acordo com a regra de negocio do fluxo.

Propriedades

- Ajuda

Ver descrição da propriedade Dica.

- Altura

Esta propriedade determina a altura do componente/formulário.

- Apenas Leitura

Ao selecionar a opção Sim, o componente aparece somente em modo de leitura, não podendo ser editado. Por padrão esta propriedade vem configurada como Não.

Esta propriedade não se aplica aos componentes Subformulário, Botão, Árvore e Moldura.

- Campo

Esta propriedade representa a coluna da tabela selecionada como fonte de dados do formulário. São disponibilizados para seleção todos os campos da fonte de dados vinculada. Quanto ao componente:

- [Imagem](imagem) - O campo no banco de dados deve ser de um tipo que dê suporte à imagem ou de um tipo texto (campo que suporte alta precisão). Utilizando a primeira opção, o byte da imagem será gravado no campo da tabela vinculada ao formulário; já na segunda opção, o Webrun copiará a imagem para a pasta C:\Arquivos de programas\Softwell Solutions\Maker 3\Webrun 3\tomcat\webapps\&lt;contexto do Webrun&gt;\files, guardando o caminho do arquivo no campo.

Esta propriedade não se aplica aos componentes Lista Dupla, Botão, Árvore, Subformulário, Gráfico e Moldura.

- Código

Aplicado a todos os componentes e formulário. Esta propriedade representa o identificador do objeto, seja ele componente ou formulário. É utilizado para armazenar as propriedades de cada objeto no banco de dados. Esta propriedade é gerenciada automaticamente pelo Maker.

- Cor

Esta propriedade altera a cor de fundo do componente/formulário. São disponibilizadas várias cores para que o usuário possa alterar a cor de fundo-padrão (branco) do objeto desejado.

Observações:

1. Os componentes [Caixa de Texto](caixa_de_texto), [Grade](grade), [Lista dinâmica](lista_dinamica), [Lista](lista), [Texto Longo](texto_longo), [Árvore](arvore) e [Texto](texto) aplicam a cor de fundo selecionada independente da propriedade Habilitado (de cada componente) estiver marcada como Sim ou Não. Já os componentes [Lista dupla](lista_dupla), [Check](check), [Opções](opcoes) e [Botão](botao) só aplicam a cor de fonte selecionada quando a propriedade Habilitado estiver marcada como Sim.
2. Especificamente para o componente Texto, fica definido que o valor -1 na propriedade definirá Transparente para cor de fundo. Dessa forma, o componente não ficará com fundo cinza.

Esta propriedade não se aplica aos componentes Subformulário, Árvore, Imagem e Botão.

- Descrição

Esta propriedade aplica uma legenda que aparece sobre  o componente para identificar (resumidamente) qual a sua função.

Esta propriedade não se aplica aos componentes Árvore, Grade, Moldura, Imagem e para o objeto formulário.

Ao selecionar um campo, o Maker sugere uma descrição obtida no dicionário de dados e, caso o usuário deseje deixar o campo da descrição em branco basta apagá-lo e clicar fora do componente.

- Dica

Esta propriedade permite que seja configurada uma mensagem com explicação sobre a finalidade do componente/formulário. Clicando sobre o botão   nessa opção (Dica/Ajuda), aparece uma janela para que o usuário possa descrever qual a função do componente/formulário. No Webrun, para visualizar a descrição, o usuário deve selecionar o componente com um clique sobre ele e pressionar a tecla F1.

Esta propriedade não se aplica ao componente Subformulário.

- Fonte

Aplicada aos componentes [Botão](botao), [Caixa de Texto](caixa_de_texto), [Check](check), [Grade](grade), [Lista](lista), [Opções](opcoes), [Texto](texto) e [Texto Longo](texto_longo) - clicando sobre o botão ![reticencias.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reticencias.png) nesta opção, aparece a janela Fonte para que o usuário possa editar as configurações relativas à fonte que aparece no componente. São elas:

- - a Fonte - lista todos os tipos de fonte passíveis de escolha;
  - o Estilo da fonte - lista todos os tipos de layout que podem ser selecionados;
  - o Tamanho - espaço para especificação do tamanho da fonte;
  - o agrupamento Efeitos - a opção Riscado insere uma linha horizontal no meio da fonte; a opção Sublinhado insere uma linha horizontal sob a fonte; e a caixa de seleção Cor, na qual é possível modificar a cor da fonte;
- Os componentes [Botão](botao), [Check](check), [Lista Dinâmica](lista_dinamica), [Lista](lista), [Lista Dupla](lista_dupla) e [Opções](opcoes) aplicam a cor de fonte selecionada quando a propriedade Habilitado (de cada componente) estiver marcada como Sim.
- - o Exemplo - local que permite a pré-visualização das configurações adotadas;
  - o Script - convenções de grupos de fontes adotadas por continentes e/ou países para expressar sua língua na forma escrita.

Observações:

1. Os componentes [Caixa de Texto](caixa_de_texto), [Grade](grade), [Texto Longo](texto_longo), [Árvore](arvore) e [Texto](texto) aplicam a cor de fonte selecionada independente da propriedade Habilitado (de cada componente) estiver marcada como Sim ou Não.
2. Para confirmar as alterações, o usuário deve clicar no botão OK, caso contrário, deve clicar no botão Cancelar.

- Formulário:

Esta propriedade permite a seleção de um formulário que poderá ser aberto dentro de uma situação pré-determinada. É aplicada aos componentes Botão, Grade, Lista Dinâmica e Subformulário - Quando selecionada a opção:

- [Botão](botao) - selecionando o nome de um formulário nesta opção, em seguida, deve-se utilizar a propriedade Parâmetro. O formulário abre de acordo com a configuração feita no item citado;
- [Grade](grade) - selecionando o nome de um formulário, em seguida, deve-se utilizar a propriedade Parâmetro. O formulário selecionado será apresentado em formato de colunas (componente vinculado a um campo da fonte de dados do formulário) na grade. Alguns componentes podem não aparecer na grade devido à configuração feita na propriedade Editável;
- [Lista Dinâmica](lista_dinamica) - selecionando o nome de um formulário nessa opção, aparece o botão ![mao.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/mao.png) (Acessar Formulário) ao lado do campo (no Webrun). Para acessar o formulário o usuário deve clicar sobre o botão;
- [Subformulário](subformulario) - selecionando o nome de um formulário nesta opção e, em seguida, deve-se utilizar a propriedade Parâmetro. Este formulário deverá conter apenas uma aba, caso o mesmo possua mais de uma será(ão) exibido(s) o(s) componente(s) de todas as  abas sobrepostos.

- Habilitado

Ao selecionar a opção Sim, o componente aparece habilitado para poder ser editado ou manipulado.

Observação: Os componentes [Caixa de Texto](caixa_de_texto), [Grade](grade), [Lista dinâmica](lista_dinamica), [Lista](lista), [Texto Longo](texto_longo), [Árvore](arvore) e [Texto](texto) aplicam a cor de fundo selecionada independente da propriedade Habilitado (de cada componente) estiver marcada como Sim ou Não. Já os componentes [Lista dupla](lista_dupla), [Check](check), [Opções](opcoes) e [Botão](botao) só aplicam a cor de fonte selecionada quando a propriedade Habilitado estiver marcada como Sim.

Esta propriedade não se aplica aos componentes [Gráfico](grafico) e [Moldura](moldura).

- Imagem

Aplicada aos componentes [Botão](botao) e [Imagem](imagem) ao objeto formulário

- Lista

Aplicada aos componentes [Lista](lista) e [Opções](opcoes)

- Nome

Esta propriedade é utilizada para identificar/nomear o componente/formulário.  O Maker sugere um nome diferente dos nomes dos componentes existentes no formulário para evitar que mais de um componente possua o mesmo nome.

- Paginação

Aplicada aos componentes Grade e Lista Dinâmica

- Parâmetros

Aplicada aos componentes Árvore, Botão, Grade, Lista Dupla e Subformulário - para que seja possível configurar essa propriedade, é necessário, antes, executar a configuração explicada na propriedade Formulário, e em seguida, acesse o tópico [Campos de Ligação](../opcoes_comuns_para_os_objetos_em_um_formulario/campos_de_ligacao).

- Posição X

Aplicada a todos os componentes, exceto ao objeto formulário - determina a posição do componente em relação à esquerda do formulário.

- Posição Y

Aplicada a todos os componentes, exceto ao objeto formulário - determina a posição do componente em relação ao topo do formulário.

- Quebra Automática...

Aplicada aos componentes [Texto](texto) e [Texto Longo](texto_longo)

- Subformulário

Aplicada aos componentes [Grade](grade) e [Lista Dinâmica](lista_dinamica)

- Tabulação

Esta propriedade indica a ordem de tabulação do componente em relação aos outros que compõem a aba do formulário na qual está posto. Essa ordem pode ser observada quando o usuário altera o estado do formulário/grade para o modo de inclusão ou edição e navega entre os componentes/campos usando a tecla Tab.

Esta propriedade não se aplica aos componentes Texto e Moldura e ao objeto formulário.

- Tabular

Ao selecionar a opção Sim, quando o usuário estiver navegando entre os componentes, como foi descrito no item anterior, o componente receberá foco (observada a ordem de tabulação).

Esta propriedade não se aplica aos componentes Texto e Moldura e ao objeto formulário.

Observação: A propriedade Tabular dos componentes [Botão](botao) e [Opções](opcoes) tem como valor padrão a opção Não, quanto aos demais componentes aos quais a propriedade se aplica, o valor padrão é Sim.

- Tamanho

Determina a largura do componente ou formulário.

- Tipo

Aplicado aos componentes [Caixa de Texto](caixa_de_texto), [Check](check), [Grade](grade), [Lista](lista), [Opções](opcoes) e [Texto Longo](texto_longo) - permite escolher um tipo de dado para se aplicar uma máscara. Caso o campo não esteja ligado ao banco, ela deverá ser usada junto com a propriedade Conteúdo.

Esta propriedade não se aplica aos componentes Texto, Grade, Subformulário, Imagem, Árvore, Gráfico e Moldura.

Observação: A propriedade Tipo aplicada ao componente Lista Dinâmica está depreciada.

- Visível

Permite ocultar/exibir um componente. Selecionando a opção Não, o componente não aparecerá no formulário.

Esta propriedade não se aplica ao componente Moldura e ao formulário.

Eventos

Todos os componentes/formulários possuem Eventos vinculados a eles. Para configurar um evento de um componente/formulário, clique com o botão direito do mouse e no menu suspenso que se abre e escolha qualquer um dos eventos disponíveis em Eventos.

- Ao Clicar

Aplicado a todos os componentes, com exceção do [Sub-Formulário](subformulario), da [Lista Dupla](lista_dupla) e do objeto formulário - o evento é executado assim que o usuário efetua um clique com o botão esquerdo do mouse sobre o componente ou quando o componente for um botão, pressionando a tecla Enter.

Para o componente [Árvore](arvore) - o evento ocorre entre o momento em que o usuário clica sobre a pasta ou sobre um item de uma pasta (nó).

Observações:

1. Ao utilizar este evento no componente Grade, ou em um componente Botão dentro de uma Grade, com a função Grade - Obter Linha Selecionada, sempre irá obter a linha anteriormente marcada. Este comportamento ocorre devido a ação de focar a linha ser executada depois da ação do fluxograma executado, ou seja, primeiro o fluxo que obtém o valor da linha é executado e depois a linha é focada.
2. Os símbolos "+" (mais) e "-" (menos) são utilizados para mostrar e ocultar os itens ou pastas de uma pasta, respectivamente nesta ordem.
3. O evento Ao Clicar é anulado nos componentes [Check](check), [Opções](opcoes), [Imagem](imagem), [Texto Longo](texto_longo) (HTML Básico) e [Texto Longo](texto_longo) (HTML Avançado) quando os mesmos estão com a propriedade Apenas Leitura marcada como SIM.

- Ao Entrar

Aplicado aos componentes [Caixa de Texto](caixa_de_texto), [Grade](grade), [Lista](lista), [Lista Dinâmica](lista_dinamica) e [Texto Longo](texto_longo) e ao objeto formulário - no caso de um:

- [Componente](componentes) - o evento é executado assim que o usuário efetua um clique com o botão esquerdo do mouse sobre o componente ou quando o componente recebe o foco;
- [Formulário](../definicao_de_formulario) - o evento é executado assim que o usuário abrir o formulário.

Observação: Caso este evento contenha uma ação com intuito de alterar, substituir ou desfazer o conteúdo, contido no componente [Texto Longo](texto_longo), este com a propriedade HTML Básico ou HTML Avançado, é necessário fazer esta alteração a partir de um fluxo chamado pela função Agendar Execução de Fluxo.

- Ao Modificar

Aplicado aos componentes [Grade](grade), [Caixa de Texto](caixa_de_texto), [Check](check), [Lista Dinâmica](lista_dinamica), [Imagem](imagem), [Lista](lista), [Opções](opcoes) e [Texto Longo](texto_longo) - o evento é executado assim que o usuário efetua qualquer modificação no valor contido no componente e também quando navega entre os registros, desde que o valor contido no componente em um registro difira do valor contido no componente para o qual o usuário navegar: o próximo registro ou o registro anterior.

- Ao Pressionar Tecla

Aplicado aos componentes [Caixa de Texto](caixa_de_texto), [Texto Longo](texto_longo), [Lista Dinâmica](lista_dinamica), e ao objeto formulário. O fluxo de ação associado a este evento deve possuir cinco parâmetros de entrada (três do tipo Lógico, um do tipo Inteiro e um do tipo Letras, respectivamente nesta ordem), os quais são preenchidos automaticamente pelo Webrun no momento da execução do fluxo. Por padrão (opcional), sugere-se para os nomes dos parâmetros de entrada Alt, Crtl,e Shift para cada tipo Lógico, Código da Tecla para o tipo Inteiro e Caracter da Tecla para o tipo Letras.

Observações:

1. O evento é disparado quando QUALQUER tecla for pressionada. Isso não vale para as teclas Alt, Ctrl e Shift, pois elas são capturadas quando executadas em conjunto com outra tecla. Exemplo: Ctrl + S.
2. O evento não detecta o disparo das teclas Tab, Enter, Backspace e Setas de Navegação uma vez que essas teclas possuem o efeito de tabulação e acesso para o próximo componente. Logo, caso queira que ocorra algo quando essas teclas sejam pressionadas, deve ser utilizado no evento Ao Sair.
3. Caso o evento Ao Pressionar Tecla associado a um componente retorne CANCELEVENT, o evento não será propagado, ou seja, poderá ser criada uma verificação em um fluxo que a depender do resultado, permite impedir que um determinado conteúdo não vá diretamente para o componente. Exemplo:

   1. Caso o usuário tecle a letra "a", podemos verificar, no fluxo, caso o caractere tenha sido "a" retornamos "CANCELEVENT" (Letras) e desta forma o caractere "a" não será escrito no componente.

- Ao Sair

Aplicado aos componentes [Caixa de Texto](caixa_de_texto), [Lista](lista), [Lista Dinâmica](lista_dinamica), [Texto Longo](texto_longo) e ao objeto formulário. No caso de um:

- [Componente](componentes) - o evento é executado assim que o componente perde o foco;
- [Formulário](../definicao_de_formulario) - o evento é executado assim que o usuário clica com o botão esquerdo do mouse sobre o botão Sair do formulário.

Type your expanding text here.___________________________________________________________________________

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
