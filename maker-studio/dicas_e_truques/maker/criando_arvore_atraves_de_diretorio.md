---
title: "Criando árvore através de diretório"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/criando_arvore_atraves_de_diretorio.htm"
---

O exemplo a seguir, demonstrará de forma prática ocomo criar uma árvore a partir de um diretório.

Primeiramente, será criado um formulário com as seguintes características.

![image1974.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar1.png)

O formulário não possui fonte de dados e a propriedade Navegação está  definida como Não. Criado o formulário, partimemos para o fluxo associado ao botão Criar, que ficará da seguinte forma:

![image1975.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar2.png)

1. Informe o seguinte parâmetro de entrada:

![image1976.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar3.png)

2. Informe os seguintes Identificadores (variáveis):

![image1977.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar4.png)

3. Selecione um objeto Decisão e no Montador de Expressão  selecione a função Existe componente?

![image1978.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar5.png)

4. Selecione um objeto Processamento ligada a opção SIM da Decisão e no Montador de Expressão  selecione a função Árvore-Remover Filhos, utilizando como primeiro parâmetro a função Obter componente passando o nome do componente árvore e no segundo parâmetro da função principal – Árvore – Obter raiz da Árvore, que tem o parâmetro a função Obter componente com o nome da árvore.

![image1952.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar6.png)

4. Crie um novo fluxo para ser usado como SubFluxo, que ficará da seguinte maneira:

![image1979.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar7.png)

1. Informe o seguinte parâmetro de entrada:

![image1980.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar8.png)

2.Informe o seguinte Identificador (variável):

![image1982.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar9.png)

3. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Percorrer diretório e atribua o resultado da função ao identificador lista_de_diretorios.

![image1953.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar10.png)

4. Atribua  a variável lista_de_diretorios ao valor de retorno , como mostra a figura e salve o fluxo.

![image1983.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar11.png)

5.Voltando ao fluxo principal insira um objeto Subfluxo, selecione o fluxo que acabou de criar e selecione as variáveis como mostra a figura:

![image1984.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar12.png)

Esse fluxo terá duas entradas, o processamento que criamos com a função Árvore – Remover filhos e a opção NÃO do objeto Decisão.

5. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Tamanho da Lista , passando como parâmetro a variável retorno do subfluxo  e atribua o resultado ao identificador tamanho da lista.

![image1954.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar13.png)

6. Selecione um objeto Processamento e no Montador de Expressão selecione a função Árvore – Criar Árvore, passando os  parâmetros que mostram na figura e atribuindo o resultado no identificador arvore.

![image1985.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar14.png)

7. Selecione um obtejo Decisão e no Montador de Expressão utilize a função  Menor ou Igual, passando como parâmetros a variável cont e tamanho da lista .

![image1955.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar15.png)

8. Selecione um objeto Interação, ligada a opção NÃO da Decisão criada anteriormente. Selecione a função Mensagem de Alerta , de acordo com a figura e depois ligue ao objeto Fim.

![image1986.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar16.png)

9. Selecione um objeto Processamento, ligada a opção SIM da Decisão criada anteriormente. Selecione a fução Obter Objeto da Lista e como parâmetros da mesma, utilize a variavel lista de diretorios e cont e atribua o resultado a variável elemento da lista, como mostra na figura:

![image1956.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar17.png)

10. Crie um novo fluxo para ser usado como SubFluxo, que ficará da seguinte maneira:

![image1987.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar18.png)

1. Informe o seguinte parâmetro de entrada:

![image1988.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar19.png)

2. Informe o seguinte Identificador (variável):

![image1989.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar20.png)

3. Selecione um objeto Processamento e no Montador de Expressão e selecione a função Quebrar Texto, passando como parâmetros a variável elemento_lista  e '\' e atribua o resultado da função ao identificador lista_quebrada.

![image1957.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar21.png)

4. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Tamanho da Lista, passando como parâmetro a variável lista_quebrada  e atribua o resultado da função ao identificador tamanho.

![image1958.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar22.png)

5. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Obter objeto da lista, passando como parâmetros as variáveis lista_quebrada  e tamanho e atribua o resultado da função ao identificador elemento.

![image1959.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar23.png)

6.  Atribua  a variável elemento  ao valor de retorno , como mostra a figura e salve o fluxo.

![image1990.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar24.png)

7. Voltando ao fluxo principal insira um objeto Subfluxo, selecione o fluxo que acabou de criar e selecione as variáveis como mostra a figura:

![image1991.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar25.png)

11. Selecione um objeto Processamento e no Montador de Expressão  selecione a função Árvore – Adicionar Filho, passando como parâmetros: 1- Função Obter Componente, com o nome do componente Árvore; 2- Função Árvore – Obter Raiz da Árvore, com a função Obter componente com o nome do componente Árvore; 3- variável elemento da lista.

![image1960.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar26.png)

12. Selecione um objeto Processamento e no Montador de Expressão selecione a função Soma, com os parâmetros, variável cont e 1. Atribuindo o resultado da expressão na variável cont e fazendo ligação ao último objeto  Decisão criado, assim fechando o laço.

![image1961.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar27.png)

Salve o fluxo na camada Cliente e associe-o ao componente Botão do formulário.

![image1992.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ar28.png)

Salve o formulário e execute-o no Webrun .

![image1993.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1993.jpg)
