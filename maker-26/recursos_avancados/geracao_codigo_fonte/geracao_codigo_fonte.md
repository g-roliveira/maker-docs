---
title: "Geração de Código Fonte"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/recursos_avancados/geracao_codigo_fonte/geracao_codigo_fonte.htm"
---

# Geração de Código-Fonte

É possível exportar um sistema para ser utilizado independentemente da instalação do Webrun e ser executado a partir de um servidor de aplicações. Para tal, utilizaremos o WAR (Web application ARchive), que é um pacote cujo conteúdo são os arquivos do contexto da aplicação web. Utilizando este formato de arquivo a aplicação se torna “portável”, pois não depende da estrutura do Webrun para ser executado.

Outra forma é a exportação do JAR (Java ARchive), que é um arquivo compactado usado para distribuir um conjunto de classes Java. É usado para armazenar classes compiladas e metadados que constituem uma aplicação. Utilizando este formato de arquivo, sua execução só será possível se no ambiente tiver o Webrun instalado, pois o arquivo *.JAR deverá possuir o mesmo nome do *.WFRE e ficar na mesma pasta (systems).

Para a utilização deste recurso, siga os passos:

1. [Acesse o Webrun](../../webrun_2/acessando_webrun) e selecione o projeto desejado.
2. Clique no botão ![image499.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image499.gif).
3. Na tela Acesso a tela de Configurações, informe o usuário admin no campo Usuário, a senha webrun no campo Senha e clique no botão ![image501.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image501.gif):

![image1466.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1466.jpg)

4. Na Tela de Configuração, clique no botão ![image569.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image569.gif).
5. Na Tela de Configuração do Sistema - XXX, clique no botão ![image579.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image579.gif). Apresentará a tela abaixo:

![image1134.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1134.jpg)

6. Siga as instruções da tela e execute uma das opções disponíveis:

   1. Exportar Código (jar) - gera código-fonte do sistema selecionado, para ser utilizado na pasta systems, do diretório onde instalou o Webrun. Saiba mais acessando o tópico [Exportar Código (jar)](exportar_codigo_jar);
   2. Publicar (war) - gera um arquivo com extensão *.war, para ser utilizado na pasta de deploy do seu Servidor de Aplicação Web (como exemplo, Tomcat, JBoss e IBM WebShere), em máquinas sem o Webrun instalado. Saiba mais acessando o tópico [Publicar (war)](publicar_war).

Para distribuir uma aplicação desenvolvida e publicada é necessário verificar alguns pré-requisitos no ambiente onde esta aplicação será instalada:

- Java 1.5;
- Servidor de aplicações Java. Atualmente Tomcat6, JBoss 4.2.1GA, Websphere 6/7 são os servidores homologados;
- Navegadores: Internet Explorer 6, 7 e 8, Mozilla Firefox 2, 3 e 3.6;
- Wine 1.2.2(ver observação 2);
- As aplicações desenvolvidas funcionam nas seguintes plataformas: Windows, Linux ou Mac, contanto que sigam as especificações supracitadas.

Observações:

1. Existem restrições para usuários das versões Standard Edition e Professional. Para mais detalhes, acesse o tópico [Recursos e Características das Versões do Maker](../../recursos_e_caracteristicas_das_versoes_do_maker).
2. Para utilização em ambientes Linux apenas. Por ser um aplicativo Windows, o Gerador de Relatórios, ReportController, é compatível apenas em ambiente Windows. Para utilizá-lo em ambiente Linux, é necessário que seja utilizado o Wine para emular aplicações Windows. Caso não deseje utilizar o Wine, pode ser usado o Jasper. No Maker existe um conversor ReportBuilder -> Jasper integrado à ferramenta;
