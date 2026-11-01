---
title: "Definindo Série para o Componente Gráfico"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/definindo_serie_componente_grafico.htm"
---

Após ativar a Propriedade Séries do componente Gráfico, será exibida a seguinte tela:

![image317.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image317.jpg)

Observe as opções da tela:

1. Aba Principal

Através desta aba defina:

- Título - defina o título principal do gráfico. Equivalente a Propriedade Título do componente;
- ![image629.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image629.gif) - este botão permite adicionar séries ao gráfico;
- ![image630.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image630.gif) - este botão permite excluir séries do gráfico;
- Séries - esta área permite configurar:
- - ![image631.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image631.gif) (Campo check) - quando marcado, ativa a exibição da série no gráfico;
  - Tipo - permite selecionar o tipo de gráfico para a série. Selecione entre as opções de gráfico: Barra, Área, Linha, Pizza, Gantt, Barra Horizontal, Área Horizontal ou Linha Horizontal;
  - Título - permite indicar um título para descrever a série;
  - ![image632.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image632.gif) - controles de navegação entre as séries do gráfico e controles de confirmação e cancelamento quando editamos o título da série;
  - ![image633.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image633.gif) - ativa a tela Propriedades da Série:

  ![image1061.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1061.jpg)

  São opções da tela Propriedades da Série:

  - Título - visualiza e edita a descrição da série;
  - Tipo - permite selecionar o tipo de gráfico para a série. Selecione entre as opções de gráfico: Barra, Área, Linha, Pizza, Gantt, Barra Horizontal, Área Horizontal ou Linha Horizontal;
  - Cor para cada - habilita a definição automática de cor para cada faixa de dados da série;
  - Visível - quando marcado, ativa a exibição da série no gráfico;
  - Exibir Marcas -para determinados tipos de gráficos, esta opção apresentará um rótulo no ponto do gráfico (por exemplo, para gráfico do tipo colunas, poderá mostrar uma etiqueta no topo da coluna). A marca dependerá das definições aplicadas em Cor e Estilo da Marca;
  - Cor - define a cor da linha que liga a faixa da série ao seu rótulo;
  - Cor Personalizada - ao receber um clique, aparece a tela Cor, a partir da qual é possível personalizar a cor que será utilizada no gráfico;
  - Estilo da Marca - permite selecionar uma opção de Marca entre as opções:
  - 1. Etiqueta - informação definida em Campo Etiqueta da aba Fonte de Dados;
    2. Etiqueta e Porcentagem - geralmente esta opção é utilizada para gráfico circular de setores, informação definida em Campo Etiqueta da aba Fonte de Dados e do valor informado em Campo Valor X (o gráfico calcula o percentual correspondente a soma dos valores, para cada setor);
    3. Etiqueta, Porcentagem e Total - apresenta o valor informado em Campo Etiqueta da aba Fonte de Dados, o valor informado em Campo Valor X e o valor correspondente a soma dos valores da faixa especificada;
    4. Etiqueta, Porcentagem e Total - apresenta o valor informado em Campo Etiqueta da aba Fonte de Dados, o valor informado em Campo Valor Y;
    5. Legenda - modifica o contexto dos rótulos dos itens da faixa apresentando uma estrutura de legenda no seu interior;
    6. Porcentagem - exibe os percentuais correspondentes a cada item da faixa;
    7. Porcentagem e Total - exibe os percentuais correspondentes a cada item da faixa e a soma dos valores da faixa;
    8. Valor - exibe os valores de cada item da faixa;
    9. Valor do Eixo X - exibe o valor informado em Campo Valor X;
    10. Valor do Eixo X, Valor do Eixo Y - exibe o valor informado em Campo Valor X e o valor informado em Campo Valor Y.
  - Aba Fonte de Dados - local onde definimos quais dados serão utilizados no gráfico. Esta aba está composta pelas seguintes opções:
  1. Banco de Dados - habilita opções que através de uma consulta, definiremos os dados para o gráfico:

     1. ![image634.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image634.gif) - abre o [Assistente SQL](formulario/assistente_sql/iniciando_com_o_assistente_sql) para a criação da consulta para o gráfico. Ao lado do botão existe um indicador que analisa a consulta e sinaliza se está correta ou não. Caso esteja correta, será exibido o ícone ![image635.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image635.gif), caso contrário, será exibido o ícone ![image636.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image636.gif);
     2. Campo Etiqueta - opção para definir o campo que representa o rótulo de cada faixa;
     3. Campo Valor X - opção válida para os gráficos do tipo Barra, Área, Linha, Barra Horizontal, Área Horizontal e Linha Horizontal: define os valores para este eixo do gráfico;
     4. Campo Valor - opção válida para gráficos do tipo Pizza, onde determinamos o campo contendo o valor que desenhará a proporção da fatia do item;
     5. Campo Data Início - opção válida para gráficos do tipo Gantt, onde determinamos o campo contendo datas iniciais de uma tarefa/atividade do projeto;
     6. Campo Valor Y - opção válida para os gráficos do tipo Barra, Área, Linha, Barra Horizontal, Área Horizontal e Linha Horizontal: define os valores para este eixo do gráfico;
     7. Campo Data Fim - opção válida para gráficos do tipo Gantt, onde determinamos o campo contendo datas finais de uma tarefa/atividade do projeto.
  2. Fluxos de Ações - habilita um campo onde podemos informar um fluxo contendo valores para constituir o gráfico. O fluxo escolhido deverá retornar uma lista de lista, no qual o primeiro valor será eixo Y e o segundo valor será eixo X, pois o Webrun espera nesta ordem.

