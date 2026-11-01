---
title: "Criando árvore através de diretório"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/criando_arvore_atraves_de_diretorio.htm"
---

O exemplo a seguir, demonstrará de forma prática ocomo criar uma árvore a partir de um diretório.

Primeiramente, será criado um formulário com as seguintes características.

![image1974.jpg](../../image1974.jpg)

O formulário não possui fonte de dados e a propriedade Navegação está  definida como Não. Criado o formulário, partimemos para o fluxo associado ao botão Criar, que ficará da seguinte forma:

![image1975.jpg](../../image1975.jpg)

1. Informe o seguinte parâmetro de entrada:

![image1976.jpg](../../image1976.jpg)

2. Informe os seguintes Identificadores (variáveis):

![image1977.jpg](../../image1977.jpg)

3. Selecione um objeto Decisão e no Montador de Expressão  selecione a função Existe componente?

![image1978.jpg](../../image1978.jpg)

4. Selecione um objeto Processamento ligada a opção SIM da Decisão e no Montador de Expressão  selecione a função Árvore-Remover Filhos, utilizando como primeiro parâmetro a função Obter componente passando o nome do componente árvore e no segundo parâmetro da função principal – Árvore – Obter raiz da Árvore, que tem o parâmetro a função Obter componente com o nome da árvore.

![image1952.gif](../../image1952.gif)

4. Crie um novo fluxo para ser usado como SubFluxo, que ficará da seguinte maneira:

![image1979.jpg](../../image1979.jpg)

1. Informe o seguinte parâmetro de entrada:

![image1980.jpg](../../image1980.jpg)

2.Informe o seguinte Identificador (variável):

![image1982.jpg](../../image1982.jpg)

3. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Percorrer diretório e atribua o resultado da função ao identificador lista_de_diretorios.

![image1953.gif](../../image1953.gif)

4. Atribua  a variável lista_de_diretorios ao valor de retorno , como mostra a figura e salve o fluxo.

![image1983.jpg](../../image1983.jpg)

5.Voltando ao fluxo principal insira um objeto Subfluxo, selecione o fluxo que acabou de criar e selecione as variáveis como mostra a figura:

![image1984.jpg](../../image1984.jpg)

Esse fluxo terá duas entradas, o processamento que criamos com a função Árvore – Remover filhos e a opção NÃO do objeto Decisão.

5. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Tamanho da Lista , passando como parâmetro a variável retorno do subfluxo  e atribua o resultado ao identificador tamanho da lista.

![image1954.gif](../../image1954.gif)

6. Selecione um objeto Processamento e no Montador de Expressão selecione a função Árvore – Criar Árvore, passando os  parâmetros que mostram na figura e atribuindo o resultado no identificador arvore.

![image1985.jpg](../../image1985.jpg)

7. Selecione um obtejo Decisão e no Montador de Expressão utilize a função  Menor ou Igual, passando como parâmetros a variável cont e tamanho da lista .

![image1955.gif](../../image1955.gif)

8. Selecione um objeto Interação, ligada a opção NÃO da Decisão criada anteriormente. Selecione a função Mensagem de Alerta , de acordo com a figura e depois ligue ao objeto Fim.

![image1986.jpg](../../image1986.jpg)

9. Selecione um objeto Processamento, ligada a opção SIM da Decisão criada anteriormente. Selecione a fução Obter Objeto da Lista e como parâmetros da mesma, utilize a variavel lista de diretorios e cont e atribua o resultado a variável elemento da lista, como mostra na figura:

![image1956.gif](../../image1956.gif)

10. Crie um novo fluxo para ser usado como SubFluxo, que ficará da seguinte maneira:

![image1987.jpg](../../image1987.jpg)

1. Informe o seguinte parâmetro de entrada:

![image1988.jpg](../../image1988.jpg)

2. Informe o seguinte Identificador (variável):

![image1989.jpg](../../image1989.jpg)

3. Selecione um objeto Processamento e no Montador de Expressão e selecione a função Quebrar Texto, passando como parâmetros a variável elemento_lista  e '\' e atribua o resultado da função ao identificador lista_quebrada.

![image1957.gif](../../image1957.gif)

4. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Tamanho da Lista, passando como parâmetro a variável lista_quebrada  e atribua o resultado da função ao identificador tamanho.

![image1958.gif](../../image1958.gif)

5. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Obter objeto da lista, passando como parâmetros as variáveis lista_quebrada  e tamanho e atribua o resultado da função ao identificador elemento.

![image1959.gif](../../image1959.gif)

6.  Atribua  a variável elemento  ao valor de retorno , como mostra a figura e salve o fluxo.

![image1990.jpg](../../image1990.jpg)

7. Voltando ao fluxo principal insira um objeto Subfluxo, selecione o fluxo que acabou de criar e selecione as variáveis como mostra a figura:

![image1991.jpg](../../image1991.jpg)

11. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Árvore – Adicionar Filho, passando como parâmetros: 1- Função Obter Componente, com o nome do componente Árvore; 2- Função Árvore – Obter Raiz da Árvore, com a função Obter componente com o nome do componente Árvore; 3- variável elemento da lista.

![image1960.gif](../../image1960.gif)

12. Selecione um objeto Processamento e no Montador de Expressão selecione a função Soma, com os parâmetros, variável cont e 1. Atribuindo o resultado da expressão na variável cont e fazendo ligação ao último objeto  Decisão criado, assim fechando o laço.

![image1961.gif](../../image1961.gif)

Salve o fluxo na camada Cliente e associe-o ao componente Botão do formulário.

![image1992.jpg](../../image1992.jpg)

Salve o formulário e execute-o no Webrun .

![image1993.jpg](../../image1993.jpg)
