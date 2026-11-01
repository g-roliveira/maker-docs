---
title: "Parâmetros de Configuração - Relatorio"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/webrun_2/parametro_configuracao/parametros_configuracao_relatorio.htm"
---

Aqui se definem parâmetros para configurar o funcionamento e geração de relatórios dos sistemas em modo de execução na Web.

![image287.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image287.jpg)

Na tela Parâmetros de Configuração, ao clicar no componente ![image601.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image601.gif), mostra os componentes:

- ![image598.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image598.gif) - permite criar um novo parâmetro para o grupo;
- ![image597.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image597.gif) - permite excluir o parâmetro e seus valores. O controle de check ao lado de cada parâmetro será utilizado para esse fim;
- ![image599.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image599.gif) - Permite excluir um valor do parâmetro. podem existir muitos valores para cada parâmetro;
- ![image600.gif](https://suporte.softwell.com.br/Manual/Maker2_6/image600.gif) - Permite adicionar um novo valor ao parâmetro. podem existir muitos valores para cada parâmetro.

Abaixo, verifique os principais parâmetros para o grupo Relatorio:

- DiretorioDestino - local onde todos os relatórios serão gerados. Observe que $dir$ = C:\Arquivos de programas\Softwell\WebRun2\tomcat\webapps\webrun\ (caminho absoluto da pasta que contém a aplicação no servidor);
- URLDownloads - identifica uma pasta para gravar os relatórios provindos de outros servidores. O caminho pode ser relativo ou absoluto;
- GeradorLocalPadrao - define que o valor 0 (zero) corresponde à geração do relatório na Web e o valor 1 define-se Local. Definir o padrão da origem da geração do relatório;
- Executavel - identifica o local do executável do gerador de relatório;
- DiretorioRelatorios - informa a pasta contendo relatórios baseados em arquivos. Exemplo: arquivos gerados pela exportação para ;

  Jasper

  JasperReports é uma biblioteca Java que permite definir um relatório e depois executá-lo contra uma fonte de dados.
- Servidor - identifica um servidor para geração de relatórios;
- ServidorRetorno - complementa o parâmetro Servidor, habilitando-o ou não (usar 1 para habilitar ou 0 para desabilitar);

Observação: O parâmetro GeradorLocalPadrao foi depreciado na versão 2.5 do Webrun. Para a utilização desse recurso, os usuário devem entrar em contato com o Setor de Suporte da Softwell Solutions.
