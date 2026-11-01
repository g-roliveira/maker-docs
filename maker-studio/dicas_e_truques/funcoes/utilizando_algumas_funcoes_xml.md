---
title: "Utilizando Algumas Funções XML"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/funcoes/utilizando_algumas_funcoes_xml.htm"
---

# Utilizando algumas funções XML

Neste tópico, será mostrada utilização de algumas funções XML. O exemplo criado apresentará o Nome, a Idade e o Endereço do Empregado.

Para facilitar o entendimento, o fluxo ficará da seguinte forma:

![image893.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe103.png)

Siga os passos:

1º Passo: Criar o fluxo. Após a abertura da tela [Editor de Fluxos e Ações](../../maker_3/fluxos_e_acoes/editor_de_fluxo_de_acoes), apresentará a tela Identificadores (variáveis) para criação das variáveis:

![image894.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe104.png)

2º Passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para criação do documento XML. Use a função Abrir XML e atribua o resultado à variável Documento XML:

![image884.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe105.png)

No parâmetro da função, foi adicionado o script abaixo:

&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;

&lt;empregados&gt;

&lt;empregado&gt;

&lt;nome&gt;Maria Aparecida&lt;/nome&gt;

|&lt;idade&gt;26&lt;/idade&gt;

&lt;endereco&gt;Rua Terra, 13&lt;/endereco&gt;

&lt;/empregado&gt;

&lt;empregado&gt;

&lt;nome&gt;Eugenio Mazzini&lt;/nome&gt;

&lt;idade&gt;42&lt;/idade&gt;

&lt;endereco&gt;Rua La Paz, 516&lt;/endereco&gt;

&lt;/empregado&gt;

&lt;/empregados&gt;

3º Passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o documento XML. Use a função Obter Raiz e atribua o resultado à variável Raiz do XML:

![image885.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe106.png)

4º Passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o filho de um determinado elemento XML informado. Nesse caso, é "empregado". Use a função Filho de um Elemento XML e atribua o resultado à variável Filhos de Empregados:

![image886.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe107.png)

5º Passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter a quantidade de filhos do elemento "empregado". Use a função Tamanho da Lista e atribua o resultado à variável Quantidade de Empregados:

![image887.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe108.png)

6º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png) para verificar se o contador é menor ou igual à quantidade de empregados. Use a função Menor ou igual:

![image888.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe109.png)

7º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o objeto da lista. Use a função Obter Objeto da Lista e atribua o resultado à variável Atributos do Empregado:

![image889.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe110.png)

8º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o filho do elemento "nome". Use a função Obter Filho de Elemento e insira acima outra função, Obter o valor de um Elemento XML e atribua o resultado à variável Nome do Empregado:

![image890.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe111.png)

9º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o filho do elemento "idade". Use a função Obter Filho de Elemento e insira acima outra função, Obter o valor de um Elemento XMLe atribua o resultado à variável Idade do Empregado:

![image891.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe112.png)

10º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para obter o filho do elemento "endereco". Use a função Obter Filho de Elemento e insira acima outra função, Obter o valor de um Elemento XMLe atribua o resultado à variável Endereço do Empregado:

![image893.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe113.png)

11º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/inte.png) para exibir na tela o Nome, a Idade e o Endereço do Empregado. Use a função Concatenação, Quebra de Linha e Para Letras:

![image895.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe114.png)

12º passo: Insira ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.jpg) para somar mais "1" à variável "contador de empregados". Use a função Soma e atribua o resultado à variável Contador de Empregados:

![image895.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe115.png)

Por fim, faça ligação desse último ![image382.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image382.png) para o componente ![image384.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/dec.png) construindo um laço de repetição. Salve o fluxo na camada Servidor.

Após ter concluído o fluxo, é necessário criar um formulário sem fonte de dados com um botão:

![image898.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe116.png)

Observação: Associe o botão ao fluxo.

Para testar o funcionamento do fluxo, acesse o Webrun, localize o formulário criado e clique no botão XML:

![image899.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/exe117.png)

[Clique aqui para realizar o download do Exemplo](http://download.softwell.com.br/suporte/exemplos/frz/Exemplo_Funcoes_XML.frz)
