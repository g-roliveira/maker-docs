---
title: "Aba Desenho"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/relatorio/aba_desenho.htm"
---

Na aba desenho, é onde o relatório será desenvolvido e estruturado com os elementos que apresentarão os dados necessários e definidos pelo usuário desenvolvedor.

![image186.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image186.jpg)

Figura 1 - Tela Aba Desenho

Para acrescentar informações, utilize as ferramentas que estão disponíveis nas Barras de Ferramentas e clique na banda de relatório que desejar.

Quanto aos Menus da aba Desenho:

- Arquivo - possibilita a criação, especificação, carga, assistência e configuração da estrutura do relatório. Nele há as seguintes opções:
- - ![image131.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image131.gif) Novo... - possibilita a criação de novos relatórios, que se subdividem em:

![novos itens](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image187.jpg)

Figura 2 - Tela Novos Itens

- Assistente de Relatório - assemelha-se à criação de uma fonte de dados (aba [Dados](aba_dados_-_definindo_dados_para_relatorio)), tendo o usuário, por meio de seleções, a possibilidade de criar todo o relatório, definindo a estrutura do cabeçalho, os campos, os agrupamentos, o layout e a orientação.
- Relatório - criar um novo relatório, questionando antes se o usuário deseja salvar alterações feitas em um relatório que já esteja sendo editado.
- Matriz de Etiquetas - transforma o layout do relatório em uma etiqueta, a partir de parâmetros quanto ao tipo de impressão (matricial ou laser/jato de tinta), ao tipo de bandeja da impressora (default, seleção automática e manual) e ao tipo de produto (etiquetas pré-formatadas);
- Assistente de Referência Cruzada - assemelha-se à criação de uma fonte de dados (aba [Dados](aba_dados_-_definindo_dados_para_relatorio)), tendo o usuário, por meio de seleções, a possibilidade de criar toda a referência cruzada (espécie de matriz de dados), definindo a fonte de dados, a orientação do papel e arrastando os campos para a área de desenho da referência cruzada.
- - Novo Relatório - cria um novo relatório, questionando, antes, se o usuário deseja salvar alterações feitas em um relatório que já esteja sendo editado.
  - Abrir - abre um relatório que já tenha sido salvo.
  - Fechar - fecha um relatório que esteja aberto, questionando, antes, se um usuário deseja salvar as alterações feitas.
  - ![image286.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image286.gif) Salvar - salva as alterações feitas no relatório.
  - Salvar como - possibilita ao usuário criar uma nova cópia do relatório que esteja aberto.
  - Carregar de arquivo - abre um arquivo de relatório (exemplo: RELATÓRIO.RTM) que esteja em qualquer parte do computador.
  - Salvar para arquivo - salva uma cópia do relatório que está sendo editado em um arquivo (exemplo: RELATÓRIO.RTM) em qualquer parte do computador.
  - ![image287.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image287.gif) Configurar página - permite a edição de parâmetros relativos à estrutura da página na qual será desenhado o relatório na aba de Desenho e ao momento da impressão do relatório. Para confirmar as configurações e fechar a tela "Configuração de Página" clique no botão OK, caso contrário, clique no botão "Cancelar", assim a janela será fechada e não serão consideradas configurações feitas.

![configuração da pagina](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image188.jpg)

Figura 3 - Tela Configuração de Página

É composta pelas abas:

- Impressora - nesta aba constam os campos:
- - Impressora - são listadas todas as impressoras disponíveis na rede. Selecionando a opção Default, toda vez que for solicitada uma impressão do relatório, esse será impresso na impressora definida como sendo a padrão do sistema operacional (relativo à máquina na qual está instalado o Webrun);
  - Nome do Documento - apresenta o nome interno do documento, que é passível de edição. Uma forma de imprimir o nome do documento definido nessa propriedade é pelo uso do componente "Variável do Sistema", definindo para ele a propriedade NomedoDocumento;
  - Cópias - pode ser definida previamente a quantidade de cópias do relatório que serão impressas
  - Agrupar - marcando essa opção, caso seja impressa mais de uma cópia do relatório ao mesmo tempo, cada relatório será agrupado individualmente; desmarcando essa opção, serão impressas todas as cópias referentes à primeira página do relatório e, em seguida, todas as cópias relativas à segunda página do relatório, mantendo essa ordem de impressão até o fim do relatório.
  - Dupla Face - para impressoras que dão suporte para esse tipo de opção, pode-se selecionar a orientação "Horizontal" ou "Vertical".