- Aba Opções - as opções desta aba estão ligadas ao tipo de gráfico selecionado:
- 1. Para o Tipo Barra e Tipo Barra horizontal:
  - - 1. Disposição - controla a exibição das colunas do gráfico. Apresenta as opções:
      2. Lado a Lado - dispõe as barras uma ao lado da outra;
      3. Empilhadas - concentra os valores de cada item da faixa de valores em uma mesma coluna;
      4. Auto-Empilhamento - concentra os valores de cada item da faixa de valores em uma mesma coluna;
      5. Normal - dispõe as barras uma ao lado da outra.
    1. Para o Tipo Área e Tipo Área Horizontal:

       1. Degrau - controla a forma gráfica da área preenchida, apresentando uma forma piramidal ou uma forma Degrau (quando este apresenta ativo).
    2. Para o Tipo Linha e Tipo Linha Horizontal:

       1. Tipo de Plotagem - a linha do gráfico pode ser desenha de forma contínua (quando seleciona a opção Caneta) ou pontilhada (quando escolhe a opção Pontos);
       2. Espessura da Linha - esta opção define a espessura da linha contínua ou do pontilhado definido em Tipo de Plotagem.
    1. Para o Tipo Pizza:

       1. Circular - não influencia na aparência do gráfico;
       2. Distância da Maior Fatia - define o valor em pontos, correspondente ao afastamento da fatia de maior valor em relação às demais do gráfico.
    5. Para o Tipo Gant:

       1. Campo ID da Tarefa - campo numérico que identifica o início da tarefa;
       2. Campo ID da próxima Tarefa - campo numérico que identifica o início da próxima tarefa.

1. Aba Opções

![image319.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image319.jpg)

Através desta aba defina:

- Legenda - controle a exibição da legenda ativando ou não esta opção;
- Estilo - permite especificar os valores que serão apresentados na legenda. Selecione entre as opções:
- - Automático - obtém os valores naturais, indicados na série do gráfico;
  - Últimos Valores - obtém os valores naturais, indicados no ultimo registro da série do gráfico;
  - Paleta - obtém os valores naturais, indicados na série do gráfico
  - Séries - apresenta o próprio nome da série como legenda;
  - Valores - obtém os valores naturais, indicados na série do gráfico.
- Conteúdo - configura a exibição de valores e títulos na legenda. Entre as opções listadas, escolha:
- - Porcentagem e Etiqueta - apresentará o percentual correspondente a cada faixa em relação a soma dos valores e seu rótulo correspondente. Geralmente utilizado para gráfico circular de setores;
  - Valor e Etiqueta - apresentará o valor correspondente a cada faixa e seu rótulo correspondente;
  - Porcentagem - apresentará o percentual correspondente a cada faixa do gráfico, em relação a soma dos valores. Geralmente utilizado para gráfico circular de setores;
  - Etiqueta e Porcentagem - apresentará o rótulo e o percentual de cada faixa. Geralmente utilizado para gráfico circular de setores;
  - Etiqueta e Valor - apresentará o rótulo e o valor de cada faixa do gráfico;
  - Valor - apresentará o valor correspondente a cada faixa do gráfico;
  - Valor Eixo X e Porcentagem - apresenta os ponto dos eixo X e o percentual correspondente a cada faixa do gráfico, em relação a soma dos valores;
  - Valor Eixo X e Valor - apresenta os ponto dos eixo X e o valor correspondente a cada faixa do gráfico;
  - Valor Eixo X - apresenta os ponto dos eixo X.
- Posição - determina o posicionamento da legenda na área do gráfico. Contém as seguintes opções:
- - Abaixo - a legenda se posiciona abaixo do gráfico;
  - Acima - a legenda se posiciona entre a imagem e o título do gráfico;
  - Direita - a legenda se posiciona à direita do gráfico;
  - Esquerda - a legenda se posiciona à esquerda do gráfico.
  - Cor - define uma cor de preenchimento para a legenda;
  - Mostrar 3D - quando marcada, ativa a exibição tridimencional do gráfico;
  - Cor de Fundo - permite selecionar a cor de fundo do área do gráfico;
  - Mostrar Grade - ativa as grades do gráfico. Não se aplica para gráfico do tipo Pizza;
  - Elevação 3D - esta opção estará ativa quando marcamos Mostrar 3D e esta define a altura do efeito tridimencional do gráfico;
  - Eixo de Elevação - esta opção estará ativa quando marcamos Mostrar 3D e esta define a profundidade do efeito tridimencional do gráfico.

  Acesse um [Exemplo de Gráfico no formulário](../dicas_e_truques/componente/exemplo_de_grafico_no_formulario).
