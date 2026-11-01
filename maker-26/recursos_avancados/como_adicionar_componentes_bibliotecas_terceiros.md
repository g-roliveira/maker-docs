---
title: "Como adicionar componentes/bibliotecas de terceiros"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/recursos_avancados/como_adicionar_componentes_bibliotecas_terceiros.htm"
---

Este tutorial explica quais procedimentos devem ser realizados para adicionar componentes/bibliotecas de terceiros no Maker.

1º Passo - Como importar arquivos para o contexto do Webrun

Você pode importar arquivos para o contexto do Webrun de duas formas:

1. Criando um arquivo compactado JAR com o mesmo nome do arquivo WFRE do sistema e colocando-o na pasta de sistemas. Assim, na carga do sistema, o Webrun incluirá o conteúdo de tal arquivo em seu diretório de contexto, de forma que esses arquivos possam ser acessados por rotinas criadas pelo usuário do Maker.

Exemplo (1)

&lt;sistemas&gt;\Sistema de Exemplo.wfre

&lt;sistemas&gt;\Sistema de Exemplo.jar

Exemplo (2)

![image334.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image334.jpg)

2. Criando uma pasta com o mesmo nome do arquivo WFRE do sistema (excluindo a extensão) ou com o nome Maker.Commons e colocando-a na pasta de sistemas. Assim, na carga do sistema, o Webrun incluirá o conteúdo dessa pasta em seu diretório de contexto, de forma que esse conteúdo possa ser acessado por rotinas criadas pelo usuário do Maker.

Exemplo (1)

&lt;sistemas&gt;\Sistema de Exemplo.wfre

&lt;sistemas&gt;\Sistema de Exemplo

Exemplo (2)

&lt;sistemas&gt;\Sistema de Exemplo.wfre

&lt;sistemas&gt;\Maker.Commons

Exemplo (3)

![image335.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image335.jpg)

Exemplo (4)

![image336.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image336.jpg)

## Como incluir bibliotecas Javascript

Bibliotecas Javascripts são normalmente escritas em arquivos com extensão JS e podem ser referenciadas de qualquer ponto do contexto da aplicação, desde que haja permissão para isso.

Exemplo (1)

&lt;sistemas&gt;\Sistema de Exemplo.wfre

&lt;sistemas&gt;\ Sistema de Exemplo\meusJS\biblioteca1.js

&lt;sistemas&gt;\ Sistema de Exemplo\meusJS\biblioteca2.js

Exemplo (2) - Inclusão da biblioteca de texto rico TinyMCE

![image339.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image339.jpg)

## Como incluir bibliotecas Java

Bibliotecas Java são normalmente empacotadas em arquivos com extensão JAR. Para que as classes contidas em um JAR se tornem visíveis pelo Webrun, elas precisam estar presentes dentro do diretório WEB-INF\lib do webrun.

Exemplo (1)

&lt;sistemas&gt;\Sistema de Exemplo.wfre

&lt;sistemas&gt;\ Sistema de Exemplo\WEB-INF\lib\biblioteca1.jar

&lt;sistemas&gt;\ Sistema de Exemplo\WEB-INF\lib\biblioteca2.jar

Exemplo (2) - Incluindo uma biblioteca de resolução de expressões JEP

![image338.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image338.jpg)

Segundo Passo - Referenciar arquivos importados por meio do Maker

Para referenciar um arquivo por meio do Maker, você deverá utilizar o fluxo e as funções Executar Javascript e Executar Java.

## Como referenciar e chamar uma biblioteca Javascript

Para referenciar e utilizar uma biblioteca Javascript, devemos utilizar a função Executar Javascript.

Antes de utilizar a biblioteca, devemos referenciá-la no contexto. Para isso, executaremos o seguinte Javascript:

webrun.include(’&lt;caminho relativo da biblioteca&gt;’);

Exemplo (1)

webrun.include(MeusJS/biblioteca1.js’);

Exemplo (2)

![image340.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image340.jpg)

Podemos também criar uma função na API chamada Incluir Javascript. Para isso, acesse o tópico [Cadastro de Funções](../maker_2/fluxos_e_acoes/cadastro_de_funcoes).

