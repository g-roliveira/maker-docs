---
title: "Applet - Abrir Applet numa Moldura"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/maker_2/fluxos_e_acoes/Relacao_de_funcoes/funcoes/funcoes_categoria_applet/applet_abrir_applet_numa_moldura.htm"
source_version: "2.7"
legacy: true
---

Descrição:

Função que abre um Applet numa moldura.

Parâmetros:

1. URL do pacote que contém o Applet (Ex.: arquivo .jar);

2. Nome do Applet;

3. Formulário que contém o componente do tipo Moldura;

4. Componente do tipo Moldura;

![image1055.gif](../../_assets/image1055.gif)

Exemplo:

Para Abrir um Applet a partir de um jar adicionado no maker, (Maiores informações no tópico do HELP : Como adicionar componentes/bibliotecas de terceiros no maker) utiliza-se a seguinte chamada da função:ebfAppletNew("MeusApps/makertest.jar", "src.WireframeViewer.class", 'formulario', "MakerBevel1");

Observação:

É importante notar que o caminho para o .class do applet deve ser colocado por completo, com toda a hierarquia de pacotes. De forma similar pode-se abrir applets em servidores remotos: ebfAppletNew("http://www.softwell.com.br/maker/makertest.jar", "src.WireframeViewer.class", 'formulario', "MakerBevel1");

Retorno:

Não possui

Nome Real:

ebfAppletNew

Compatibilidade:

Cliente e Servidor

## Utilização de Funções Applet no Maker

Objetivo

Demonstrar a utilização de funções de Applet no Maker.

Características da Função

- Categoria: Applet;
- Nome da função: Applet - Abrir Applet numa Moldura;
- Descrição da Função:
- - Compatível com a camada Cliente e Servidor;
  - Função que abre um Applet numa moldura;
  - 1º Parâmetro: URL do pacote que contém o Applet;
  - 2º Parâmetro: Nome do Applet;
  - 3º Parâmetro: Formulário que contém o componente do tipo Moldura;
  - 4º Parâmetro: Identificação do componente do tipo Moldura:

![image647.jpg](../../_assets/image647.jpg)

Exemplo prático

1. Preparação do Ambiente:

![image1253.jpg](../../_assets/image1253.jpg)

![image1252.jpg](../../_assets/image1252.jpg)

Crie um formulário para a execução do fluxo. No exemplo, implementaremos um botão para executar o fluxo.

2. Neste exemplo, apresentamos um arquivo *.jar, do qual será utilizado um .class. Foi criado um diretório específico para armazenar esses arquivos: C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps\webrun\tetris. É importante salientar que a pasta ...\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps\webrun será reestruturada sempre que for atualizado o Webrun. Quando o usuário possuir configurações personalizadas ou utilizar recursos externos (bibliotecas de terceiros, applets), deve-se utilizar a estrutura C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\systems\Maker.Commons, replicando a mesma estrutura de pastas contidas, a partir da pasta C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps\webrun;

3. O fluxo:

![image1254.jpg](../../_assets/image1254.jpg)

Desenvolva um fluxo composto por um objeto Processamento, com a expressão composta pela função Applet - Abrir Applet numa Moldura.

Estruturando a função:

1º Parâmetro - local do arquivo .jar: neste exemplo tetris/Tetris.jar;

2º Parâmetro - nome do Applet: arquivo de classe Java, (neste exemplo) tetris.Main;

3º Parâmetro - identificação do formulário que contém o componente Applet

4º Parâmetro - nome do componente Moldura.

Salve o fluxo e atribua ao evento Ao Clicar do botão que adicionou no formulário.
