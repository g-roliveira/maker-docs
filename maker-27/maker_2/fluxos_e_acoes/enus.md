---
title: "Menus"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/enus.htm"
---

## Arquivo

Menu que pode ser acessado pela combinação das teclas Alt+A e contém os itens:

- Novo - permite a criação de um novo fluxo de ações. Também acessível pela combinação das teclas (Crtl+N);
- Abrir - permite abrir um fluxo de ações. Também acessível pela combinação das teclas (Ctrl+O);
- Salvar - permite salvar um fluxo de ações em desenvolvimento. Também acessível pela combinação das teclas (Ctrl+S);
- Salvar Como... - permite rever a tela de gravação do fluxo de ações em desenvolvimento;
- Salvar todos - salva todos os fluxos abertos no momento;
- Salvar para depuração - salva o fluxo para depuração;
- Fechar fluxo - fecha o fluxo de ações em uso. Também acessível pela combinação das teclas (Ctrl+W);
- Fechar todos - fecha todos os fluxos abertos no momento. Também acessível pela combinação das teclas (Ctrl+F4);
- Propriedades - abre a tela das propriedades do fluxo de ações. Também acessível pela combinação das teclas (Ctrl+P);
- Visualizar Impressão - permite visualizar o fluxo de ações antes de imprimir;
- [Gerador de Código](gerador_de_codigo/gerador_de_codigo) - gera um arquivo contendo todos os dados cadastrados nas telas [Descritores de Sintaxes do Gerador de Código](gerador_de_codigo/descritores) e [Linguagens e Sintaxes do Gerador de Código](gerador_de_codigo/gerador_de_codigo);
- Exportar - contém opções para exportação do fluxo de ações e para a exportação do conteúdo cadastrado para a geração de código a partir da estrutura do fluxo de ação. Também acessível pela combinação das teclas (Ctrl+E);
- - Fluxo - gera um arquivo contendo a estrutura do fluxo de ação (a extensão do arquivo é MKF). Também acessível pela combinação das teclas (Ctrl+E);
  - Imagem - gera uma imagem do fluxo de ação (a extensão do arquivo é BMP). Também acessível pela combinação das teclas (Ctrl+Q);
  - Gerador de Código - exporta o código gerado.

Observação: O conteúdo exportado do Gerador de Código só poderá ser importado por meio da tela [Importação](../importacao_e_exportacao/importacao), pois o arquivo gerado pela exportação é criado com a extensão *.FRZ.

- Importar - permite importar fluxo de ações de um arquivo *.MKF. Também acessível pela combinação das teclas (Ctrl+R);
- Sair - permite sair do Editor de Fluxo de Ações.

## Editar

Menu que pode ser acessado pela combinação das teclas Alt+E e contém os itens:

- Desfazer - permite desfazer a última ação. Também acessível pela combinação das teclas (Ctr+Z). Essa opção só desfaz a ação que não foi salva no fluxo de ação;
- Copiar - copia na área de trabalho do Windows o objeto selecionado. Também acessível pela combinação das teclas (Ctrl+C);
- Recortar - recorta para a área de trabalho do Windows o objeto selecionado. Também acessível pela combinação das teclas (Ctrl+X);
- Colar - cola da área de trabalho do Windows o ultimo objeto copiado ou recortado. Também acessível pela combinação das teclas (Ctrl+V);
- Selecionar Todos - seleciona todos os objetos da área do fluxo de ações. Também acessível pela combinação das teclas (Ctrl+A);
- Excluir - exclui o(s) objeto(s) selecionado(s). Também acessível pela combinação das teclas (Tecla DEL).

## Exibir

Menu que pode ser acessado pela combinação das teclas Alt+X e contém o item:

- Janela Variáveis - mostra ou oculta a janela [Identificadores (variáveis)](exibir) na área de trabalho deste editor. Outra forma de executar esta ação pela combinação da tecla F11.

## Ajuda

Menu que pode ser acessado pela combinação das teclas Alt + U e contém o item:

- Ajuda do MakerFlow - abre o Help do Maker/Webrun. Outra forma de executar esta ação é pela combinação das teclas Alt+U.

## Atalhos da área de trabalho do Editor de Fluxos de Ações

Clicando com o botão direito do mouse sobre a área de trabalho do editor, é ativado um menu pop-up com as seguintes opções:

- ![ligação](../../image175.gif) - transforma a imagem do mouse em uma seta e linha na cor preta. Em seguida, deve ser efetuado clique com o botão esquerdo do mouse em ambos os objetos que serão ligados;
- ![processamento](../../image176.gif) - insere um [Objeto Processamento](objeto_processamento);
- ![decisão](../../image177.gif) - insere um [Objeto Decisão](objeto_decisao);
- ![interação](../../image178.gif) - insere um [Objeto Interação](objeto_interacao);
- ![subfluxo](../../image179.gif) - insere um [Objeto Subfluxo](objeto_subfluxo);
- ![comentário](../../image180.gif) - insere um [Objeto Comentário](objeto_comentario);
- ![fim](../../image181.gif) - insere um [Objeto Fim](parametro_de_retorno);
- ![novo](../../image188.gif) - insere uma nova aba para criação de fluxo;
- ![abrir](../../image189.gif) - permite [abrir um fluxo](abrir_fluxo);
- ![salvar](../../image190.gif) - permite [salvar o fluxo](salvar_fluxo) atual;
- ![salvar como](../../image185.gif) - permite [salvar o fluxo](salvar_fluxo) atual podendo alterar as propriedades da última gravação;
- ![image186.gif](../../image186.gif) - permite [salvar o fluxo](salvar_fluxo) atual e os outros abertos nas outras abas da janela;
- ![visualização de impressão](../../image187.gif) - ativa a tela para visualizar o fluxo para impressão:

![image96.jpg](../../image96.jpg)

- ![rafatorar](../../image191.gif) - Ao selecionar pelo menos um objeto no fluxo de ação e efetuar um clique sobre esta opção, então será criado um novo fluxo de ação contendo o objeto que foi selecionado no primeiro fluxo de ação (espécie de cópia). Além disso, todos os parâmetros de entrada e variáveis do fluxo de ação que estiverem sendo utilizados no objeto selecionado serão declarados automaticamente no novo fluxo de ação. Cabe ainda ressaltar que não é recomendada a refatoração do objeto Fim, pois, além do objeto Fim refatorado, no momento da criação do novo fluxo de ação, um objeto Fim será criado automaticamente; [Saiba mais!](../../dicas_e_truques/maker/refatoracao)
- - Observação: So serão refatorados objetos, decisões e variáveis que estão sendo utilizados no fluxograma.
- ![fechar fluxo](../../image192.gif) - fecha o fluxo atual.