Para chamar funções da biblioteca, usamos também a função Executar Javascript.

Exemplo:

![image343.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image343.jpg)

## Como referenciar e chamar uma biblioteca Java

Para referência e utilizar uma biblioteca Java, devemos utilizar a função Executar Java. Devemos chamá-la sempre com o pacote completo.

Exemplo (1)

org.nfunk.jep.JEP exp = new org.nfunk.jep.JEP();

return new Variant(exp.parse(’1==1’));

Exemplo (2)

![image344.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image344.jpg)

Observações:

1. A função Executar Java exige que se retorne um valor e esse valor deve ser do tipo Variant. Assim, para retornar um valor qualquer, utilize:

return new Variant(&lt;valor&gt;);

2. Para retornar nulo, utilize: return Variant.VARIANT_NULL;

Podemos também criar uma função na API com o conteúdo das funções Executar Java (servidor) e Executar Javascript (cliente). Para isso, acesse o tópico [Cadastro de Funções](../maker_2/fluxos_e_acoes/cadastro_de_funcoes).

Como utilizar variáveis do fluxo nas funções Executar Java e Executar Javascript

Existem duas formas de utilizar variáveis do fluxo nas funções Executar Java e Executar Javascript:

1. Por referência - passamos a referência da variável para a função. Para utilizar, no conteúdo da função, você pode usar a seguinte sintaxe:

&lt;%&lt;Nome da variável&gt;%&gt;

Exemplo (1) -  Javascript

alert(&lt;%Parâmetro 1%&gt;);

Exemplo (2) -  Java

return new Variant(’O valor é : ’ + &lt;%Parâmetro 1%&gt;);

2. Por valor - passamos o valor íntegro da variável para a função. O sistema simplesmente substitui o valor no conteúdo da função antes de executá-la. Para utilizar, no conteúdo da função, você pode usar a seguinte sintaxe:

&lt;%=&lt;Nome da variável&gt;%&gt;

Exemplo (1) -  Javascript

alert(’&lt;%=Parâmetro 1%&gt;’);

Exemplo (2) -  Java

return new Variant(’O valor é : + &lt;%=Parâmetro 1%&gt;’);

Exemplo

Vamos mostrar um exemplo real para auxiliar a compreensão deste tutorial. Faremos um exemplo de como utilizar uma biblioteca de terceiros chamada TinyMCE que permite a edição de textos com formatação rica (negrito, itálico, etc.).

Primeiro vamos baixá-la na internet pelo endereço http://tinymce.moxiecode.com/ na área de downloads.

Depois, vamos descompactar seu conteúdo em um diretório temporário e depois copiar o conteúdo da pasta &lt;diretório temporário&gt;\tinymce\jscripts para a pasta &lt;sistemas&gt;\Maker.Commons\MeusJS\. Assim, deveremos ter algo como ilustrado abaixo:

![image339.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image339.jpg)

Faremos agora um fluxo e o colocaremos no evento ”Ao Entrar” de um formulário. Esse fluxo transformará um componente Texto Longo que passaremos como parâmetro em Texto Rico. Assim, vamos criar um fluxo com um parâmetro de entrada chamado ”Nome do Componente” e dois processamentos. Um fará a importação da biblioteca e outro fará a transformação:

Processamento 1:

Função: Executar Javascript

Conteúdo:

window.tinyMCE_GZ = &#123;loaded: true&#125;;

webrun.include('MeusJS/tiny_mce_src.js');

Processamento 2:

Função: Executar Javascript

Conteúdo:

