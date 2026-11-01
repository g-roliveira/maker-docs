---
title: "Imagem"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/imagem.htm"
---

# image161.png   Imagem

Com este componente torna-se possível exibir imagens no formulário. Este componente possui quatro Propriedades que controlam a forma de exibição da imagem:

- associe a um campo da origem do formulário para armazenar uma imagem (podendo ser uma foto) por meio da propriedade Campo;
- associe a um campo da origem do formulário para armazenar uma imagem (da digital, utilizando um leitor biométrico) por meio da propriedade Impressão digital;
- associe a uma imagem fixa, por meio da propriedade Imagem;
- Associe a uma imagem fixa, informado o endereço e nome na Web, por meio da propriedade URL.

Estando o Formulário em modo de inclusão ou alteração:

- Ao posicionar o mouse sobre o componente, aparecem dois botões na parte inferior direita dele. Com relação ao:
- - primeiro botão - ao receber um clique, aparece a tela Webrun Digital Capture. Nela consta a área da imagem capturada por uma webcam (instalada no computador em que está sendo usado o Webrun) e o botão Capturar Imagem. Ao clicar nele, será capturada a imagem que estava sendo transmitida pela webcam. Por fim, é necessário fechar a tela para que a imagem capturada apareça no componente Imagem;
  - segundo botão - ao receber um clique, aparece a tela Ampliar imagem (na janela que envolve esta tela pode-se utilizar o botão Maximizar da barra de título, a fim de que a imagem seja visualizada em tamanho maior).
  - tendo sido preenchida a propriedade [Campo](../propriedades_e_eventos#campo) deste componente no Maker, ao ser efetuado um clique sobre ele, aparecerá a tela Escolha a imagem, na qual consta:
  - - campo Caminho da Imagem - local no qual deve ser informado manualmente o caminho da imagem que será armazenada no campo;
    - botão Procurar - ao receber um clique, aparece a tela Escolher Arquivo, a partir da qual se pode escolher a imagem (caminho do arquivo) que será armazenada no campo;
    - botão Modificar - tendo sido definido o local em que se encontra a imagem (campo Caminho da Imagem), ao receber um clique, a imagem é carregada no componente, mas a sua gravação no campo só se efetiva após a gravação da inserção ou da alteração do registro no formulário;
    - botão Webcam - ao receber um clique, aparece a tela Webrun Digital Capture. Nela consta a área da imagem capturada por uma webcam (instalada no computador em que está sendo usado o Webrun) e o botão Capturar Imagem. Ao clicar nele, será capturada a imagem que estava sendo transmitida pela webcam. Por fim, é necessário fechar a tela para que a imagem capturada apareça no componente Imagem;
    - botão Nenhuma - remove a imagem que estava carregada no componente.

Lente de Aumento - Essa nova propriedade possibilita a vinculação de uma lente de aumento ao componente imagem.

Caso o componente seja alterado dinamicamente, os dois botões que apareciam ao posicionar o mouse sobre o componente não serão exibidos.

Associando o caminho da imagem na consulta SQL

A partir da versão 3, é possível acrescentar o caminho relativo de uma imagem em uma consulta SQL e associá-la ao componente Imagem, desta forma, o Webrun buscará a imagem no caminho descrito. Ex.:

Para o SQL abaixo:

Select

   fr_acao.aco_codigo,

   fr_acao.aco_nome,

   'Skins/Default/advanced_query.gif' As "Imagem"

From

   fr_acao

Se associarmos o componente Imagem ao campo "Imagem" do SQL acima, o Webrun exibirá a imagem 'advanced_query.gif' relativa ao seu contexto.

Observações:

1. Ao obter uma imagem em um fluxo na camada servidor, a mesma não pode ser passada para um fluxo na camada cliente.

2. As imagens capturadas através da Webcam são armazenadas na pasta Upload no contexto do Webrun.
3. A propriedade Descrição não tem efeito para o componente Imagem.
4. Para que a imagem fique atrás de outro componente clique com o botão direito do mouse sobre o componente Imagem e em Propriedade selecione a opção Tipo de Exibição como Nenhum e, em seguida, selecione a opção Controles e clique em Trazer para frente.
5. Quando um componente imagem está vinculado a um campo não é possível definir seu modo de exibição, sendo que por padrão o modo de exibição será "Estendido".
6. Não é possível obter o valor de um campo Imagem e atribuir diretamente a um componente imagem, pois o valor gravado no banco é do tipo binário, assim sendo necessário que o valor seja guardado em um arquivo, como mostra o [exemplo](../../../dicas_e_truques/componente/alterando_o_valor_do_componente_imagem_sem_vinculo_ao_banco).
7. O componente imagem é um componente que não recebe foco.

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Propriedades

- Altura do Zoom

Determina o zoom da altura da imagem. Só é visível quando a propriedade Tipo de Exibição está configurada como Galeria.

- Exibição da Imagem

Configura a forma como a imagem é apresentada no componente. Selecionando a opção:

- Estender - redimensiona a imagem, de modo que ocupe todo o espaço do componente;
- Centralizado - centraliza a imagem no centro do componente;
- Repetir - repete a imagem em todo o espaço do componente;
- Repetir na Horizontal - repete a mesma imagem lado a lado até o limite horizontal do componente;
- Repetir na Vertical - repete a imagem uma sobre a outra até o limite vertical do componente.

Caso o componente esteja vinculado a um campo da fonte de dados do formulário, a exibição da imagem sempre será estendida.

- Impressão Digital

Utilizada para informar o campo (fonte de dados vinculada ao formulário) no qual será gravado o código da impressão digital.

- Largura do Zoom

Determina o zoom da Largura da imagem. Só é visível quando a propriedade Tipo de Exibição está configurada como Galeria.

- Tipo de Exibição

Disponibiliza as opções:

- Desktop - quando marcada esta opção e tendo sido informado o nome do campo (propriedade Campo) ao qual o componente Imagem está associado, após a efetuação de dois cliques sobre o componente, será possível a seleção de uma imagem contida em qualquer parte do computador;
- Galeria - quando marcada esta opção, o Webrun considerará a imagem escolhida na propriedade Imagem. Ao clicar sobre o componente, será aberta uma nova janela contendo a imagem, a qual poderá ser redimensionada (através da borda da janela), fornecendo suporte para uma melhor visualização;
- Nenhum - quando marcada esta opção, será possível a sobreposição de outros componentes sobre o componente Imagem.

- URL

Utilizada para apresentar uma imagem contida em qualquer site, bastando para isso que o usuário informe o endereço no qual ela pode ser encontrada (exemplo: http://www.google.com.br/intl/pt-BR_br/images/logo.gif).

- Imagem

Permite a seleção de uma imagem da Galeria de Imagens para exibição. A imagem a ser selecionada deve existir na Galeria de Imagens.

- Para vincular uma imagem, selecione a imagem (a imagem ficará com a borda laranjada) e clique no botão Selecionar (imagens podem ser gravadas no Maker pela opção Galeria de Imagens do menu Projeto);
- Para desvincular uma imagem do formulário, clique no botão Nenhum;

A partir da versão 3 do Webrun, é possível acrescentar o caminho relativo de uma imagem em uma consulta SQL e associá-la ao componente Imagem, desta forma, o Webrun buscará a imagem no caminho descrito. Ex.:

Para o SQL abaixo:

Select

fr_acao.aco_codigo,

fr_acao.aco_nome,

'Skins/Default/advanced_query.gif' As "Imagem"

From

fr_acao

Ao associar o componente Imagem ao campo "Imagem" do SQL acima, o Webrun exibirá a imagem 'advanced_query.gif' relativa ao seu contexto.

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

____________________________________________________________________________

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image16.png)
