---
title: "Exemplo de como criar árvore com elementos do banco"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/componente/exemplo_como_criar_arvore_com_elementos_do_banco.htm"
---

Este exemplo irá descrever como criar uma árvore com elementos do banco de dados.

Para este exemplo, foram criadas duas tabelas Estado contendo os campos: codigouf e Nome do Estado, e Cidade com os campos: Código e Nome da Cidade.

Utilizando o Assistente de criação de formulários, defina o nome para o formulário e defina a Fonte de Dados Cidade:

![image540.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image540.jpg)

O formulário criado conterá um fluxo. Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image541.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image541.jpg)

Criando um Novo Fluxo, salve com o Destino Cliente. Defina o Parâmetro de Entrada, clicando em ![image703.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image703.jpg):

![image542.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image542.jpg)

Defina os Identificadores:

![image543.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image543.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para criação da árvore. No Montador de Expressão, na aba Fluxos e Funções, localize a função Árvore - Criar Árvore:

![image545.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image545.jpg)

Coloque um ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) para passar os estados. Mas, antes de inserir o Subfluxo será criado um novo fluxo para guardar os Estados. Clique em ![image547.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image547.jpg), e crie o novo fluxo. Salve-o com o Destino Servidor. O fluxo ficará da seguinte forma:

![image704.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image704.jpg)

Defina os Identificadores:

![image549.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image549.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para criar uma lista de Estados. No Montador de Expressão na aba Fluxos e Funções, localize as funções Se, É Nulo, Campo, Abrir Consulta e Tabela para lista:

![image550.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image550.jpg)

Na SQL CONSULTA, clique em ![image705.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image705.jpg). Abrirá a tela Assistente SQL e localize a tabela ESTADO. Selecione todos os campos da tabela e confirme. Na função Campo, selecione o campo codigouf da tabela Estado. A outra função Abrir Consulta possui a mesma seleção feita na SQL CONSULTA anterior.

Clique em ![image706.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image706.jpg) para informar o Parâmetro de Retorno. No Montador de Expressão, selecione o Identificador (Estado) criado neste fluxo:

![image551.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image551.jpg)

Voltando ao fluxo principal, coloque agora o ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) para passar os estados. Ao clique duplo em ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) abrirá a tela abaixo. Nessa tela, é necessário selecionar o fluxo criado (Obter Estados) e o Identificador ao qual será atribuído o retorno do subfluxo (Estado):

![image552.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image552.jpg)

Coloque uma ![image553.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image553.jpg) para comparar a quantidade de estado se é menor ou igual a tabela da lista. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Menor ou Igual e Tamanho da Lista:

![image707.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image707.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para guardar o código do estado. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Para Inteiro, Obter Objeto da Lista, Quebrar Texto e Para Letras Obter da Lista:

![image554.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image554.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para inserir o Estado na árvore. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Árvore - Adicionar Filho, Árvore - Obter Raiz da Árvore, Para Letras, Obter Objeto da Lista e Quebrar Texto:

![image555.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image555.jpg)

Coloque outro ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) para passar as Cidades. Mas, antes de inserir o Subfluxo, será criado um outro novo fluxo para guardar as Cidades. Clique em ![image547.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image547.jpg), na aba Formulário e crie o fluxo. Salve-o com o Destino Servidor. O fluxo ficará da seguinte forma:

![image708.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image708.jpg)

Defina o Parâmetro de Entrada, clicando em ![image703.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image703.jpg):

![image556.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image556.jpg)

Defina os Identificadores:

![image557.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image557.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para criar uma lista de Cidades. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Se, Existem Registros, Abrir Consulta e Tabela para lista:

![image558.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image558.jpg)

Na SQL CONSULTA, clique em ![image705.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image705.jpg). Abrirá a tela Assistente SQL e localize a tabela CIDADE:

![image1242.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1242.jpg)

Clique em ![image709.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image709.jpg) associar ao Critério criado:

![image560.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image560.jpg)

Observação: A outra função Abrir Consulta possui a mesma seleção feita na SQL CONSULTA anterior.

Clique em ![image706.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image706.jpg) para informar o Parâmetro de Retorno. No Montador de Expressão selecione o Identificador (Cidade) criado nesse fluxo:

![image561.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image561.jpg)

Voltando ao fluxo principal, coloque agora o ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) para passar às Cidades. Ao clique duplo, em ![image546.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image546.jpg) abrirá a tela abaixo. Nesta tela, é necessário selecionar o fluxo criado (Obter Cidade) e o Identificador o qual será atribuído o retorno do subfluxo (Cidade):

![image562.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image562.jpg)

Coloque uma ![image553.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image553.jpg) para comparar a quantidade de cidade se é menor ou igual a tabela da lista. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Menor ou Igual e Tamanho da Lista:

![image710.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image710.jpg)

Coloque 1 ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para inserir a Cidade na árvore. No Montador de Expressão, na aba Fluxos e Funções, localize as funções Árvore - Adicionar Filho, Para Letras e Obter Objeto da lista:

![image563.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image563.jpg)

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para acrescentar mais 1 ao campo QtdCidade. No Montador de Expressão, na aba Fluxos e Funções, localize a função Soma:

![image711.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image711.jpg)

Coloque um   para modificar a quantidade do campo QtdCidade. No Montador de Expressão, selecione o campo Letra na tela Propriedade e atribua o valor 1:

![image712.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image712.jpg)

Associe este ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) ao componente ![image553.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image553.jpg) com a saída NÃO.

Coloque um ![image544.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image544.jpg) para acrescentar mais 1 ao campo QtdEstados. No Montador de Expressão, na aba Fluxos e Funções, localize a função Soma:

![image713.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image713.jpg)

Observe que no fluxo principal existe dois loops:

![image714.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image714.jpg)

O Resultado no Webrun:

![image564.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image564.jpg)