- Tamanho do Papel - nessa aba constam os campos:

- - Tamanho do Papel - pode ser selecionado o tamanho do papel no qual será impresso o relatório;
  - Largura - define a largura do papel. O valor que aparece nesse campo se baseia na unidade de medida escolhida pelo item "Unidades"  do menu "Relatório";
  - Altura - define a altura do papel. O valor que aparece nesse campo se baseia na unidade de medida escolhida pelo item "Unidades"  do menu "Relatório";
  - Orientação - define a orientação que servirá de base para a impressora imprimir o relatório. No caso da escolha da opção "Resumo", por padrão, a altura do relatório será maior que sua largura; no caso da escolha da opção Paisagem", por padrão, a largura do relatório impresso será maior que a altura.
  - Origem do Papel - nesta aba, consta o campo Bandeja, no qual pode ser selecionada a bandeja relativa à impressora que foi escolhida na aba "Impressora"; assim, além de o relatório ser impresso em uma impressora específica, também a bandeja dessa impressora pode ser definida. Deixando a opção "Default" selecionada, os papéis nos quais serão impressos os relatórios partirão da bandeja principal da impressora.
- Layout - nesta aba constam os campos:
- - Colunas - apresentam a quantidade de colunas que constam no relatório, à medida que o usuário aumenta a quantidade. O valor que aparece neste campo se baseia na unidade de medida escolhida pelo item "Unidades" do menu "Relatório".
  - Largura da Coluna - caso seja definida mais de uma coluna no campo "Colunas", é possível modificar a largura de todas as colunas;
  - Posição das Colunas - caso seja definida mais de uma coluna no campo "Colunas", é possível modificar a posição de cada uma das colunas.
  - Travessia de Coluna - no caso de uma mala-direta, selecionando a opção "De cima para baixo", a ordem da impressão dos primeiros dados será direcionada para a primeira coluna e assim sucessivamente. Selecionado a opção "Da esquerda para a direita", a ordem da impressão dos primeiros dados será direcionada para a primeira linha e assim sucessivamente;
  - Espaçamento das Linhas - apresenta o espaço entre os dados impressos de uma coluna e outra.

- Margens - nesta aba, constam os campos Topo, Base, Esquerda e Direita. Neles podem ser definidas as margens relacionadas, respectivamente, com a parte superior, inferior, esquerda e direita do relatório.

- Imprimir - imprime o relatório na impressora ou pode Imprimir para Arquivo. No último caso, é necessário ir para o submenu Configurar impressão para arquivo;

- Configurar impressão para arquivo - configura impressão do relatório para um arquivo:
- - Nome do Arquivo - define o caminho do arquivo. Clicando no botão ![arquivo](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image333.gif), abre-se a tela Salvar como: crie um nome para o arquivo e salve-o. Apesar de ser necessário definir esse arquivo, no momento da geração do relatório pelo Webrun, aparecerá uma tela de download do arquivo (relatório) que foi gerado questionando o local no qual o relatório deverá ser salvo;
  - Tipo de Arquivo - define a delimitação de cada registro. Pode ser delimitado por vírgula, por tabulação ou tamanho fixo. No último caso, é necessário fixar um tamanho para cada campo colocado no relatório pela  caixa de texto "Salvar";
  - Faixas - permite selecionar faixas (Título, Cabeçalho, Detalhe, Rodapé ou Sumário) que contenham componentes para a geração do arquivo. Inicialmente, devem-se selecionar as faixas e depois os componentes.
  - Controles Disponíveis - são os componentes contidos na faixa selecionada acima:
  - ![image334.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image334.gif) - move o componente selecionado em Controles Disponíveis para Controles Selecionados;
  - ![image335.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image335.gif) - move todos os componentes de Controles Disponíveis para Controles Selecionados;
  - ![image336.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image336.gif) - move o componente selecionado em Controles Selecionados  para Controles Disponíveis;
  - ![image337.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image337.gif) - move todos os componentes de Controles Selecionados para Controles Disponíveis;
  - Controles Selecionados - são os componentes (dados/conteúdo) que farão parte do arquivo;
  - ![image338.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image338.gif) - move para cima o campo selecionado;
  - ![image339.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image339.gif) - move para baixo o campo selecionado.

