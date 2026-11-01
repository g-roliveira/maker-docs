---
title: "Configuração - OCR"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/novidades/configuracao_OCR.html"
---

Guia para instalação a utilização do OCR.

Para utilização da funcionalidade de OCR é necessário realizar o download do pacote OCR, caso ainda não tenha realizado o download [clique aqui.](http://download.softwell.com.br/suporte/OCR.zip)

O pacote baixado possui a estrutura de pasta do Webrun Studio, recomendamos a utilização da pasta **Maker.Commons** para o carregamento dos arquivos para o contexto da aplicação. Na pasta Maker.Commons inserir as pastas tessdata e WEB-INF.

A pasta WEB-INF/lib contém as seguintes bibliotecas:

- ghost4j-1.0.1.jar
- lept4j-1.2.4.jar
- tess4j-3.2.2.jar
- jul-to-slf4j-1.7.22.jar
- jai-imageio-core-1.3.1.jar

A pasta tessdata possui os arquivos necessários para que a função extraia os caracteres de acordo com o idioma informado. É apenas necessário carregar o arquivo que será utilizado para a extração.

- eng.traineddata: informações para utilização do idioma em Inglês.
- fra.traineddata: informações para utilização do idioma em Francês.
- por.traineddata: informações para utilização do idioma em Português Brasileiro.
- spa.traineddata: informações para utilização do idioma em Espanhol.

## Configurações Ambiente Windows:

1. Para utilizar a aplicação no Windows é necesário o [Visual C++ Redistributable Packages for VS2013](https://www.microsoft.com/en-us/download/details.aspx?id=40784) instalado.
2. Inserir os arquivos contido dentro pasta WEB-INF/classes conforme as configurações do sistema operacional.

## Configurações Ambiente Linux

Para utilizar a aplicação no Linux, são necessários seguir os seguintes passos:

1. Instalar o tesseract 3.04.01 e leptonica-1.73.
   - Para instalar no Ubuntu 16.04 e Debian 9 use o comando:
     - 'sudo apt-get install tesseract-ocr'.
   - Para instalar no CentOS baixe o e no mesmo local escreva no terminal os comandos:
     - 'sudo rpm -ivh epel-release-7-11.noarch.rpm'
     - 'sudo yum -y --enablerepo epel-testing install tesseract tesseract-osd'.
2. Instalar o Ghostscript.
   - Para instalar no Ubuntu 16.04 e Debian 9 use o comando:
     - 'sudo apt-get install ghostscript'.
   - Para instalar no CentOS use o comando:
     - 'sudo yum install ghostscript'.
