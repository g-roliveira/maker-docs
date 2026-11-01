---
title: "Publicar (war)"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/recursos_avancados/geracao_codigo_fonte/publicar_war.htm"
---

Exporte um sistema para ser utilizado independentemente da instalação do Webrun.

1. Execute os passos descritos no item

   1. [Acesse o Webrun e selecione o projeto desejado;](../../webrun_2/acessando_webrun)
   2. Clique no botão ![image499.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image499.gif);
   3. Na tela Acesso a tela de Configurações, informe o usuário admin no campo Usuário, a senha webrun no campo Senha e clique no botão ![image501.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image501.gif):

   ![image1132.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1132.jpg)

   Figura 1 - Tela Acesso à Tela de Configurações

   1. Na Tela de Configuração, clique no botão ![image569.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image569.gif);
   2. Na Tela de Configuração do Sistema - XXX, clique no botão ![image579.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image579.gif). Apresentará a tela abaixo:

   ![image1133.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1133.jpg)

   Figura 2 - Tela de geração código fonte

   Na tela consta as seguintes opções:

   - Exportar relatórios? - Ao ser marcada esta opção, será criada uma pasta reports no .war ou .jar, onde todos os relatórios do sistema serão incluídos e não será mais necessário manter a tabela FR_relatorio.
   - Exportar todas as regras? - Ao ser marcada, esta opção exportará todas as regras independente de estarem vinculadas a formulários ou não.
2. Na tela Geração de Código-Fonte, clique no botão ![image302.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image302.jpg) e a Tela de Dependências será apresentada:

![image1136.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1136.jpg)

Ao selecionar as opções da Tela de Dependências, são adicionados ou removidos alguns arquivos.

Verifique, abaixo, quais os arquivos referentes a cada opção desta tela:

- Biometria
- - apps/DigitalCapture.jar
  - apps/DigitalCaptureNativeWin.jar
  - apps/SDigitalCapture.jar

- Conector DB2
- - WEB-INF/lib/db2jcc.jar
  - WEB-INF/lib/db2jcc_license_cu.jar

- Conector DBF
- - WEB-INF/lib/DBF_JDBC30.jar

- Conector Firebird
- - WEB-INF/lib/jaybird-full-2.1.6.jar

- Conector MySQL
- - WEB-INF/lib/mysql-connector-java-5.1.5-bin.jar

- Conector Postgres
- - WEB-INF/lib/postgresql-8.3dev-601.jdbc3.jar

- Conector SQL Server
- - jtds-1.2.1.jar

- Gerador de código fonte
- - Autodeploy

- Gerador de relátorio Local
- - apps/LocalReport.jar
  - apps/LocalReportLibs.jar
  - apps/SLocalReport.jar

- Gerador de relátorio Local 7.0 IE
- - apps/WebrunReports.cab

- Gerador de relátorio Local 10.0 IE
- - apps/MakerReports.cab

- Impressora Bematech
- - apps/BematechPrinter.jar
  - apps/BematechWin32.jar
  - apps/SBematechPrinter.jar

- Impressora Local
- - apps/STextPrinter.jar
  - apps/TextPrinter.jar

- Jasper
- - WEB-INF/lib/jasperreports-3.1.2.jar
  - WEB-INF/lib/jfreechart-1.0.10.jar

- Linux
- - WEB-INF/lib/xalan.jar

3. Ao clicar sobre o OK da Tela de Dependências, aparecerá uma tela de confirmação e em seguida outra tela informando se deseja gerar um ambiente já configurado ou não.
4. Quando a tela de download for apresentada, selecione a opção Salvar e direcione para a pasta deploy do seu Servidor de Aplicação Web (caso utilize Tomcat, direcione para ...\tomcat\webapps; caso utilize JBoss, direcione para ...\jboss\server\default\deploy);

Ao clicar [aqui, pode-se observar a lista de objetos (tabelas, visões, gatilhos e funções) que são obrigatórios de serem mantidos no banco de dados para o perfeito funcionamento do sistema (em tempo de produção).](../../dicas_e_truques/diversos/exemplo_script_da_publicacao_war_jar)

6. Feito isso, acesse seu sistema por meio do navegador. Uma tela inicial idêntica à do webrun será exibida;
7. Acesse ![image499.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image499.gif);
8. Selecione o sistema desejado e clique em ![image569.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image569.gif);
9. Na janela que se abrirá, coloque as informações de acesso ao sistema (servidor, nome do banco, usuário, senha) referentes à base de dados criada na etapa 6;
10. Salve as alterações clicando em ![image577.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image577.gif).

Pronto, o seu sistema feito no Maker já pode ser acessado localmente.

Observações:

1. Para acessar sistemas publicados na versão 2.6 do Webrun, é necessário ter o tomcat 6 ou superior instalado.
2. Existem restrições para usuários das versões Standard e Professional. Para mais detalhes, acesse o tópico [Recursos e Características das Versões do Maker;](../../recursos_e_caracteristicas_das_versoes_do_maker)
3. Um sistema publicado (.war) não pode conter instância;
4. Após a Publicação (**.war**) e acessando sistema pelo Webrun, o sistema cria instâncias com os perfis de cada usuário no sistema. Esse arquivo fica em **C:\Documents and Settings\All Users\Softwell\Webrun\..MD5_da_Instância\...\Config;**
5. Se forem mantidas as tabelas do Maker, após o sistema ser publicado, qualquer outro cliente que tenha o Maker poderá reeditar o projeto.
6. Não é possível publicar um sistema a partir de um sistema já publicado. É necessário publicar sempre a partir do projeto do sistema no Webrun.

Publicar o Projeto - Gerador .WAR - Esse exemplo demonstra como publicar o projeto gerando um arquivo .WAR.
