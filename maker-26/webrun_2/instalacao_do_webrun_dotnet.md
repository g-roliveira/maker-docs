---
title: "Instalação do Webrun .Net"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/instalacao_do_webrun_dotnet.htm"
---

Pré-requisitos para a instalação:

- Ter instalado na máquina o servidor IIS:
- - Versões homólogadas (5.1 Windows XP, 6.0 Windows 2003 e 7.0 Windows Vista).
- Ter FrameWork .Net (incluso no instalador).

Para instalar o Webrun .Net, execute um duplo clique no instalador disponibilizado pela Softwell e siga as instruções do assistente de instalação.

Por padrão, o Webrun .Net é instalado em C:\Arquivos de programas\Softwell Solutions\Webrun.Net, contendo todos os arquivos da aplicação, exceto as pastas CONFIG, TEMP, REPORTS, SYSTEMS, que serão criadas em C:\Documents and Settings\All Users\Documentos\Softwell Solutions\Webrun, para que possam ser visualizadas por todos os usuários do computador.

Para testar o Webrun .net, basta acessar no navegador a URL http://localhost:8080/Webrun:

- Normalmente, a porta padrão para Webrun .Net no servidor IIS é 80, podendo ser alterada posteriormente.

## Publicando um sistema:

- Instale o Webrun .Net no computador;
- Restaure o backup do banco de dados do sistema com todas tabelas FRs, pois o Webrun .net trabalhará de forma interpretada;
- Copie o apontador (WFRE) que se encontra no diretório C:\Documents and Settings\All Users\Documentos\Softwell Solutions\Webrun e adicione na pasta SYSTEMS;
- Acesse o sistema pelo navegador utilizando a URL http://localhost/Webrun.

Observações:

1. Caso a porta do servidor IIS não seja 80, acesse a URL http://localhost:8080/Webrun.
2. Como o Webrun .Net trabalhará de forma interpretada, ficará habilitado o ícone Modo Projeto para usuário que for administrador geral.
