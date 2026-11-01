---
title: "Barras de Ferramentas em Relatórios"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/relatorio/barras_ferramentas_relatorios.htm"
---

Observe abaixo as opções de Barras de Ferramentas do gerador de relatórios. Para ativar ou desativar as ferramentas, utilize o comando Barras de Ferramentas do menu Visualizar e clique sobre o nome da barra que deseja utilizar:

## Componentes Padrão

- ![image369.gif](../../image369.gif) - Selecionar Objeto;
- ![image370.gif](../../image370.gif) - Texto -  utilizado para inserir rótulos em qualquer área do relatório. O conteúdo que o componente apresentará deve ser digitado no campo Ajuste o valor;
- ![image420.gif](../../image420.gif) Memorando - possibilita inserir um texto fixo dentro de uma área delimitada e ajustada pelo usuário. Executando clique direto no objeto inserido no relatório e selecionando a opção Linhas..., é exibido o Editor de Memorando. Sobre o editor, deve-se observar que o botão ![image372.gif](../../image372.gif) permite carregar um conteúdo texto e o botão ![image373.gif](../../image373.gif) permite salvar o conteúdo da tela;
- ![image375.gif](../../image375.gif) Variável do Sistema - ferramenta com opções de exibição de conteúdos preestabelecidos, permitindo ao usuário escolher uma no campo Tipo da Variável;
- ![image421.gif](../../image421.gif) Variável - ferramenta com opções de programação de ações (utilização de código Object Pascal - recurso para usuário mais avançado). A edição da ação pode ser pela opção Cálculo... (clique direito sobre o objeto) ou pela aba Cálculo;
- ![image422.gif](../../image422.gif) Imagem - ferramenta que permite definir uma imagem fixa para o relatório (utilize imagens do tipo BMP e JPEG para gerar relatório no formato PDF e HTML). Clique com o botão direito do mouse no componente e escolha a opção Figura;
- ![image423.gif](../../image423.gif) Polígono - permite desenhar no relatório uma figura geométrica, dentre as opções do campo Tipo de Polígono;
- ![image424.gif](../../image424.gif) Linha - permite desenhar no relatório uma linha. Utilize as opções do campo Tipos de Linha para configurar a exibição;
- ![image425.gif](../../image425.gif) Código de Barras - este recurso converte um valor numérico em um gráfico de Código de Barras. O usuário deve usar a aba Cálculo para codificar a ação em Object Pascal;
- ![image838.gif](../../image838.gif) 2DBarCode - código de barras com efeito gráfico bidimensional;
- ![image427.gif](../../image427.gif) Gráfico - este recurso permite gerar um gráfico. O usuário deve usar a aba Cálculo para codificar a ação em Object Pascal;
- ![image428.gif](../../image428.gif) Texto Formatado - componente semelhante ao componente Memorando, exceto pela opção de se poder [formatar seu conteúdo](editor_de_texto_formatado), inclusive adicionando campos das fontes de dados do relatório nele.

## Componentes de Dados

- ![image383.gif](../../image383.gif) Campo-Texto - este componente difere do objeto ![image370.gif](../../image370.gif) Texto, pois permite inserir dados no relatório, utilizando uma Fonte de dados e um Campo de origem (definidos na aba Dados);
- ![image430.gif](../../image430.gif) Campo Memorando - este componente difere do objeto ![image420.gif](../../image420.gif) Memorando, pois possibilita inserir um texto dentro de uma área delimitada e ajustada pelo usuário, utilizando uma Fonte de dados e um Campo de origem (definidos na aba Dados);
- ![image431.gif](../../image431.gif) Campo Variável - este componente difere do objeto ![image421.gif](../../image421.gif) Variável, pois a ferramenta utiliza uma Fonte de dados e um Campo de origem (definidos na aba Dados) para executar um cálculo (geralmente usado para a área de Sumário do relatório) pelas opções da tela Cálculos (acione com um clique direito sobre o objeto e selecione o Tipo de Cálculo);
- ![image432.gif](../../image432.gif) Campo com Código de Barras - este componente difere do objeto ![image381.gif](../../image381.gif) Código de Barras, pois a ferramenta utiliza uma Fonte de dados e um Campo de origem (definidos na aba Dados) e converte um valor em um gráfico de código de barras;
- ![image839.gif](../../image839.gif) DB2DBarCode - código de barras com efeito gráfico bidimensional;
- ![image434.gif](../../image434.gif) Campo Gráfico - permite gerar gráficos a partir dos dados informados na aba Dados. Após inserir o componente no relatório, clique com o botão direito do mouse no componente e selecione a opção Editar Gráfico;

