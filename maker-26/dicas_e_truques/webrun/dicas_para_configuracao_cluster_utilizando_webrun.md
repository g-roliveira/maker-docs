---
title: "Dicas para a configuração de um cluster utilizando o Webrun"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/webrun/dicas_para_configuracao_cluster_utilizando_webrun.htm"
---

- Servidor FrontEnd: Apache 2.2.9 ou superior

&lt;http://www.superdownloads.com.br/download/99/apache/&gt;

- Servidores BackEnd: Apache Tomcat 6.0

&lt;http://www.superdownloads.com.br/download/153/apache-tomcat/&gt;

1. Configuração do arquivo httpd.conf da máquina Servidor FrontEnd:

2. 1. Módulos requeridos:

      1. LoadModule proxy_module modules/mod_proxy.so
      2. LoadModule proxy_balancer_module modules/mod_proxy_balancer.so
   2. Configuração adicional:

      1. Include conf/extra/httpd-webrun-balancer.conf

   Observação: O arquivo httpd.conf encontra-se na pasta C:\Arquivos de programas\Apache Software Foundation\Apache2.2\conf da máquina Servidor FrontEnd. Localize os módulos descritos acima e retire a marca de comentário, ou seja, o símbolo "#". E, inclua a Configuração adicional no final do documento.
3. Configuração do arquivo server.xml em cada Servidor BackEnd:

   1. Localizar &lt;Engine name="Catalina" defaultHost="localhost"&gt; e mudar para &lt;Engine name="Catalina" defaultHost="localhost" jvmRoute="[nome do jvmroute]"&gt; e adicionar &lt;attribute name="UseJK"&gt;true&lt;/attribute&gt; logo abaixo.

Observação: O arquivo server.xml encontra-se na pasta C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\conf da máquina Servidor FrontEnd. O parâmetro [nome do jvmroute] corresponde a uma identificação para a máquina que compõe o cluster. Exemplo:

&lt;Engine name="Catalina" defaultHost="localhost" jvmRoute="noh01"&gt;

Na pasta C:\Arquivos de programas\Apache Software Foundation\Apache2.2\conf\extra, deve existir o arquivo http-webrun-balancer.conf para especificar os servidores que fazem parte do cluster:

&lt;Proxy balancer://webrun&gt;

BalancerMember ajp://[servidor 1]:[porta ajp] route=[nome do jvmroute] ping=[valor do ping]

BalancerMember ajp://[servidor 2]:[porta ajp] route=[nome do jvmroute] ping=[valor do ping]

BalancerMember ajp://[servidor 3]:[porta ajp] route=[nome do jvmroute] ping=[valor do ping]

&lt;/Proxy&gt;

ProxyPass / balancer://webrun/ stickysession=JSESSIONID nofailover=On

Observações:

1. O parâmetro [servidor 1] corresponde ao IP das máquinas do cluster;
2. O parâmetro [porta ajp] corresponde à porta do Webrun das máquinas do cluster;
3. O parâmetro [nome do jvmroute] corresponde à identificação aplicada no item 2 (configuração no arquivo server.xml);
4. O parâmetro [valor do ping] corresponde a um valor em milissegundos.

Exemplo:

&lt;Proxy balancer://webrun&gt;

BalancerMember ajp://192.168.1.101:8080 route=noh01 ping=1

BalancerMember ajp://192.168.1.102:8080 route=noh02 ping=1

BalancerMember ajp://192.168.1.103:8080 route=noh03 ping=1

&lt;/Proxy&gt;

ProxyPass / balancer://webrun/ stickysession=JSESSIONID nofailover=On
