---
title: "Depurador"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/fluxos_e_acoes/depurar.htm"
---

# Depurador(debug)

O novo Depurador tem como função detectar erros na construção de um fluxograma, rastreando todos os objetos (processamentos, decisões, subfluxos e interações) presentes na regra executada.

É acessado através do ícone![image1323.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1323.jpg) presente no Editor de Fluxogramas. Acessando esta opção, é aberta uma tela com as sessões do Webrun em andamento. Essas sessões são listadas com base na tela de Configurações (tecla de atalho F6), aba Rede e Conectividade. Veja [aqui](../configuracao_das_conexoes/configuracoes#aba_rede_e_conectividade) como efetuar estas configurações:

![image1357.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1357.jpg)

(Figura1: Lista de sessões)

São listadas as sessões do Webrun que estejam em Modo de Projeto e caso deseje depurar todas as sessões do sistema independente do Modo de Projeto, há a opção Todos. Esta opção também é utilizada para depurar os eventos do sistema. Caso deseje iniciar uma nova sessão, clique no botão Nova Sessão. Após efetuados estes passos, surgirá uma nova janela lateral, permitindo ao desenvolvedor acompanhar toda a execução da sua regra de forma detalhada, além disso, será disponibilizada uma nova opção ao clicar com o botão direito do mouse sobre um objeto, é a opção Ponto de Parada, que servirá de um ponto de checagem durante a execução do fluxograma. A partir deste ponto, o fluxograma ao ser executado irá parar, permitindo a execução passo-a-passo para depuração.

![image1358.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1358.jpg)

(Figura 2: Fluxograma com ponto de parada)

Salvando o fluxograma com um ponto de parada definido, ao executá-lo pelo Webrun o editor de fluxos será aberto novamente, mas desta vez as opções de depuração estarão disponíveis:

![image1360.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1360.jpg)

São elas:

![image1367.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1367.jpg) - Avança para o próximo objeto (objeto seguinte ao do ponto de parada).

![image1826.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1826.gif) - Permite entrar em um subfluxo para depuração.

![image1827.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1827.gif) - Permite sair de um subfluxo sem depurar os objetos nele restantes.

![image1831.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1831.gif) - Avança para o próximo ponto de parada no fluxo.

![image1368.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1368.jpg) - Executa o restante do fluxo, sem parar nos demais pontos de parada.

![image1364.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1364.jpg) - Interrompe a depuração e a execução do fluxo.

![image1372.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1372.jpg) - Liga ou desliga o depurador.

Logo abaixo são mostrados os fluxogramas em execução no momento da depuração, estes tem a sua camada identificada por um ícone, facilitando o processo de depuração. Caso a regra possua um subfluxo, este será listado abaixo do principal. Além dessas opções, é exibida uma Grade onde são listadas as variáveis da regra executada, podendo acompanhar seus valores a cada passo executado.

![image1369.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1369.jpg)

Na aba Variáveis são listadas todas as variáveis e parâmetros de entrada e seus respectivos valores naquele ponto de parada. Clicando no ícone ![image1832.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1832.gif), é aberta a janela Visualizador de Conteúdo, onde serão mostrados os valores de forma detalhada. Nesta tela, é possível mudar o valor das variáveis, os seus tipos (respeitando as características de cada tipo, por exemplo, uma variável do tipo Letras com o conteúdo 25/10/2008 pode ser convertida para o tipo Data perfeitamente, mas não pode ser convertida para um tipo Inteiro). No caso de uma variável do tipo Variante que guarda o conteúdo de uma Lista, para ter este conteúdo visualizado, é necessário clicar no ícone ![image1833.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1833.gif) presente na Grade de resultados, desta forma, será visualizado o conteúdo presente na posição selecionada da Lista.

![image1370.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1370.jpg)

Na aba Pontos de Parada são listados todos os pontos de parada definidos no fluxograma, podendo ativar ou desativar este ponto usando a coluna Ativo.

![image1834.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1834.gif)

Observações:

1. Não é recomendado que o usuário force a saída de um laço de repetição que esteja contido em outro laço, uma vez que, no momento da depuração o sentido do fluxo poderá ser alterado.
2. A utilização do depurador(debug) em fluxos grande e com muitos ifs(objeto decisão), pode ocasionar erros de compilação. Neste caso a Softwell Solutions recomenda que o fluxo seja quebrado em subfluxos para evitar tais problemas na depuração.
3. Durante a depuração de fluxos Cliente, as variáveis não tem o seu tipo especificado.
4. Não é possível alterar o valor de variáveis durante a depuração de um fluxo na camada Cliente.
5. Não é possível utilizar o Debug e o Profiler simultaneamente.
6. Regras clientes devem ser sempre atualizadas antes da depuração (atualizar o formulário que executa o fluxograma).
7. Ao depurar um fluxograma na camada Servidor, caso este possua um subfluxo na camada Cliente, não há garantias de que a opção Entrar irá depurar dentro do subfluxo, pois este é um processo assíncrono, ou seja, a regra Servidor executa independente da execução da regra Cliente.

Utilizando o Debug - Esse exemplo demonstra de forma prática e fácil a utilização do novo método de depuração de regras do Maker.
