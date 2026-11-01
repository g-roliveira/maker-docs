---
title: "Os objetos da tela do Fluxo de Ações"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/os_objetos_da_tela_do_fluxo_de_acoes.htm"
---

Os elementos para o desenvolvimento de Fluxo de Ações são desenhos geométricos que representam ações no fluxo. Cada objeto possui uma função bem definida:

- ![novo](https://suporte.softwell.com.br/Manual/Maker2_6/image102.jpg) - adiciona uma nova aba na janela do Editor para a criação de um Fluxo de Ações;
- ![abrir](https://suporte.softwell.com.br/Manual/Maker2_6/image103.jpg) - abre uma aba na tela do Editor, com um fluxo de ações, a partir de uma seleção;
- ![salvar](https://suporte.softwell.com.br/Manual/Maker2_6/image104.jpg) - salva o fluxo aba ativa;
- ![importar](https://suporte.softwell.com.br/Manual/Maker2_6/image105.jpg) - permite importar Fluxos empacotados em arquivos *.MKF para o projeto atual;
- ![exportar](https://suporte.softwell.com.br/Manual/Maker2_6/image106.jpg) - permite exportar fluxos empacotando em arquivos *.MKF;
- ![gerar codigo](https://suporte.softwell.com.br/Manual/Maker2_6/image107.jpg) - o [Gerador de Código](gerador_de_codigo/gerador_de_codigo) permite que sejam gerados códigos em uma linguagem de programação selecionada;
- ![image108.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image108.jpg) - [Objeto Mouse](objeto_mouse) é utilizado para selecionar objetos do fluxo de ações;
- ![image193.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image193.gif) - a ferramenta [Ligação](objeto_ligacao) é utilizada para conectar e definir a sequência da execução de um fluxo de ações;
- ![image109.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image109.jpg) - o [Objeto Processamento](objeto_processamento) representa a execução de uma rotina preestabelecida (utilizando funções, variáveis ou valores constantes) em um fluxo de ações. Pode ser utilizado para executar uma expressão, por exemplo: obter um resultado de um cálculo;
- ![image110.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image110.jpg) - o [Objeto Decisão](objeto_decisao) deve ser utilizado para criar desvios de processamento de um fluxo de ações. Criar duas possibilidades: caso Sim executar... ou caso Não executar.... Este objeto é utilizado também para laços de repetição, fazendo uma referência circular com a decisão;
- ![image111.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image111.jpg) - o [Objeto Interação](objeto_interacao) é utilizado para exibir mensagens para o usuário;
- ![image194.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image194.gif) - ;imagem que simboliza o fim de um fluxo de ação. Por meio deste objeto, o fluxo de ação pode retornar um valor. Para maiores informações, pode ser consultado o tópico [Objeto Fim - Parâmetro de Retorno](parametro_de_retorno);
- ![image112.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image112.jpg) - o [Objeto Subfluxo](objeto_subfluxo) pode ser utilizado para incluir um fluxo de ações existente na regra atual;
- ![image113.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image113.jpg) - o [Objeto Comentário](objeto_comentario) é utilizado sempre que o usuário desejar comentar o processamento do fluxo em um determinado ponto ou para um grupo de ações.
- ![image1323.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1323.jpg) - o [Objeto Depurar](depurar) é utilizado para depuração de um fluxo.
- ![image1324.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1324.jpg) - o [Objeto Profile](profile) é utilizado para verificar a otimização das regras que estão sendo executadas no sistema.

## Inserção de objetos em série

Sempre utilizando o botão esquerdo do mouse, para inserir um objeto (um objeto Processamento, por exemplo), exceto o objeto Ligação, deve ser efetuado um clique sobre o objeto e, em seguida, um clique na área de trabalho do Editor. Caso seja executado um duplo clique sobre o objeto, poderão ser criados vários objetos sequencialmente, bastando apenas a efetuação de cliques na área de trabalho do Editor.

## Ligação de objetos em série

A Ligação (que define a sequência de execução dos objetos) entre os objetos do fluxo de ação é definida durante a inserção desses objetos. Para ligar vários objetos que não estejam ligados, pode ser executado um duplo clique com o botão esquerdo do mouse sobre o objeto Ligação e, em seguida, efetuado um clique com o mesmo botão do mouse em cada um dos objetos que se quer que sejam ligados.

## Comandos de edição dos objetos do fluxo

Quando é selecionado mais de um objeto e, em seguida, é efetuado um clique com o botão direito do mouse sobre um dos objetos, um menu suspenso com opções comuns a todos aparece. São elas:

![image872.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image872.jpg)

|  | Editar |
| --- | --- |
| image846.gif | Abre a tela [Parâmetros de Entrada](parametros_de_entrada) |
| image847.gif | Abre a tela [Montador de Expressões](montador_de_expressoes) |
| image848.gif | Abre a tela [Montador de Expressões](montador_de_expressoes) |
| image849.gif | Abre a tela [Interação](objeto_interacao) |
| image850.gif | Abre a tela [Subfluxo](objeto_subfluxo) |
| image851.gif | Não está disponível para este componente |
| image852.gif | Abre a tela [Parâmetros de Retorno](parametro_de_retorno) |

|  | Alterar descrição |
| --- | --- |
| (Todos) | Abre a tela Propriedades. Quando a tela for aberta a partir dos componentes Início e Fim, o conteúdo dela não fica editável. |

|  | Remover |
| --- | --- |
| (Todos) | Remove o componente selecionado. Esta ação não pode ser executada quando o componente for o componente Início. |

|  | Substituir |
| --- | --- |
| (Todos) | Opção para a troca de um objeto por outro. Esta ação não pode ser executada quando o componente for o componente Início. |

|  | Alinhamento |
| --- | --- |
| (Todos) | Fica disponível quando é selecionado mais de um objeto. Para efeito de referência, quando selecionada uma das opções de alinhamento (À direita, À esquerda, Ao topo, À base, Ao centro), é utilizado como base o primeiro objeto selecionado dentre todos os selecionados. |

|  | Espaçamento |
| --- | --- |
| (Todos) | Fica disponível quando é selecionado mais de um objeto, mas o resultado da escolha de uma das opções (horizontal ou vertical) só é visível quando selecionados pelo menos três objetos. Abaixo consta o detalhamento de cada uma das opções:   - Horizontal - iguala o espaçamento horizontalmente; - Vertical - iguala o espaçamento verticalmente. |

|  | Dimensionamento |
| --- | --- |
| (Todos) | :Fica disponível quando é selecionado mais de um objeto. O item possui as seguintes opções:   - Largura - iguala a largura pelo objeto mais largo; - Altura - iguala a altura pelo objeto mais alto. |