Observação: As opções de funções do componente "Gráfico" no Report Bulder não estão implementadas, caso o usuário tenha necessidade de fazer um gráfico que calcule uma media por exemplo, o mesmo deve fazer um select nos dados para fazer o calculo desejado.

- ![image435.gif](../../image435.gif) Campo Texto Formatado - este componente difere do objeto ![image428.gif](../../image428.gif) Texto Formatado, pois comporta-se como o ![image384.gif](../../image384.gif) Campo Memorando (possibilita conteúdo com múltiplas linhas utilizando uma Fonte de dados e um Campo de origem definidos na aba Dados) e possui propriedades diferentes;
- ![image436.gif](../../image436.gif) Campo Imagem - este componente difere do objeto ![image388.gif](../../image388.gif) Imagem, pois a ferramenta utiliza uma Fonte de dados e um Campo de origem (definidos na aba Dados). Utilize imagens do tipo BMP e JPEG para gerar relatório no formato PDF e HTML.

## Alinhamento ou Espaçamento

- ![image392.gif](../../image392.gif) Alinhar as margens esquerda - este componente alinha os objetos selecionados para a posição mais à esquerda entre eles;
- ![image393.gif](../../image393.gif) Alinhar os centros horizontais - este componente iguala a posição dos objetos selecionados horizontalmente;
- ![image394.gif](../../image394.gif) Alinhar as margens direitas - este componente alinha os objetos selecionados para a posição mais à direita entre eles;
- ![image395.gif](../../image395.gif) Alinhar os topos - este componente alinha os objetos selecionados para a posição mais acima entre eles;
- ![image396.gif](../../image396.gif) Alinhar os centros verticais - este componente iguala a posição dos objetos selecionados verticalmente;
- ![image397.gif](../../image397.gif) Alinhar os rodapés - este componente alinha os objetos selecionados para a posição mais abaixo, entre eles;
- ![image398.gif](../../image398.gif) Espaçar igualmente na horizontal - este componente iguala o espaço dos objetos selecionados horizontalmente;
- ![image399.gif](../../image399.gif) Espaçar igualmente na vertical - este componente iguala o espaço dos objetos selecionados verticalmente;
- ![image400.gif](../../image400.gif) Centralizar horizontalmente na faixa - este componente iguala os objetos selecionados horizontalmente entre as margens do relatório;
- ![image401.gif](../../image401.gif) Centralizar verticalmente na faixa - este componente iguala os objetos selecionados verticalmente entre as margens da banda em que se encontram;

## Componentes Avançados

- ![image402.gif](../../image402.gif) Região - este componente é utilizado como container para agrupar componentes. Após inserir o objeto Região, arraste e solte o componente desejado para a área interna;
- ![image403.gif](../../image403.gif) Sub-relatório - este componente é utilizado para inserir um relatório complementar. É gerada automaticamente uma aba na parte inferior do relatório principal, onde podemos estruturar um relatório com os mesmos componentes citados neste tópico;
- ![image437.gif](../../image437.gif) Quebra de Página - componente que marca a quebra de página;
- ![image404.gif](../../image404.gif) Referência cruzada - este componente é utilizado para gerar automaticamente uma matriz baseada numa Fonte de dados (definida na aba Dados) e segue a estruturação disponível na tela Configurar Referência Cruzada, acionada a partir do comando Configurar, acionado pelo botão direito do mouse sobre o objeto;

## Padrão