tinymce.documentBaseURL = window.location.href.replace(/[\?#].*$/, '').replace(/[\/\\][^\/]+$/, '');

if (!/[\/\\]$/.test(tinymce.documentBaseURL))

tinymce.documentBaseURL += '/';

tinymce.documentBaseURL += 'MeusJS/' ;

tinymce.baseURL = new tinymce.util.URI(tinymce.documentBaseURL).toAbsolute(tinymce.documentBaseURL);

tinymce.EditorManager.baseURI = new tinymce.util.URI(tinymce.baseURL);

tinymce.EditorManager.baseURI = new tinymce.util.URI(tinymce.baseURL);

tinymce.dom.Event.domLoaded = true;

tinyMCE.init(&#123; mode : "none", theme : "simple", &#125;);

var comp = $c('&lt;%=Nome do Componente%&gt;');

var name = comp.input.name;

comp.input.id = name;

var oldSetValue = comp.setValue;

comp.setValue = function() &#123;

tinyMCE.get(name).setContent(arguments[0]);

oldSetValue.apply(this, arguments);

&#125;

tinyMCE.execCommand('mceAddControl', true, name);

$c(&lt;%Nome do Componente%&gt;).setVisible(true);

Observação: para criar o processamento acima, necessitou-se, é claro, de conhecimentos avançados de Javascript, conhecimentos da API, do Webrun e de conhecimentos da biblioteca TinyMCE.

Enfim, vamos criar um formulário, criar um componente Texto Longo chamado MakerMemo1 e colocar no evento ”Ao Entrar” o fluxo que criamos e atribuir ao parâmetro ”Nome do Componente” o valor ”MakerMemo1”. Deveremos ter o seguinte resultado:

![image345.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image345.jpg)

## Criando como uma função

Este tutorial usou as funções Executar Java e Executar Javascript. Porém, uma outra abordagem poderia ter sido utilizada. Poderíamos ter estendido a API com o conteúdo de tais funções. Para isso, siga os passos seguintes:

1. Ative o menu Projeto no Maker.
2. Clique em Funções.... Será exibida a seguinte tela:

![image341.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image341.jpg)

Observe as opções da tela:

1. [Barra de Ferramentas da tela](../maker_2/formulario/barra_de_ferramentas_da_tela).
2. Aba Geral - permite cadastrar dados sobre a função com os seguintes campos:

1. Código - numeração automática que identifica internamente a função criada. O próprio Maker gera este número;
2. Nome/Apelido - converter para Texto Rico;
3. Descrição - converte para Texto Rico um componente Texto Longo;
4. Nome real - ebfConvertRichText;
5. Parâmetros -  Letras;
6. Tipo da Função - categoria em que deve estar definida a função. O botão ![image641.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image641.gif) permite acionar a tela de cadastro de tipos. Crie uma nova: Minhas Funções:

![image347.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image347.jpg)

7. Retorno - Nada;
8. Resumo - Converte para Texto Longo (Letras);
9. Compatibilidade - 1;

3. Aba Cliente - Conteúdo da função Javascript:

 function ebfConvertRichText(component) &#123;

window.tinyMCE_GZ = &#123;loaded: true&#125;;

webrun.include('MeusJS/tiny_mce_src.js');

tinymce.documentBaseURL = window.location.href.replace(/[\?#].*$/,  '').replace(/[\/\\][^\/]+$/, '');

if (!/[\/\\]$/.test(tinymce.documentBaseURL))

tinymce.documentBaseURL += '/';

tinymce.documentBaseURL += 'MeusJS/' ;

tinymce.baseURL = new   tinymce.util.URI(tinymce.documentBaseURL).toAbsolute(tinymce.document  BaseURL);

tinymce.EditorManager.baseURI = new   tinymce.util.URI(tinymce.baseURL);

tinymce.EditorManager.baseURI = new     tinymce.util.URI(tinymce.baseURL);

tinymce.dom.Event.domLoaded = true;

tinyMCE.init(&#123; mode : "none", theme : "simple", &#125;);

var comp = $c(component);

var name = comp.input.name;

comp.input.id = name;

var oldSetValue = comp.setValue;

comp.setValue = function() &#123;

tinyMCE.get(name).setContent(arguments[0]);

oldSetValue.apply(this, arguments);

&#125;

tinyMCE.execCommand('mceAddControl', true, name);

&#125;

4. Aba Servidor - Não declarar nada.

Para Mais informações acesse o tópico [Cadastro de Funções](../maker_2/fluxos_e_acoes/cadastro_de_funcoes).
