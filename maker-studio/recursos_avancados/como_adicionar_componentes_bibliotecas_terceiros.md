---
title: "Como adicionar componentes/bibliotecas de terceiros"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/como_adicionar_componentes_bibliotecas_terceiros.htm"
---

Este tutorial explica quais procedimentos devem ser realizados para adicionar componentes/bibliotecas de terceiros no Maker.

Primeiro passo é obter a biblioteca, para este exemplo será utilizada uma biblioteca recém criada, esta biblioteca conterá uma classe, com o nome "Externa" e dois métodos cujos nomes serão 'Metodo1()' e 'Metodo2()'.

public class Externa &#123;

    public long Metodo1(long num1,long  num2)&#123;

        long soma = (num1*2)+(num2*2);

        return(soma);

    &#125;

    public String Metodo2()&#123;

        String msg = "Utilizando biblioteca de terceiros";

        return(msg);

    &#125;

&#125;

Esta classe foi salva no pacote 'maker'.

Depois de obter o '.jar' , o mesmo deverá ser copiado para o contexto da aplicação no diretório 'WEB-INF/lib' e o serviço do Webrun deverá ser reiniciado para que a biblioteca/jar seja carregada.

Neste exemplo será criada uma função na API para utilizar um dos métodos.

No Maker abra a janela de funções (Projeto -> Funções) e clique em novo.

Defina os parâmetros da função:

![funcoesdofluxodeacoes.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/funcoesdofluxodeacoes.png)

Na aba servidor escreva o código da função:

![funcoesdofluxodeacoes2.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/funcoesdofluxodeacoes2.png)

Código:

protected final Variant BTerceiros() throws Exception &#123;

maker.Externa classeTerceiros = new maker.Externa();

return VariantPool.get(classeTerceiros.Metodo2());

&#125;

Perceba que para instanciar a classe é necessário passar o nome do pacote 'nome_do_pacote.classe'.

Salve a função e feche a janela de funções.

Agora crie um fluxo que executará esta função.

Neste fluxo deverá conter 1 processamento.

![montador_de_expressão.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/fluxo_teste.png)

No montador de expressões use a função 'Alertar aguardando Ok' para exibir a mensagem na tela e como parâmetro utilize a função recém criada para executar a biblioteca de terceiros.

Salve o fluxo e vincule a um evento.

Se tudo estiver correto ao executar no Webrun irá ser exibida a seguinte mensagem:

![bibliotecaterceiros.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bibliotecaterceiros.png)

Caso deseje utilizar o Metodo1 segue o script da função:

protected final Variant somaTerceiros(Variant val1 , Variant val2) throws Exception &#123;

long numero1 = val1.getLong();

long numero2 = val2.getLong();

maker.Externa classeTerceiros = new maker.Externa();

return VariantPool.get(classeTerceiros.Metodo1(numero1,numero2));

&#125;

Observação: Caso não deseje criar uma função na API basta utilizar a função 'Executar Java'.

Exemplo:

![bibliotecaterceiros2.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bibliotecaterceiros2.png)

Existem duas formas de utilizar variáveis do fluxo nas funções Executar Java e Executar Javascript:

1. Por referência - passamos a referência da variável para a função. Para utilizar, no conteúdo da função, você pode usar a seguinte sintaxe:

&lt;%&lt;Nome da variável&gt;%&gt;

Exemplo:

Return VariantPool.get(classeTerceiros.Metodo1(&lt;%val1%&gt;.getLong(),&lt;%val2%&gt;.getLong()));

2. Por valor - passamos o valor íntegro da variável para a função. O sistema simplesmente substitui o valor no conteúdo da função antes de executá-la. Para utilizar, no conteúdo da função, você pode usar a seguinte sintaxe:

&lt;%=&lt;Nome da variável&gt;%&gt;

Exemplo:

return VariantPool.get(classeTerceiros.Metodo1(&lt;%=val1%&gt;,&lt;%=val2%&gt;));

Como referenciar e chamar uma biblioteca Javascript