- ![image405.gif](../../image405.gif) Novo - este componente equivale ao comando Novo do menu Arquivo da aba Desenho. Permite iniciar a criação de um novo Relatório, de acordo com as opções da janela Novos Itens;
- ![image406.gif](../../image406.gif) Abrir - este componente equivale ao comando Abrir do menu Arquivo da aba Desenho. Permite abrir um Relatório disponível na lista da tela Abrir;
- ![image439.gif](../../image439.gif) Salvar - esse componente equivale ao comando Salvar do menu Arquivo da aba Desenho. Permite gravar um Relatório;
- ![image438.gif](../../image438.gif) Configuração de Página - este componente equivale ao comando Configurar Página... do menu Arquivo da aba Desenho. Permite configurar o modelo de página para o relatório (acesse o tópico Aba Desenho - Maker Reports no qual comentamos a funcionalidade desta opção);
- ![image409.gif](../../image409.gif) Imprimir - este componente equivale ao comando Imprimir do menu Arquivo da aba Desenho. Permite imprimir o conteúdo da aba Desenho ou exportar em formato de arquivo;
- ![image410.gif](../../image410.gif) Visualizando a impressão - este componente equivale a clicar na aba [Visualizar a Impressão](aba_visualizacao_visualize_imprima_relatorios) (acesse este tópico e observe os detalhes da aba);
- ![image440.gif](../../image440.gif) Recortar - este componente equivale ao comando Recortar do menu Editar;
- ![image412.gif](../../image412.gif) Copiar - este componente equivale ao comando Copiar do menu Editar;
- ![image413.gif](../../image413.gif) Colar - este componente equivale ao comando Colar do menu Editar;
- ![image414.gif](../../image414.gif) Vincular Campos de Pesquisa - este componente, quando acionado, apresenta a seguinte tela:

![image202.jpg](../../image202.jpg)

Quando ocorre esta vinculação, o componente texto associado (no momento da impressão ou visualização do relatório) irá exibir o conteúdo definido no filtro (sobre filtro, acesse os tópicos [Definindo os dados para um relatório](aba_dados_-_definindo_dados_para_relatorio) e [Aba Visualização - visualize e imprima relatórios](aba_visualizacao_visualize_imprima_relatorios)). A vinculação do campo de pesquisa funciona a partir do momento em que é definido um filtro e a associação dos componentes ![image370.gif](../../image370.gif) Texto e ![image414.gif](../../image414.gif) Vincular Campos de Pesquisa. Na impressão ou visualização do relatório, será exibido o conteúdo definido no filtro.

- ![image415.gif](../../image415.gif) Informar os campos para atualização - este componente é utilizado juntamente com ![image374.gif](../../image374.gif) Texto Formatado, permitindo dinamizar um conteúdo pelo usuário, antes da impressão do relatório. Siga os passos do exemplo abaixo:
- Insira um ![image374.gif](../../image374.gif) Texto Formatado no relatório.
- Clique no componente ![image415.gif](../../image415.gif) - Informar os campos para atualização e observe a tela Atualização de Campos do Relatório que é exibida.
- Selecione o Objeto que deseja configurar como atualizável e inclua na caixa Atualizar. Utilize o botão ![image416.gif](../../image416.gif) para adicionar ou o botão ![image417.gif](../../image417.gif) para tirar da lista de atualizáveis.
- Execute um clique duplo sobre o Objeto que será atualizável para definir uma descrição; um título simplificado (não pode utilizar espaços em branco, caracteres especiais ou acentuação na Descrição do campo).
- Clique no botão OK para confirmar a descrição.
- Clique no botão OK para confirmar os campos atualizáveis.
- Quando clicar na aba [Visualizar Impressão](aba_visualizacao_visualize_imprima_relatorios), será incluído o botão ![editar campos](../../image418.gif) que ativará a lista de campos atualizáveis do relatório.
- Execute um clique duplo sobre o objeto sempre que desejar atualizar o conteúdo original do campo, antes da impressão do relatório. Não se esqueça de ![atualizar](../../image419.gif) sempre após sair do editor, para que o conteúdo seja exibido no relatório.

Observações:

1. O componente "Extenso" foi transformado em propriedade dos componentes "Variável", "Campo Texto", "Campo Calculado" e "Referência Cruzada" (campo inteiro ou numérico contido na configuração do componente). Sendo assim, é necessário clicar com o botão direito do mouse sobre o componente e verificar a opção "Formato de Apresentação";
2. Ao gerar relatórios no Webrun com imagens do tipo .PNG e .GIF salvas no banco de dados, apresenta-se a mensagem de erro: "Unknown Graphic Format". Para gerar o relatório com imagens utilize com extensões BMP ou JPEG.
3. Ao inserir um dado na tabela através de um componente [Texto Longo](../formulario/componentes/texto_longo) sendo o mesmo configurado para o valor HTML Básico ou HTML avançado, o dado só poderá ser impresso em um relatório, através dos componentes Texto formatado ou Campo Texto formatado. Porém não será WYSWYG, pois estes componentes são baseados no padrão de formatação RTF e não HTML
