---
title: "Utilizando a função Obter MD5 do arquivo"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/funcoes/utilizando_a_funcao_obter_md5_do_arquivo.htm"
---

Este exemplo tem por finalidade demonstrar a utilização da função Obter MD5 do arquivo, vale lembrar que o exemplo proposto é apenas uma das situações que esta função pode ser utilizada , cabe ao usuário definir a melhor forma de utilização conforme suas necessidades

Primeiramente imagine que se deseja obter a integridade do conteúdo de um arquivo, verificando através do MD5. Seguindo essa linha de raciocínio utilize os passos que serão citados a seguir.

1. Crie um formulário com as seguintes características:

![image1738.jpg](../../image1738.jpg)

O formulário não possui fonte de dados e as propriedades Navegação, Abas e Aba Localizar estão marcadas como Não.

Criado o formulário é hora de partir para o segundo passo, a criação do fluxo. De início criaremos o fluxo que será responsável por codificar o conteúdo do digitado pelo usuário para o formato MD5.

Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image1739.jpg](../../image1739.jpg)

1. Defina o seguinte parâmetro de entrada:

![image1740.jpg](../../image1740.jpg)

Esse parâmetro irá receber o texto, o qual será convertido para o formato MD5.

2. Defina a seguinte variável.

![image1741.jpg](../../image1741.jpg)

3. Adicione um objeto Processamento e no Montador de Expressão selecione a função MD5 do Texto.

![image1742.jpg](../../image1742.jpg)

O parâmetro informado é o texto digitado pelo usuário o qual será transformado pra o formato MD5

4. Adicione um objeto Processamento e no Montador de Expressão selecione a função Alterar Valor do Componente.

![image1743.jpg](../../image1743.jpg)

O primeiro parâmetro é o formulário onde se encontra o componente, o segundo parâmetro é o componente onde será adicionado o conteúdo e o terceiro parâmetro o conteúdo.

5. Salve o fluxo na camada Servidor e associe-o ao botão MD5.

![image1744.jpg](../../image1744.jpg)

Associe os parâmetros de entrada do fluxo ao componente texto.

O fluxo que apresentará a codificação do texto para o usuário está pronto. Agora criaremos o fluxo que irá converter o conteúdo do arquivo para o formato MD5.

![image1745.jpg](../../image1745.jpg)

1. Defina o seguinte parâmetro de entrada.

![image1746.jpg](../../image1746.jpg)

Observação: Esse parâmetro não deve ser associado a nenhum componente, ele receberá o caminho do arquivo que será determinado pelo fluxo Upload.

2. Defina os seguintes parâmetros de entrada.

![image1747.jpg](../../image1747.jpg)

3. Adicione um objeto processamento e no Montador de Expressão selecione a função Obter MD5 do Arquivo.

![image1748.jpg](../../image1748.jpg)

Neste processamento será obtido o MD5 do arquivo informado pelo usuário.

4. Adicione um objeto processamento e no Montador de Expressão selecione a função Alterar Valor do Componente.

![image1749.jpg](../../image1749.jpg)

Neste processamento o valor em MD5 do arquivo será apresentado no componente determinado pelo usuário.

5. Nomei o fluxo para Converte arquivo para MD5 e salve-o na camada Servidor.

Finalizado os dois fluxos acima, seguiremos para a criação do terceiro e último fluxo que será responsável por efetuar o Upload do arquivo.

Para um melhor entendimento o fluxo ficará da seguinte forma:

![image1750.jpg](../../image1750.jpg)

1. Adicione um objeto processamento e no Montador de Expressão selecione a função Upload.

![image1751.jpg](../../image1751.jpg)

O primeiro parâmetro pode-se deixar nulo, para o arquivo ser armazenado na pasta Upload do contexto do webrun, no segundo parâmetro informe a regra Converte arquivo para MD5, esta regra receberá o caminho onde foi armazenado o arquivo

2. Salve o fluxo na camada Servidor e associe-o ao botão Upload do formulário.

![image1752.jpg](../../image1752.jpg)

3. Salve o formulário e execute-o no Webrun e observe que a integridade do conteúdo do arquivo foi confirmada.

![image1753.jpg](../../image1753.jpg)

Neste exemplo efetuamos o upload do arquivo softwell.txt que possui como conteúdo o texto softwell.
