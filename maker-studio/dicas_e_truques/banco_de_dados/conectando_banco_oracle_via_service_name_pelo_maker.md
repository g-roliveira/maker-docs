---
title: "Conectando banco ORACLE via SERVICE_NAME pelo Maker"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/banco_de_dados/conectando_banco_oracle_via_service_name_pelo_maker.htm"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Banco de Dados &gt;&gt; Conectando banco ORACLE via SERVICE_NAME pelo Maker

Para conectar o banco de dados oracle via service_name pelo ***Maker***, é necessário fazer algumas configurações:

1. Na pasta onde Maker está instalado (C:\...\Softwell Solutions\Maker) localize o arquivo drivers.ini;

Nota: Por segurança, realize um backup deste arquivo antes de ser feita qualquer alteração.

2. Abra este arquivo com bloco de notas (preferencialmente com bloco de notas para programadores, tipo Notepad++, Cnote e etc.);
3. Procure o subgrupo [Oracle by Core Lab]. Selecione todo o conteúdo do subgrupo e copie-o (ctrl+c).

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1686.jpg)

4. Procure agora o subgrupo [Oracle] e cole (ctrl+v) dentro deste subgrupo, substituindo o conteúdo pelo que foi copiado anteriormente;

Antes:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1688.jpg)

Depois:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1689.jpg)

Após substituir o conteúdo do item anterior, copie (ctrl+c) as três primeiras linhas deste mesmo subgrupo, [Oracle], e substitua (ctrl+v) as três primeiras linhas do subgrupo anterior a este, [Oracle-FIX],

Antes:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1690.jpg)

Depois:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1691.jpg)

Observação: É necessário replicar as configurações no arquivo ***"driver.ini"*** para o Gerador de Relatórios (ReportController) e/ou Servidor de Relatórios (ReportServer).

5. Depois de realizados estes passos, salve o arquivo e inicie o Maker e conecte com o banco de dados através do service_name, do mesmo jeito que está salvo no arquivo tnsnames.ora, exemplo:

Arquivo tnsnames.ora:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/tnsnames.jpg)

Novo Projeto Maker:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql12.png)

Importante: As configurações do banco de dados, bem como as configurações dos arquivos tnsnames.ora, listener.ora e sqlnet.ora, são de responsabilidades do cliente, onde este tutorial só irá funcionar se o banco estiver configurado corretamente.

### Configurações do Webrun

1. No diretório onde o Webrun está instalado localize o arquivo databases.xml que encontra-se dentro da pasta config(C:\...\Softwell Solutions\Maker\Webrun 3\config);

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/sql13.png)

   Abra este arquivo com um editor de texto e procure pelo grupo Oracle e altere a ***URL*** de conexão com banco de dados:

   **Antes**:

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/oracle.jpg)

   **Depois**:

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/oracle_depois.jpg)

   Salve o arquivo e feche-o em seguida e reinicie o serviço do Webrun.

Observações: Em sistemas publicados certifique-se de está alterando os arquivos no local ao qual o Webrun (sistema publicado) está lendo. Para ter certeza do caminho exato, execute o autotest. Para mais informações sobre o autotest clique [**Aqui**](../../estrutura_maker_e_webrun/estrutura_de_pastas_do_webrun)

### Erro de Incompatibilidade de Drivers JDBC

**Caso não obtenha êxito ao acessar o sistema pode ser um problema de incompatibilidade dos drivers JDBC do Oracle com o do Webrun, realize os seguintes passos:**

1. Por padrão o driver JDBC Oracle utilizado pelo Webrun é o "ojdbc5.jar", como nem todos os bancos de dados Oracle utilizam esse driver, problemas de incompatibilidade de drivers JDBC entre o Servidor Oracle e o Webrun, podem ocorrer ao iniciar a aplicação. Veja na imagem abaixo um erro desse tipo:

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/erro.png)

2. Quando acontece esse tipo de erro, é necessário sincronizar o driver JDBC do servidor Oracle com o do Webrun, para isso, execute os seguintes passos:

   1. Procure na pasta onde o servidor Oracle foi instalado o seguinte driver JDBC, "ojdbcXX.jar", onde o XX pode variar para cada versão do Oracle instalada, no exemplo o JDBC utilizado é o "ojdbc14.jar" encontrado na pasta "C:\oraclexe\app\oracle\product\10.2.0\server\jdbc\lib".
   2. Procure a pasta "WEB-INF\lib" dentro do contexto publicado, no caso do exemplo o caminho completo ficou "C:\Program Files\Softwell Solutions\Maker 3\Webrun 3\tomcat\webapps\webrun\WEB-INF\lib", note que dentro dessa pasta existe um arquivo chamado "ojdbc5.jar", por precaução faça um backup desse arquivo em uma pasta externa e depois delete-o da pasta lib.
   3. Após ter deletado o driver da pasta lib, o próximo passo é colar dentro da pasta "WEB-INF\lib" do contexto, o arquivo encontrado no passo **a** "ojdbc14.jar".
   4. Após ter realizado os passos acima, reinicie o servidor de aplicações para que as alterações entrem em vigor.
