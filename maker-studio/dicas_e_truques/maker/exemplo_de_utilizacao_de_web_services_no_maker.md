---
title: "Exemplo de utilização de Web Services no Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/exemplo_de_utilizacao_de_web_services_no_maker.htm"
---

Resumo

A Função utilizada para este recurso é:

Chamar Serviço Web (Chama o Serviço da Web de acordo com os parâmetros passados).

![image721.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv1.png)

Parâmetros

1º - Endereço do Serviço Web (tipo Letras)

2º - Porta do Serviço Web (tipo Letras)

3º - Nome do Métoto (tipo Letras)

4º - Parâmetro Necessário para utilização do Serviço Web (tipo Variante)

Retorno

Retorna uma Variante.

Exemplo:

Parâmetros

1º - http://www.byjg.com.br/xmlnuke-php/webservice.php/ws/cep?WSDL

2º - CEPServicePort

3º - obterLogradouro

4º - 11111111 (CEP)

Retorno

Logradouro do CEP passado como parâmetro.

Visualize um exemplo prático e passo a passo

Neste exemplo, será consumido um Web Services no Maker. Iremos tomar como exemplo um formulário de cadastro de clientes e um Web Service (de terceiros) que obtém o logradouro a partir de um CEP informado. Ao preencher o CEP no formulário, o endereço ;será obtido automaticamente e o campo endereço será preenchido.

1º passo - criar o formulário no Maker.

1. Vamos assumir que o formulário de Clientes esteja criado e funcionando.

![image580.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image580.jpg)

2º passo - criar um fluxo que irá obter o valor do campo CEP e preencher o campo endereço:

1. Acesse o Editor de Fluxo de Ações;
2. Crie um Identificador (variável):

![image581.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv2.png)

3. Crie um Parâmetro de Entrada para receber o valor digitado no campo CEP:

![image582.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv3.png)

4. Crie a seguinte estrutura de fluxo inserindo dois objetos do tipo Processamento e documente como mostra a figura abaixo:

![image722.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv4.png)

5. Para o primeiro objeto Processamento, será utilizada a função Chamar Serviço Web, que faz parte da categoria Utilitário. Essa função utiliza-se de quatro parâmetros:

   1. O primeiro parâmetro - determina o endereço do WSDL do Web Service. Clicando sobre o primeiro parâmetro da função, na tela Propriedades, selecione o Tipo Letras e determine o endereço http://www.byjg.com.br/xmlnuke-php/webservice.php/ws/cep?WSDL:

![image1389.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv5.png)

2. O segundo parâmetro - determina a porta do Web Service. Clicando sobre o segundo parâmetro da função, na tela Propriedades, selecione o Tipo Letras e determine CEPServicePort.:

![image1390.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv5.png)

3. O terceiro parâmetro - do método que será chamado no Web Service. Neste caso é o método que obtém o Logradouro a partir do CEP. Clicando sobre o terceiro parâmetro da função, na tela Propriedades, selecione o Tipo Letras e determine obterLogradouro:

![image1391.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv5.png)

4. O quarto parâmetro - este é o parâmetro que o método do Web Service irá receber. No caso do método obterLogradouro, o parâmetro é o CEP do logradouro, que foi atribuído ao componente da tela anteriormente. Caso o método do Web Service receba n parâmetros, pode-se passar um objeto lista, contendo-os. Clicando sobre o quarto parâmetro da função, na tela Propriedades, selecione a Variável CEP:

![image1392.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv5.png)

6. Agora, utilizando o campo Atribuir o resultado ao identificador, selecione Retorno (então atribua o retorno do processamento à variável). Clique no botão ![image723.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ok.png);
7. Para o segundo objeto Processamento, será utilizada a função Alterar Valor do Componente, que faz parte da categoria Formulário. Ocorrerá a alteração do valor do componente que corresponde ao endereço do Cliente no formulário, inclusive passando como parâmetro a variável Retorno, que irá conter o Logradouro que foi retornado pelo Web Service.. Esta função utiliza três parâmetros:

1. O primeiro parâmetro - determina o nome do formulário, na aba Identificadores, Componente do Tipo Formulário, utilizando o campo ao lado:

![image1393.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv6.png)

2. O segundo parâmetro - determina o nome do componente do formulário que será preenchido pelo valor obtido. Da aba Identificadores, selecione o Tipo Componente e no campo ao lado, selecione o campo endereço do seu formulário:

![image1394.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv6.png)

3. O terceiro parâmetro - determina o valor do campo que será preenchido. Neste caso, definiremos a variável Retorno:

![image1395.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv6.png)

8. Clique no botão ![image724.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/ok.png).
9. Feche o Editor de Fluxo de Ações.

3º passo - agora basta ligar o fluxo ao Evento Ao Sair do componente CEP do formulário:

1. Selecione o campo CEP do formulário;
2. Clique direito do mouse sobre o campo, posicione o mouse em Eventos.
3. Na opção Ao Sair, clique no botão ![image725.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image391.png).
4. Na tela Ações, na opção Executar Regra de negócio, selecione abaixo o Nome do fluxo. No campo Entrada é necessário criar um parâmetro chamado CEP do tipo Letras e atribuí-lo ao componente CEP da tela (no caso CEP=&#123;edtCEP&#125;). Deve-se observar que edtCEP é o nome do componente do campo CEP no formulário.

![image590.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/serv7.png)

5. Após isto, salve o formulário.
6. Acesse o sistema na Web.
7. Atualize o formulário.
8. Ao preencher o CEP, na tela, o Endereço é preenchido automaticamente.
