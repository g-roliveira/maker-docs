---
title: "Exemplo de como disponibilizar serviço Web"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/maker/exemplo_de_como_disponibilizar_servico_web.htm"
---

No endereço: &lt;http://localhost:8037/webrun/webservices&gt;,existem alguns serviços disponíveis pelo Webrun:

![image565.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/webservices.png)

Para este exemplo, utilizaremos a porta WFRWebService e o método callRulle para ilustra nosso exemplo.

Ao lado da porta WFRWebService, existe um link que abrirá o WSDL.

Web Services Definition Language (WSDL) é uma linguagem baseada em XML utilizada para descrever Web Service. Trata-se de um documento escrito em XML que além de descrever o serviço, especifica como acessá-lo e quais as operações ou métodos disponíveis.

Dentro do WSDL, existem métodos que estão relacionados com a porta WFRWebService. Iremos utilizar o método callRule:

![image715.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web2.png)

Serão utilizados cinco parâmetros:

- 1º Parâmetro: Sigla do sistema;
- 2º Parâmetro: Usuário;
- 3º Parâmetro: Senha;
- 4º Parâmetro: Nome do fluxo (Obs.: Fluxo com destino servidor e marcada como externo);
- 5º Parâmetro: Lista de parâmetros para o fluxo.

Exemplo 1

Para este exemplo, iremos construir dois fluxos: um que terá acesso externo, ou seja, disponibilizará um serviço que poderá ser consumido posteriormente; e outro que chamará o serviço web disponibilizado pelo primeiro fluxo.

Siga os passos:

Primeiro Fluxo:

- Nome: Web Service

![image566.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web3.png)

- Parâmetro de entrada:

![image567.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web4.png)

- Expressão:

![image568.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web5.png)

- Parâmetro de retorno:

![image569.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web6.png)

Este fluxo requer dois parâmetros de entrada: o primeiro será do tipo Letras e o segundo do tipo Número, que servirá para indicar a posição inicial. Para o parâmetro de retorno, define-se a quantidade de caracteres que se deseja obter do nome passado pelo primeiro parâmetro.

Segundo Fluxo:

- Nome: Chamar Serviço Web

![image570.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web7.png)

- Expressão:

Observação: Todo conteúdo passado para a lista tem que ser do tipo Letra. Quando se for utilizar o serviço interno, Webrun.

Utilizaremos a função Chamar serviço web, que recebe quatro parâmetros:

- 1º Parâmetro: URL do Web Service (sempre com http:// antes). Para o exemplo, utilizaremos:

http://localhost:8036/webrun/services/WFRWebService?wsdl

- 2º Parâmetro: Porta. Para o exemplo, utilizaremos:

WFRWebService

- 3º Parâmetro: Nome do Método. Para o exemplo, utilizaremos:

callRule

- 4º Parâmetro: Variante - uma lista de parâmetros para o método callRule:

...

&lt;wsdl:part name="system" type="xsd:string" /&gt;

&lt;wsdl:part name="user" type="xsd:string" /&gt;

&lt;wsdl:part name="password" type="xsd:string" /&gt;

&lt;wsdl:part name="ruleName" type="xsd:string" /&gt;

&lt;wsdl:part name="params" type="impl:ArrayOfString" /&gt;

...

Para o primeiro parâmetro, passaremos a sigla do sistema; para o segundo, passaremos a identificação do usuário; para o terceiro, informaremos a senha; para o quarto, indicaremos o nome do fluxo (fluxo do tipo servidor e marcado como externo) e o quinto parâmetro é uma lista de parâmetros para o fluxo do parâmetro anterior.

Observação: Todos os conteúdos passados para a lista, deverão ser do tipo letras, caso seja o método callRule que receba um ArrayOfString.

Exemplo 2

Neste exemplo, demonstraremos como disponibilizar serviço web, utilizando o método callRuleWithoutParams que é bastante similar ao Exemplo 1, mas sem a utilização de parâmetros para o fluxo que será disponibilizado. O método callRuleWithoutParams recebe quatro parâmetros:

![image716.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web8.png)

- 1º Parâmetro: Sigla do sistema;
- 2º Parâmetro: Usuário;
- 3º Parâmetro: Senha;
- 4º Parâmetro: Nome do fluxo (deve ser do tipo servidor e marcado como externo).

Para este exemplo, serão criados dois fluxos: um que terá acesso externo, ou seja, disponibilizará um serviço que poderá ser consumido posteriormente; e outro que chamará o serviço web disponibilizado pelo primeiro fluxo.

Primeiro fluxo:

- Nome: Obter Data

![image717.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web9.png)

Observação: ao contrário do Exemplo 1, este fluxo não exige Parâmetro de Entrada.

- Expressão:

![image718.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web10.png)

- Retorno:

![image571.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web11.png)

Segundo fluxo:

- Nome: Chamar Serviço Web

![image1007.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web12.png)

- Expressão:

![image720.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/web13.png)

Observação: Todo conteúdo passado para a lista tem que ser do tipo Letra, quando se for utilizar o serviço interno, Webrun.

Utilizaremos a função Chamar serviço web, que recebe quatro parâmetros:

- 1º Parâmetro: URL do Web Service (sempre com http:// antes). Para o exemplo utilizaremos:

http://localhost:8080/webrun/services/WFRWebService?wsdl

- 2º Parâmetro: Porta. Para o exemplo, utilizaremos:

WFRWebService

- 3º Parâmetro: Nome do Método. Para o exemplo, utilizaremos:

callRuleWithoutParams

- 4º Parâmetro: Variante - uma lista de parâmetros para o método callRule, que recebe quatro parâmetros:

...

&lt;wsdl:part name="system" type="xsd:string" /&gt;

&lt;wsdl:part name="user" type="xsd:string" /&gt;

&lt;wsdl:part name="password" type="xsd:string" /&gt;

&lt;wsdl:part name="ruleName" type="xsd:string" /&gt;

...

- 1º Parâmetro: Sigla do sistema;
- 2º Parâmetro: Usuário;
- 3º Parâmetro: Senha;
- 4º Parâmetro: Nome da regra (fluxo do tipo servidor e marcado como externo).
