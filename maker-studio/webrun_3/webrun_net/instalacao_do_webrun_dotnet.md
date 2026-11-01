---
title: "Instalação do Webrun .Net"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/webrun_3/webrun_net/instalacao_do_webrun_dotnet.htm"
---

Pré - requisitos para a instalação:

- Ter instalado na máquina o servidor IIS 6.0/7.5/8.5:
- Ter instalado os pacotes framework. net(Incluso no instalador).

![image1877.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1877.jpg)

Após a instalação será criado o diretório virtual no servidor IIS o qual o nome será o contexto utilizado para acessá-lo, por padrão, o contexto criado é webrun.

Para acessar através do browser, basta digitar o endereço http://&lt;ipdoservidor&gt;:&lt;porta&gt;/&lt;contexto&gt;, caso seja instalado na porta 80 (padrão do IIS) não será necessário informá-la no endereço.

Ex: http://localhost/webrun.

O diretório padrão de instalação é C:\Arquivos de programas\Softwell Solutions\Webrun.Net e  contém todos os arquivos da aplicação, exceto as pastas CONFIG, TEMP, REPORTS e SYSTEMS, que serão criadas em C:\Documents and Settings\All Users\Documentos\Softwell Solutions\Webrun, para que possam ser visualizadas por todos os usuários do computador.

O instalador cria a variável de ambiente "WEBRUN_HOME", esta variável aponta para o diretório onde as pastas REPORTS, CONFIG e SYSTEMS se encontram. O valor desta variável pode ser personalizado pelo desenvolvedor para apontar para o diretório desejado.

![image1896.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1896.jpg)

## Publicando um sistema:

- Instale o Webrun .Net no computador;
- Restaure o backup do banco de dados do sistema com todas tabelas FRs, pois o Webrun .net trabalhará de forma interpretada;
- Copie o apontador (WFRE) que se encontra no diretório C:\Documents and Settings\All Users\Documentos\Softwell Solutions\Webrun e adicione na pasta SYSTEMS;
- Acesse o sistema pelo navegador utilizando a URL http://localhost/Webrun.

Observações:

1. Caso a porta do servidor IIS não seja 80, acesse a URL http://localhost:8080/Webrun.
2. Como o Webrun .Net trabalhará de forma interpretada, ficará habilitado o ícone Modo Projeto para usuário que for administrador geral.

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
