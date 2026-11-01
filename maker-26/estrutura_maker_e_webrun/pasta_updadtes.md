---
title: "Pasta UPDATES"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/estrutura_maker_e_webrun/pasta_updadtes.htm"
---

Localizada em C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\updates, é o diretório onde encontramos a atualização automática do Webrun. Ele está composto pelos arquivos update.exe, update.log, update.urs, updatelang.ini e pelo arquivo de atualização webrun.war.

Observe o que ocorre:

1. Acione a tela Configurações do Webrun (arquivo webrunadmin.exe, localizado na pasta C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2) e clique no botão   (é executado o update.exe);
2. Devidamente configurado o proxy (caso necessário), o aplicativo verifica as atualizações no servidor da Softwell e inicia o download das atualizações necessárias incluindo o arquivo webrun.war;
3. Após o download, encerra o aplicativo Update Webrun;
4. O serviço do Servidor de Aplicações Web é parado;
5. São excluídos:

1. O arquivo webrun.war da pasta C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps;
2. As pastas C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps\webrun e C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\work;
3. O novo arquivo webrun.war é posto na pasta  C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps;
4. São recriadas as estruturas de pastas C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\webapps\webrun e C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\tomcat\work.

6. É reiniciado o serviço do Servidor de Aplicações Web;
7. Ao acessar o Webrun, é verificada se a pasta Maker.Commons existe em C:\Arquivos de programas\Softwell Solutions\Maker 2\Webrun 2\systems para retornar as configurações personalizadas do usuário.

Observação: A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.5" é referente a instalações feitas a partir do Dvd Instalador do Maker 2.5. A estrutura "C:\Arquivos de programas\Softwell Solutions\Maker 2.6" refere-se a instalações feitas a partir do Dvd Instalador do Maker 2.6.
