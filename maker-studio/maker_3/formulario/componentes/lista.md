---
title: "Lista"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/formulario/componentes/lista.htm"
---

# image163.png   Lista

Este componente se difere da Lista Dinâmica, pois ele não busca informações em uma outra tabela. A origem dos dados é estática e ele armazena suas próprias informações. A ação que ele fará será gravar um desses dados em um campo da tabela principal.

As configurações de algumas das propriedades da Lista na Propriedade Lista, cadastram-se em itens que aparecerão no componente, já na propriedade Valores cadastram-se dados correspondentes aos armazenados na propriedade Lista, que serão gravados no campo de uma determinada tabela.

Para a exclusão de uma linha da janela Lista de valores e descrição, é necessário posicionar o cursor do mouse sobre qualquer uma das tuplas (coluna x linha) e pressionar a combinação de teclas Ctrl + Delete.

![image1142.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image164.png)

Todos os componentes possuem Propriedades e Eventos. Para conhecê-los [clique aqui](../propriedades_e_eventos).

Observações:

- Para adição de uma nova linha na tela "Lista de valores e descrição", pressione a tecla [Tab] ou [Insert].
- Caso o usuário determine um valor nulo ou branco na Lista de valores e descrição, ao publicar o projeto, não será possível abrir o formulário que contém o componente.

Propriedades

- Lista

Configura as opções que estarão disponíveis para seleção pelo usuário final. Ao clicar sobre o botão   nessa opção, aparece a tela Lista de valores e descrição. Essa tela contém:

Uma grade com as colunas:

- Valor - o valor contido nesta coluna é o valor que será gravado no campo apontado pelo usuário (propriedade Campo do menu suspenso; propriedade Campo, nesse contexto), assim que o usuário selecionar uma das opções no componente;
- Descrição - o valor contido nessa coluna é o valor que aparece no componente para facilitar a escolha do usuário. Esta propriedade, não suporta valores em branco, ou seja, vazio. Caso seja necessário simular uma descrição vazia, informe um caracter em branco.
- Botão OK - clicando sobre ele, a tela fecha e todas as configurações executadas são gravadas;
- Botão Cancelar - ao clicar sobre ele, todas as configurações feitas, desde o momento em que a tela foi aberta, serão desconsideradas e a tela é fechada.

- Valores

Esta propriedade possui a mesma função da propriedade descrita pela propriedade Lista.

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
