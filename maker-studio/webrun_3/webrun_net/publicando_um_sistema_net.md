---
title: "Publicando um sistema"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/webrun_net/publicando_um_sistema_net.htm"
---

A publicação para a plataforma.net é bastante simples, sendo muito parecido com o processo padrão. Segue-se abaixo, o processo de publicação:

![image1879.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1879.jpg)

1. Na tela de configurações, informe o login: admin e senha: webrun e clique em Acessar.

![image1880.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1880.jpg)

![image1881.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1881.jpg)

![image1882.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1882.jpg)

2. Ao clicar sobre o botão Exportar, será apresentado uma tela com duas formas de exportação.

![pDotNET.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/pDotNET.png)

- Exportar Código.Net(zip) – gera código-fonte do sistema selecionado, para ser utilizado na pasta systems, do diretório onde instalou o Webrun.
- Publicar Aplicação.Net(zip)- gera um arquivo com extensão *.zip, para ser utilizado em uma pasta que sirva de repositório do servidor de aplicações, em máquinas sem o Webrun instalado.

3. Selecione a opção Publicar Aplicação.Net(zip), ao selecioná-la será apresentada uma tela para que sejam selecionadas as dependências necessárias para o sistema.

![image1884.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1884.jpg)

Ao selecionar as dependências, clique sobre o botão Ok e aguarde o processo de exportação.

Nota: Antes de exportar o sistema, o assistente perguntará se deseja gerar um ambiente já configurado, caso sim, selecione OK.

![pDotNET.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/pDotNET.png)

Ao finalizar, descompacte seu arquivo .zip para um diretório a gosto, por exemplo:  C:\Aplicacoes.

![image1886.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1886.jpg)

Ao descompactar, os arquivos na pasta solicitada, vá ao gerenciador do serviços de informações da internet (IIS) , clique com o botão direito sobre Default Web Site e selecione Adicionar Aplicativo.. .

![image1887.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1887.jpg)

![image1888.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1888.jpg)

Ao adicionar um novo aplicativo, será necessário informar  o Pool de aplicativos, o caminho físico e o nome da aplicação. Primeiramente , clique sobre o botão selecionar e no Pool de aplicativos, informe Webrun.

![image1889.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1889.jpg)

![image1890.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1890.jpg)

Clique sobre o botão ![image1941.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1941.gif) , para informar o caminho onde se encontra a aplicação.

![image1891.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1891.jpg)

Ao determinar as configurações necessárias, clique sobre o botão OK.

![image1892.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1892.jpg)

![image1893.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1893.jpg)

- Em Ações ![acao.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/acao.png) reinicie o gerenciador como mostra a imagem abaixo.

![reiniciargerenciador.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/reiniciargerenciador.png)

- Observação: Ao terminar as etapas acima reinicie o tomcat!

No navegador informe o endereço da aplicação, por exemplo: http://localhost/manual.

![image1895.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1895.jpg)

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