Para referenciar e utilizar uma biblioteca JavaScript, devemos utilizar a função Executar JavaScript.

Antes de utilizar a biblioteca, devemos referenciá-la no contexto. Para isso, executaremos o seguinte JavaScript:

webrun.include(&lt;caminho relativo da biblioteca&gt;);

Exemplo :

webrun.include('MeusJS/biblioteca1.js');

Exemplo :

![bibliotecaterceiros3.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bibliotecaterceiros3.png)

Podemos também criar uma função na API chamada Incluir Javascript. Para isso, acesse o tópico [Cadastro de Funções](../maker_3/fluxos_e_acoes/cadastro_de_funcoes).

Para chamar funções da biblioteca, usamos também a função Executar Javascript.

Exemplo:

![bibliotecaterceiros4.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bibliotecaterceiros4.png)

Exemplo

Vamos mostrar um exemplo real para auxiliar a compreensão deste tutorial. Faremos um exemplo de como utilizar uma biblioteca de terceiros disponibilizada aqui que permite a criação de um dialog (uma caixa de alerta personalizada).

Primeiro, vamos descompactar o conteúdo disponibilizado em um diretório temporário e depois copiar o conteúdo da pasta &lt;diretório temporário&gt;\dialog\js para a pasta &lt;sistemas&gt;\Maker.Commons\MeusJS\. Assim, deveremos ter algo como ilustrado abaixo:

![bibliotecaterceiros5.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bibliotecaterceiros5.png)

Faremos agora um fluxo e o colocaremos no evento "Ao Entrar" de um formulário. Esse fluxo irá criar o nosso Dialog.

Primeiro deveram ser criadas as seguintes variáveis.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog.png)

Logo após deveram ser adicionados os seguintes processamentos.

Processamento 1:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog13.png)

Nesse processamento deve ser feito o includ das bibliotecas no webrun com o seguinte código.

webrun.include('MeusJS/dialog/jquery-1.8.2.min.js');

webrun.include('MeusJS/dialog/jquery-ui-1.8.24.custom.min.js');

Processamento 2:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog2.png)

O CSS deve ser importado da seguinte forma, basta copiar todo o código do arquivo dialog.css que foi disponibilizado no download acima.

Processamento 3:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog3.png)

O elemento &lt;lay&gt; deve ser obtido para a sua utilização posteriormente.

Processamento 4:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog4.png)

O elemento &lt;a&gt; deve ser criada passando os parâmetros acima.

Processamento 5:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog5.png)

Criar um elemento &lt;p&gt; para utilização conjunta ao próximo elemento.

Processamento 6:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog6.png)

Um elemento &lt;div&gt; deve ser criado com os seguintes parâmetros.

Processamento 7:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog7.png)

É preciso definir o conteúdo que irá ficar dentro do dialog.

Processamento 8:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog8.png)

Aqui é definido o conteúdo que irá ficar dentro do elemento &lt;a"o mesmo será o botão que abrirá o dialog.

Processamento 9:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog9.png)

Depois basta anexar o elemento &lt;p&gt; dentro do elemento &lt;div&gt;.

Processamento 10:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog10.png)

Anexar o elemento &lt;a&gt; ao nosso &lt;lay&gt;.

Processamento 11:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog11.png)

E anexar a &lt;div&gt; a &lt;lay&gt;.

Processamento 12:

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog12.png)

Esse é o script que irá fazer o dialog funcionar, sem ele a nossa caixa de dialog é uma simples &lt;div&gt;, o código é da seguinte forma.

$('#dialog').dialog(&#123;

autoOpen: false,

width: 600,

buttons: &#123;

"Ok": function() &#123;

$(this).dialog("close");

&#125;,

"Cancel": function() &#123;

$(this).dialog("close");

&#125;

&#125;

&#125;);

$('#dialog_link').click(function()&#123;

$('#dialog').dialog('open');

return false;

&#125;);

No webrun o seguinte resultado será apresentado.

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog14.png)

![Imagem do manual](https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/imagens/dialog15.png)