Observações:

1. A ordem dos dados no arquivo é definida pelos botões: ![image340.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image340.gif) e ![image341.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image341.gif);
2. Apenas os componentes DBText, DBExtenso, DBText, Extenso, SystemVariable e Variable podem ser utilizados nessa funcionalidade.

- Editar - composta por opções simples, usadas comumente em edição de:
- - Desfazer - clicando sobre esta opção, a última ação feita na área de desenho do relatório será desfeita.
  - Refazer - clicando sobre esta opção, a última ação desfeita na área de desenho do relatório será refeita.
  - Recortar - clicando sobre esta opção, todo componente que tiver sido selecionado na área de desenho do relatório será recortado.
  - Copiar - clicando sobre esta opção, todo componente que tiver sido selecionado na área de desenho do relatório será copiado e ficará disponível na área de transferência do sistema operacional;
  - Colar - clicando sobre esta opção, todo componente que tiver sido copiado (item anterior) será colado na área de desenho do relatório.
  - Apagar - clicando sobre esta opção, todo componente que tiver sido selecionado na área de desenho do relatório será apagado;
  - Selecionar Tudo - clicando sobre esta opção, todo componente contido na área de desenho do relatório será selecionado.
  - Trazer Para Frente - clicando sobre esta opção, todo componente que tiver sido selecionado na área de desenho do relatório e estiver atrás de outro ficará sobre o outro.
  - Enviar para Trás - clicando sobre esta opção, todo componente que tiver sido selecionado na área de desenho do relatório e estiver na frente de outro ficará sob o outro.

- Visualizar
- - Barra de Ferramentas - lista todas as barras de ferramentas que podem ser habilitadas, bastando, para isso, selecionar a opção desejada.
  - Réguas - habilita a régua superior e esquerda da área de desenho da aba Desenho;
  - Opções de Grade... - clicando sobre esta opção, aparece a tela "Opções da Grade" contendo os campos:
  - - Mostrar Grade - mostra uma grade na área de desenho.
    - Posicionar Pela Grade - marcando esta opção, toda vez que o usuário clicar com o botão esquerdo do mouse sobre um componente e arrastá-lo na área de desenho do relatório de um lugar para outro, a ação interna do mouse que controla a movimentação do componente se baseará nos campos "Espaçamento X" e "Espaçamento Y".
    - Espaçamento X - informa a distância em que o componente se movimentará horizontalmente enquanto estiver sendo arrastado pelo mouse.
    - Espaçamento Y - informa a distância em que o componente se movimentará verticalmente enquanto estiver sendo arrastado pelo mouse.

- Mostrar Dados - marcando esta opção, o gerador de relatórios mostra, previamente, o primeiro registro que será impresso quando o usuário navegar para a aba "Visualizar Impressão".
- Themes - clicando sobre esta opção, a tela do relatório sofrerá alteração conforme temas (Skin) disponibilizados: Aluminum, OffcieXP, Office2003, Whidbey, Default.

