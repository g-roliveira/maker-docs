---
title: "Enviando arquivos via fluxo Web"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/maker/enviando_arquivos_via_fluxo_web.htm"
---

No exemplo a seguir, será demonstrado como enviar arquivos via fluxo Web. A funcionalidade Fluxo Web é uma característica do Webrun que permite acesso à fluxos que tem a propriedade Web ativada. É muito útil para integração entre hotsites e sistemas desenvolvidos em Maker.

Siga os passos abaixo:

1º passo: Criação do Fluxo.

Crie um fluxo e adicione como parâmetro de entrada, uma variável do tipo Variante e outra variável do tipo Letras. Chamaremos de arquivoWeb e caminho para arquivamento, respectivamente.

![image1490.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1490.jpg)

2º passo: Processamentos e variáveis.

Adicione três processamentos e uma variável do tipo Variante, esta variável guardará a referência para o arquivo criado, chamaremos de referenciaLocal. O primeiro processamento criará a referência para o arquivo atribuindo o resultado à variável referenciaLocal; O Segundo processamento adicionará o conteúdo enviado pelo browser à referência do arquivo criado; O Terceiro processamento fechará o arquivo finalizando a execução do fluxo. Veja a ilustração.

![image1491.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1491.jpg)

Conteúdo do primeiro processamento:

![image1492.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1492.jpg)

Conteúdo do segundo processamento:

![image1493.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1493.jpg)

Conteúdo do terceiro processamento:

![image1494.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1494.jpg)

3º passo: Salve o fluxo na camada Servidor, chamaremos de Enviando arquivo via fluxo web, após salvar o fluxo, feche-o.

4º passo: Após ter salvado o fluxo, localize-o na aba Objeto Fluxos. Clique com o botão direito do mouse e selecione a opção Web:

![image1497.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1497.jpg)

5º passo: Salve o projeto e reinicie o Webrun.

6º Passo: Criação da página HTML que chamará o fluxo criado nos passos acima. Abra um editor de texto de sua preferência e adicione o código HTML abaixo.

&lt;html&gt;

    &lt;title&gt;

          Softwell Solutions

    &lt;/title&gt;

&lt;head&gt;

    &lt;meta http-equiv="Content-Type" content="text/html;"&gt;

&lt;/head&gt;

 &lt;body&gt;

     &lt;h1&gt; Fluxo Web. Envio de Arquivos &lt;/h1&gt;

     &lt;form method="POST" action="http://127.0.0.1:8086/webrun/Enviando arquivo via fluxo Web.rule" name="frm" enctype="multipart/form-data"&gt;

       &lt;input type="hidden" name="sys" value="BS5"&gt;

       &lt;input type="file" name="arquivoWeb" size="50"&gt; <br/>

       &lt;input type="text" name="caminho para arquivamento" size="50"&gt;

       &lt;input type="submit" value="Enviar arquivo"&gt;

      &lt;/form&gt;

  &lt;/body&gt;

&lt;/html&gt;

Observe que no código acima, há dois componentes HTML (em destaque) que possuem o mesmo nome dos parâmetros de entrada do fluxo Enviando arquivo via fluxo Web.rule. Este procedimento é necessário para o Webrun identificar para onde irá cada parâmetro enviando pelo método Post.

Salve o arquivo em formato HTML e abra o arquivo no browser desejado. Selecione o arquivo e informe em qual diretório o arquivo será gravado. Clique em Enviar Arquivo.

O diretório informado no segundo parâmetro deve ser um diretório válido. O nome do arquivo no destino deve conter a extensão ex.: “MEU ARQUIVO.EXTENSÃO”
