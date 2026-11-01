---
title: "Objeto SubFluxo"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/fluxos_e_acoes/objeto_subfluxo.htm"
---

# image112.jpg   Objeto Subfluxo

Um objeto Subfluxo é usado para que, de dentro de um fluxo possa, chamar um outro fluxo, inclusive de categorias diferentes.

Observações:

1. A chamada de fluxo entre camadas diferentes só trará retorno caso seja feita de um fluxo cliente para um sub-fluxo servidor.

2. Quando uma Interação de Erro é chamada em um subfluxo cliente, o mesmo não interrompe a execução do fluxo chamador quando o mesmo está na camada servidor. O mesmo ocorre, caso o fluxo seja chamado nos eventos Antes de Inserir, Antes de Deletar ou Antes Alterar do formulário, tais ações não serão interrompidas.

Para usar um Subfluxo, clique no objeto que se encontra na Barra de Ferramentas do Editor de Fluxo de ações e depois clique no local desejado. Execute um clique com o botão da direita do mouse e observe as opções:

- Editar - ativa a tela onde será definido o fluxo que será chamado e os parâmetros de entrada (caso o fluxo escolhido possua):

![image1325.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image339.png)

A tela Subfluxo possui os seguintes objetos:

- Barra de título que apresenta o nome do subfluxo selecionado;
- (4) ![image223.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image340.png) (carregar subfluxo) - abre o subfluxo selecionado;
- ![image208.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image208.gif) (ascendente) / ![image209.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image368.png) (descendente) - abaixo da barra de título, organiza a lista de subfluxos na ordem ascendente ou descendente;
- (1) ![image224.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image224.gif) - campo de busca - digite as iniciais do fluxo que deseja localizar ;
- (2) Árvore de Fluxos - relação dos fluxos existentes na base de dados disponíveis por categoria;
- (3) Parâmetros de entrada - exibem os parâmetros exigidos por cada fluxo (caso exista). Executando clique duplo sobre o registro de parâmetro, abre-se o [Montador de Expressões](montador_de_expressoes) e deste a tela [Propriedades](tela_propriedades_do_montador_de_expressoes);
- (5) Identificador a que será atribuído o retorno do subfluxo - campo que permite atribuir o retorno a um [Identificador (variável)](exibir) ou [Parâmetro de entrada](parametros_de_entrada) definido no objeto Início. Quando selecionada uma variável neste campo, às vezes o componente modifica sua cor para a cor vermelha. Esse comportamento não traduz que o tipo de dado que será retornado pelo Subfluxo não é compatível com o tipo de dado da variável selecionada, mas, sim, alerta o usuário para que selecione uma variável que tenha um tipo adequado.

- Alterar Descrição - permite mudar o rótulo do objeto. Utilizado para documentar a rotina que o objeto executa;

- Remover - exclui o objeto da tela de trabalho do [Editor de Fluxos de Ações](utilizando_o_editor_de_fluxo_de_acoes).

## Melhoria dos componentes SUBFLUXO e INTERAÇÃO para permitir uma rápida definição dos parâmetros

Agora é possível atribuir o valor dos parâmetros de subfluxos e interações diretamente, sem a necessidade de abrir o Montador de Expressão, com a identificação imediata do tipo passado

- caso seja digitado um texto o valor do parâmetro será automaticamente do tipo Letras;
- caso seja digitado um valor fracionado ele será automaticamente do tipo Fracionado.

Um ícone indica o tipo do valor digitado. Para passagens de parâmetros personalizadas, há a opção de abrir o Montador de Expressão
