---
title: "Informações adicionais da estrutura do Maker"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/estrutura_maker_e_webrun/informacoes_adicionais_da_estrutura_do_maker.htm"
---

O diretório C:\Arquivos de programas\Softwell Solutions\Maker 2.6 está estruturado pelas pastas descritas abaixo:

- Reports - mesmo contexto da pasta [Reports](pasta_reports_do_webrun) do Webrun;
- Samples - contém projetos prontos e de exemplos;
- Vídeos - contém arquivos de [Videoaulas](../videos/video_aula);
- Webrun 2 - guarda todo o [contexto do Webrun](estrutura_de_pastas_do_webrun);
- Extras - contém os arquivos de tradução para os [tradutores](../maker_2/tradutor/tradutor);
- Intl e Udf - possui uma instalação do Firebird embarcado;
- Reporting - contém [Geradores de relatórios](../maker_2/relatorio/relatorios);
- Resources - contém arquivos de tradução depois de editados pelos [tradutores](../maker_2/tradutor/tradutor).

![image840.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image840.gif)

O Assistente de Criação de Projetos é o responsável pela criação do arquivo *.wfre, por meio das informações contidas na etapa 1 de criação e das configurações de driver e de banco contidas na tela Configurações, será montada toda a instrução de conexão contida no arquivo de projeto.

![image1087.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1087.jpg)

Após informar: o Tipo de Banco de Dados, o Servidor, o Login do usuário e a Senha, clicando na opção Configurações avançadas (clicar nesta opção antes de ![Conectar](https://suporte.softwell.com.br/Manual/Maker2_6/image759.gif)), execute algumas configurações importantes.

Utilize o botão ![image761.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image761.gif) para adicionar parâmetros e o botão ![image762.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image762.gif) para remover. O botão ![testar](https://suporte.softwell.com.br/Manual/Maker2_6/image765.gif) permite testar a conexão com o banco (caso exista). O botão ![SQL](https://suporte.softwell.com.br/Manual/Maker2_6/image764.gif) permite executar comandos SQL no banco ativo.

Entre os Parâmetros apresentados, alguns serão importantes apenas para o Maker conectar-se com o banco, por exemplo: GetDrverFunc, LibaryName, VendorLib e outros parâmetros são importantes também para o Webrun, como HostName, DataBase, User_Name, Password e Port.

Para o Webrun, no diretório C:\Arquivos de programas\Softwell Solutions\Maker 2.6\Webrun 2\config, consta o arquivo [databases.xml](arquivo_databases_xml), contendo definições de cada driver. Já para o Maker, na pasta C:\Arquivos de programas\Softwell Solutions\Maker 2.6, constam os arquivos  dbxdrivers.ini, dbxconnections.ini, dbxconnections.win e [dbxdrivers.win](arquivo_dbxdrivers_win). O Webrun utiliza JDBC e o Maker utiliza DBEXPRESS. São duas tecnologias totalmente diferentes e cada uma possui parâmetros próprios. O que ocorre é a utilização de parâmetros comuns para que cada *.wfre possa ser interpretado pelo Maker e pelo Webrun.
