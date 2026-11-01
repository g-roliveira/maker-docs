---
title: "Utilizando o Servidor de Aplicações JBoss"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/servidor_de_aplicacoes/jboss/utilizando_o_servidor_de_aplicacoes_jboss.htm"
---

Esse exemplo mostra como instalar e configurar o JBoss para funcionar perfeitamente com o Webrun e as aplicações criadas em Maker.

A versão homologada é a 4.2.1.GA que pode ser baixada no link a seguir.

Softwares necessários:

1. [Máquina Virtual Java JDK](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk7-downloads-1880260.html)
2. [JBoss-4.2.1.GA](http://sourceforge.net/projects/jboss/files/JBoss/JBoss-4.2.1.GA/)

Baixe o JDK e instale.

Concluindo a instalação do JDK baixe o JBoss e o extraia em uma pasta qualquer, nesse exemplo foi extraído na unidade raiz C:\ jboss-4.2.1.GA.

Depois de descompactar, deve-se configurar a variável de ambiente do Windows que o JBoss utilizará.

Vá em Iniciar -> Meu computador clique com o botão direito sobre o mesmo e em seguida clique em Propriedades, siga para a aba Configurações avançadas do Sistema e posteriormente clique em Variáveis de Ambiente. A seguinte tela será exibida.

![image1719.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1719.jpg)

No segundo quadro Variáveis do Sistema clique no botão Novo...

![image1720.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1720.jpg)

No campo Nome da variável adicione JBOSS_HOME.

No campo Valor da variável adicione C:\jboss-4.2.1.GA (Caminho onde esta a pasta do JBOSS que foi descompactada).

Ficando assim:

![image1721.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1721.jpg)

Nessa mesma tela configure a variável WEBRUN_HOME. Esta variável é utilizada pelo Webrun para carregar os arquivos de configuração, projetos e relatórios.

Clique em Novo... novamente:

No campo Nome da variável coloque WEBRUN_HOME.

No campo Valor da variável adicione o caminho onde está a pasta que contém os projetos do Maker, nesse exemplo estão em C:\Program Files\Softwell Solutions\Webrun.

Ficando dessa forma:

![image1722.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1722.jpg)

Crie também caso já não exista, a Variável de ambiente JAVA_HOME que terá como Valor da variável o valor C:\Program Files\Java\jdk7 (Pasta onde está instalado o JDK).

Ficando assim

![image1723.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1723.jpg)

Clique em OK nessa e nas outras telas abertas para que as configurações sejam salvas.

Finalizado essa parte, é necessário configurar o arquivo web.xml do JBoss que fica no diretório C:\jboss-4.2.1.GA\server\default\deploy\jboss-web.deployer\conf\web.xml.

Abra-o com um editor de texto e encontre a seguinte parte.

&lt;servlet-name&gt;jsp&lt;/servlet-name&gt;

&lt;servlet-class&gt;org.apache.jasper.servlet.JspServlet&lt;/servlet-class&gt;

&lt;init-param&gt;

   &lt;param-name&gt;fork&lt;/param-name&gt;

   &lt;param-value&gt;false&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

   &lt;param-name&gt;xpoweredBy&lt;/param-name&gt;

   &lt;param-value&gt;false&lt;/param-value&gt;

&lt;/init-param&gt;

Logo abaixo adicione os seguintes parâmetros:

&lt;init-param&gt;

   &lt;param-name&gt;compilerSourceVM&lt;/param-name&gt;

   &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

   &lt;param-name&gt;compilerTargetVM&lt;/param-name&gt;

   &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

Ficando assim:

&lt;servlet-name&gt;jsp&lt;/servlet-name&gt;

&lt;servlet-class&gt;org.apache.jasper.servlet.JspServlet&lt;/servlet-class&gt;

&lt;init-param&gt;

   &lt;param-name&gt;fork&lt;/param-name&gt;

   &lt;param-value&gt;false&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

   &lt;param-name&gt;xpoweredBy&lt;/param-name&gt;

   &lt;param-value&gt;false&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

   &lt;param-name&gt;compilerSourceVM&lt;/param-name&gt;

   &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

&lt;init-param&gt;

   &lt;param-name&gt;compilerTargetVM&lt;/param-name&gt;

   &lt;param-value&gt;1.5&lt;/param-value&gt;

&lt;/init-param&gt;

Observação: a parte em negrito foi a parte adicionada.

Terminado essas configurações, abra o seguinte diretório C:\jboss-4.2.1.GA\bin, nela execute arquivo run.bat.

O servidor será iniciado, e ao término mostrará a seguinte tela

![image1724.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1724.jpg)

O próximo passo é colocar o webrun.war no diretório C:\jboss-4.2.1.GA\server\default\deploy para que seja feita a publicação.

![image1725.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1725.jpg)

Agora acesse o webrun localhost:8036/webrun/

![image1827.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1827.jpg)

Por padrão o JBoss utiliza a porta 8036. Essa porta pode ser modificada no arquivo server.xml que fica em C:\jboss-4.2.1.GA\server\default\deploy\jboss-web.deployer.

Logo ao no início do arquivo encontre:

&lt;Connector port="8036" address="$&#123;jboss.bind.address&#125;"

         maxThreads="250" maxHttpHeaderSize="8192"

         emptySessionPath="true" protocol="HTTP/1.1"

         enableLookups="false" redirectPort="8443" acceptCount="100"

         connectionTimeout="20000" disableUploadTimeout="true" /&gt;

O valor de cor vermelha representa a porta que o servidor está utilizando, basta alterá-la e salvar o arquivo.

No exemplo foi aplicada a porta ficando assim:

&lt;Connector port="&lt;Port&gt;" address="$&#123;jboss.bind.address&#125;"

         maxThreads="250" maxHttpHeaderSize="8192"

         emptySessionPath="true" protocol="HTTP/1.1"

         enableLookups="false" redirectPort="8443" acceptCount="100"

         connectionTimeout="20000" disableUploadTimeout="true" /&gt;

Observação: Por padrão, o JBoss aceita somente conexões locais. Para aceitar conexões remotas, é necessário executar o arquivo run.bat com o parâmetro -b 0.0.0.0; Mais informações em: &lt;http://community.jboss.org/wiki/JBoss42FAQ&gt;.

Veja: [Versões Homologadas](../../../Versoes%20Homologadas)
