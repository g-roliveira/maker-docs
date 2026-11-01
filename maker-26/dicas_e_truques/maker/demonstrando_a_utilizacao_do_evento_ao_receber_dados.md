---
title: "Demonstrando a utilização do evento Ao Receber Dados"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/maker/demonstrando_a_utilizacao_do_evento_ao_receber_dados.htm"
---

Este exemplo visa demonstrar ao usuário a utilização do evento Ao Receber Dados no formulário da grade.

Numa determinada ocasião, deseja-se consultar o histórico do preço de um produto qualquer dentro um período. Para atender tal necessidade, utilizaremos o evento Ao Receber Dados, que será demonstrado nos passos a seguir.

1. Crie um formulário com as seguintes características:

![image1613.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1613.jpg)

Observação: O componente Lista dinâmica utiliza a seguinte consulta:

![image1614.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1614.jpg)

O formulário que será utilizado na grade está pronto, ele receberá o fluxo que será associado evento Ao receber Dados, mas por enquanto nos concentraremos na criação de outro formulário.

2. Crie outro formulário com as seguintes características:

![image1615.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1615.jpg)

O formulário não está vinculado a nenhuma fonte de dados e a propriedade Navegação está configurada como Não.

Associe ao Componente Grade o formulário Cadastro de Itens.

![image1616.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1616.jpg)

3. Agora será criado o fluxo que será associado ao componente Data Inicial.

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1617.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1617.jpg)

1. Defina o seguinte parâmetro de entrada:

![image1618.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1618.jpg)

Este parâmetro irá receber o valor do componente Data Inicial.

2. Adicione um objeto Processamento e no Montador de expressão selecione a função Definir variável da sessão

![image1893.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1893.gif)

3. Adicione um objeto Processamento e no Montador de expressão selecione a função Atualizar Componente.

![image1895.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1895.gif)

4. Salve o fluxo e associe-o ao evento Ao Modificar do componente Data Inicial.

![image1619.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1619.jpg)

Depois de adicionado o evento ao componente, é hora de criar outro fluxo que será associado ao outro componente Data.

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1620.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1620.jpg)

1. Defina o seguinte parâmetro de entrada

![image1622.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1622.jpg)

2. Adicione um objeto Processamento e no Montador de Expressão selecione a função Definir variável da sessão.

![image1897.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1897.gif)

3. Adicione outro objeto Processamento e no Montador de expressão selecione a função Atualizar Componente.

![image1898.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1898.gif)

4. Salve o fluxo e associe-o ao evento Ao Modificar do componente Data Final.

![image1623.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1623.jpg)

Os fluxos que serão associados ao componente Data estão prontos.

Agora deve ser criado o fluxo que será associado ao evento Ao Receber Dados do formulário Cadastro de itens.

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1624.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1624.jpg)

1. Defina as seguintes variáveis.

![image1625.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1625.jpg)

2. Adicione um objeto Processamento e no Montador de Expressão selecione a função Abrir consulta

![image1899.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1899.gif)

A consulta será feita da seguinte forma:

![image1626.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1626.jpg)

Adicione o seguinte filtro Between (:data1) And (:data2) para o campo cds_cad_data, em seguida selecione o botão Parâmetros para que a seguinte tela seja apresentada.

![image1627.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1627.jpg)

Clique sobre o parâmetro data1 e no Montador de Expressão selecione a função Obter variável de sessão e em seguida determine o valor data para o primeiro parâmetro e o valor false para o segundo parâmetro.

![image1900.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1900.gif)

Estão definidos os valores do primeiro parâmetro, agora definiremos o valor para o segundo.

Clique sobre o parâmetro data2 e no Montador de Expressão seleciona função Obter variável de sessão e em seguida determine o valor data2 para o primeiro parâmetro e o valor false para o segundo parâmetro.

![image1901.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1901.gif)

Se os passos foram executados corretamente, a tela de parâmetros ficará da seguinte forma:

![image1628.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1628.jpg)

Selecione salvar e clique sobre o botão OK na tela de consulta SQL.

3. Adicione outro objeto processamento e no Montador de Expressões selecione a função Tornar consulta não gerenciável.

![image1902.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image1902.gif)

Observação : Esta opção é necessária para que após a execução do fluxo, a consulta não seja fechada automaticamente.

4. Selecione o objeto fim e determine a variável tabela como retorno do fluxo.

![image1629.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1629.jpg)

Salve o fluxo na camada Servidor e associe-o ao evento Ao Receber Dados do formulário

![image1630.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1630.jpg)

![image1631.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1631.jpg)

Salve o formulário e execute-o no Webrun.

![image1632.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1632.jpg)

Com o exemplo feito, toda vez que o usuário digitar as datas, será exibido no componente grade o histórico de todos os itens no período de tempo informado pelo usuário.

Para mais detalhes sobre o evento Ao Receber Dados, clique [aqui](Utilizando_o_Evento_Ao_Receber_Dados).
