---
title: "Instalando o Webrun em um ambiente que ja exista o Tomcat"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/webrun/instalando_o_webrun_em_um_ambiente_que_ja_exista_o_tomcat.htm"
---

Para instalar o webrun em um ambiente em que o Tomcat já esteja instalado. São necessários os seguintes passos:

1. Colar o arquivo webrun.war na pasta "webapps" do Tomcat;
2. Em seguida, deve-se copiar as pastas:

   1. config
   2. java
   3. reports
   4. systems
   5. updates

   Na instalação normal do Webrun estas pastas estão em C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2, para um diretório qualquer por exemplo: c:\Webrun\
3. Criar ou editar o arquivo "webrun.ini" que deve ficar na pasta C:\WINDOWS\system32\ deixando-o com o seguinte conteúdo:

   1. [DIR]
           InstallDir=c:\Webrun\
