---
title: "Exemplo de como criar árvore com elementos do banco"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/componente/exemplo_como_criar_arvore_com_elementos_do_banco.htm"
---

Este exemplo irá descrever como criar uma árvore com elementos do banco de dados.

Para este exemplo, foram criadas duas tabelas Estado contendo os campos: codigouf e Nome do Estado, e Cidade com os campos: Código e Nome da Cidade.

Utilizando o Assistente de criação de formulários, defina o nome para o formulário e defina a Fonte de Dados Cidade:

![image540.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image540.jpg)

O formulário criado conterá um fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image541.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image541.jpg)

Criando um Novo Fluxo, salve com o Destino Cliente. Defina o Parâmetro de Entrada, clicando em ![image703.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image703.gif):

![image542.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image542.jpg)

Defina os Identificadores (pressione F11):

![image543.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image543.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para criação da árvore. No Montador de Expressão, na aba Fluxos e Funções, localize a função Árvore - Criar Árvore:

![image545.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image545.jpg)

Coloque um ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) para passar os estados. Mas, antes de inserir o Subfluxo será criado um novo fluxo para guardar os Estados. Clique em ![image547.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image547.jpg), na aba Formulário e crie o novo fluxo. Salve-o com o Destino Servidor. O fluxo ficará da seguinte forma:

![image704.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image704.gif)

Defina os Identificadores (pressione F11):

![image549.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image549.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para criar uma lista de Estados. No Montador de Expressão na aba Fluxos e Funções, localize as funções Se, É Nulo, Campo, Abrir Consulta e Tabela para lista:

![image550.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image550.jpg)

Na SQL CONSULTA, clique em ![image705.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image705.gif). Abrirá a tela Assistente SQL e localize a tabela ESTADO. Selecione todos os campos da tabela e confirme. Na função Campo, selecione o campo codigouf da tabela Estado. A outra função Abrir Consulta possui a mesma seleção feita na SQL CONSULTA anterior.

Clique em ![image706.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image706.gif) para informar o Parâmetro de Retorno. No Montador de Expressão, selecione o Identificador (Estado) criado neste fluxo:

![image551.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image551.jpg)

Voltando ao fluxo principal, coloque agora o ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) para passar os estados. Ao clique duplo em ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) abrirá a tela abaixo. Nessa tela, é necessário selecionar o fluxo criado (Obter Estados) e o Identificador ao qual será atribuído o retorno do subfluxo (Estado):

![image552.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image552.jpg)

Coloque uma ![image553.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image553.jpg) para comparar a quantidade de estado se é menor ou igual a tabela da lista. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Menor ou Igual e Tamanho da Lista:

![image707.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image707.gif)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para guardar o código do estado. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Para Inteiro, Obter Objeto da Lista, Quebrar Texto e Para Letras Obter da Lista:

![image554.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image554.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para inserir o Estado na árvore. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Árvore - Adicionar Filho, Árvore - Obter Raiz da Árvore, Para Letras, Obter Objeto da Lista e Quebrar Texto:

![image555.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image555.jpg)

Coloque outro ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) para passar as Cidades. Mas, antes de inserir o Subfluxo, será criado um outro novo fluxo para guardar as Cidades. Clique em ![image547.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image547.jpg), na aba Formulário e crie o fluxo. Salve-o com o Destino Servidor. O fluxo ficará da seguinte forma:

![image708.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image708.gif)

Defina o Parâmetro de Entrada, clicando em ![image703.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image703.gif):

![image556.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image556.jpg)

Defina os Identificadores (pressione F11):

![image557.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image557.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para criar uma lista de Cidades. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Se, Existem Registros, Abrir Consulta e Tabela para lista:

![image558.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image558.jpg)

Na SQL CONSULTA, clique em ![image705.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image705.gif). Abrirá a tela Assistente SQL e localize a tabela CIDADE:

![image1242.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1242.jpg)

Clique em ![image709.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image709.gif) associar ao Critério criado:

![image560.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image560.jpg)

Observação: A outra função Abrir Consulta possui a mesma seleção feita na SQL CONSULTA anterior.

Clique em ![image706.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image706.gif) para informar o Parâmetro de Retorno. No Montador de Expressão selecione o Identificador (Cidade) criado nesse fluxo:

![image561.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image561.jpg)

Voltando ao fluxo principal, coloque agora o ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) para passar às Cidades. Ao clique duplo, em ![image546.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image546.jpg) abrirá a tela abaixo. Nesta tela, é necessário selecionar o fluxo criado (Obter Cidade) e o Identificador o qual será atribuído o retorno do subfluxo (Cidade):

![image562.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image562.jpg)

Coloque uma ![image553.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image553.jpg) para comparar a quantidade de cidade se é menor ou igual a tabela da lista. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Menor ou Igual e Tamanho da Lista:

![image710.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image710.gif)

Coloque 1 ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para inserir a Cidade na árvore. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Árvore - Adicionar Filho, Para Letras e Obter Objeto da lista:

![image563.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image563.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para acrescentar mais 1 ao campo QtdCidade. No Montador de Expressão, na aba Fluxos e Funções, localize a função Soma:

![image711.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image711.gif)

Coloque um   para modificar a quantidade do campo QtdCidade. No Montador de Expressão, selecione o campo Letra na tela Propriedade e atribua o valor 1:

![image712.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image712.gif)

Associe este ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) ao componente ![image553.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image553.jpg) com a saída NÃO.

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image544.jpg) para acrescentar mais 1 ao campo QtdEstados. No Montador de Expressão, na aba Fluxos e Funções, localize a função Soma:

![image713.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image713.gif)

Observe que no fluxo principal existe dois loops:

![image714.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image714.gif)

O Resultado no Webrun:

![image564.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image564.jpg)