- Relatório - possibilita a exibição de áreas do relatório, controles de paginação e unidades de medida utilizadas:
- - Dados - espaço destinado à seleção da principal fonte de dados do relatório (criada na aba [Dados](aba_dados_-_definindo_dados_para_relatorio)), na qual o Gerador de Relatórios se baseia para apresentar os dados;
  - Título - quando marcada esta opção, habilita a banda Título (quando habilitada, é a primeira área).
  - Resumo - quando marcada esta opção, habilita a banda de Sumário (penúltima área possível de aparecer).
  - Cabeçalho - quando marcada esta opção, habilita a banda de Cabeçalho (segunda área possível de aparecer).
  - Rodapé - quando marcada esta opção, habilita a banda de Rodapé (antepenúltima área possível de aparecer;
  - Estilo de Página - quando marcada esta opção, habilita a área de estilo de página (última área possível de aparecer);
  - Grupos - possibilita a criação de níveis de hierarquia, tomando como base um campo da fonte de dados (criada na aba de Dados) ou um componente inserido no relatório, nos quais uma informação poderá conter outras (grupos internos). Também pode ser interpretado como um delimitador de dados vinculados a ele próprio. Possui duas bandas, a de Cabeçalho e a de Rodapé, ficando cada uma delas antes e depois da banda de detalhe da aba de Desenho, respectivamente. Devem ser considerados os itens:

- Dividir em - o agrupamento pode ser definido a partir de um campo da fonte de dados (criada na aba de Dados), quando selecionada a opção Campo de Dados e a partir de um componente inserido na área do desenho da aba de Desenho. A partir dessa escolha, é possível selecionar o campo ou o componente que determinará um grupo;
- Mudança do grupo - cada vez que um grupo for iniciado, há a possibilidade de ele só começar a ser impresso no início de uma nova página, quando selecionada a opção Iniciar nova página. É possível reiniciar a numeração das páginas do relatório (colando o componente  Variável do Sistema no Cabeçalho/Rodapé do relatório ou do grupo e definindo seu tipo como um dos tipos de apresentação do número da página) cada vez que um novo grupo for iniciado, marcando a opção Reinicia a numeração de páginas. Também é possível iniciar a impressão de um grupo em uma nova página desmarcando a opção Iniciar nova página e informando a quantidade-limite de registros do grupo na caixa de texto da opção Nova página se menor que;
- Manter o grupo unido - marcando esta opção, o gerador de relatórios tentará juntar todos os registros vinculados ao grupo em uma mesma página; não conseguindo mantê-los unidos, repete a estrutura de Cabeçalho/Rodapé do grupo, apresentando os demais dados em páginas seguintes.
- Reimpressão de cabeçalhos de grupo em páginas subsequentes - marcando esta opção, a estrutura desenhada na área Cabeçalho e/ou Rodapé será reimpressa a cada página que contiver o grupo;

- Retrato - semelhante à opção situada no submenu Configuração de página do menu Arquivo. Marcando esta opção, a área Desenho aumentará seu tamanho verticalmente.
- Paisagem - semelhante à opção situada no submenu Configuração de página do menu Arquivo. Marcando esta opção, a área Desenho aumentará seu tamanho horizontalmente.
- Armazenar páginas na memória - marcando esta opção, no momento em que o usuário estiver navegando entre as páginas do relatório, cada uma delas será armazenada na memória, não tendo o gerador de relatórios que recriar uma página em que o usuário já tenha navegado.
- Ajuste de passagens - composto por duas opções:
- - Uma passagem - deve ser marcada,por exemplo, em todos os relatórios que não utilizam subrelatórios;
  - Duas passagens - deve ser utilizada quando há pelo menos um subrelatório contido no relatório (cada vez que o subrelatório é impresso, o relatório no qual está inserido tem que ser impresso também, aumentando o tempo para a criação e visualização completa, no momento em que o usuário o está gerando ou visualizando).
- Unidades - a partir da escolha feita neste submenu, a régua que fica na parte superior e esquerda (que pode ser habilitada no submenu Réguas do menu Visualizar), será redesenhada, adequando-se à opção escolhida. Pixels de Vídeo, Pixels de Impressora, Polegadas, Milímetros e Milhares de milímetros.

Na associação de um componente ao campo da origem de dados, caso se apresente, na lista da fonte de dados, NÃO DEFINIDO, acesse o tópico O que fazer quando apresenta campo NÃO DEFINIDO e observe como resolver esse problema.

Observação: A largura do texto utilizada no editor de texto formatado obedece a largura do componente na tela desenho do relatório.
