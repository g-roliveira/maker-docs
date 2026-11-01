---
title: "Executor de Scripts SQL"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/maker_3/executor_scripts_sql/executor_scripts_sql.htm"
---

No Executor de Scripts SQL, é possível executar qualquer comando (inserção, atualização, recuperação e remoção de registro) no banco de dados que foi apontado nas Configurações do Sistema. Ademais, pode ser selecionada uma outra conexão que tenha sido configurada. Este recurso está acessível por meio do menu Utilitários, selecionando o Executor de Scripts SQL.

A tela apresenta as opções:

1. Selecione a Conexão no campo ![image465.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image698.png) (sempre demonstra (Conexão principal) como padrão). Caso existam Conexões Adicionais no projeto, este campo disponibilizará a utilização.
2. Ao clicar no botão Exibir lista de objetos do banco de dados ![image466.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image466.gif), o formulário é redesenhado e são habilitadas as abas Tabelas, Visões e Procedimentos com os respectivos elementos de cada objeto. Clicando com o botão direito do mouse sobre qualquer dos elementos das abas, aparece um menu pop-up que possibilita a execução de um procedimento, SELECT, Insert, Update, Delete, Extrair DDL ou EXECUTE. Os resultados de todas as ações citadas podem ser vistos em tempo real na área ao lado direito da tela.
3. O usuário pode editar a consulta ao seu modo (utilizando o painel de edição ao lado).
4. Podem-se ![image467.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image699.png) arquivos contendo comandos SQL e pode-se ![image468.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image700.png) a consulta em um arquivo com extensão *.sql sugerido pelo Maker.
5. Utilize o botão ![image469.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image701.png) para rodar a instrução SQL construída e visualize o resultado na aba Dados (parte inferior da tela).
6. Pode-se utilizar o ![image470.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image702.png) para auxiliar na construção da consulta.
7. Na parte inferior da tela, além da aba Dados demonstrando o resultado da consulta, temos as abas Log e Histórico. Estas abas irão historiar os resultados dos comandos SQL executados. Na aba Histórico, ao efetuar o duplo clique em um dos comandos SQL executados, o comando reaparece no painel de edição para ser executado e a data do registro é consultada somente no computador que executou a consulta.
8. Clique direito do mouse, no trecho selecionado do script, permite:

   1. Copiar - copia o trecho selecionado;
   2. Recortar - retira o trecho selecionado;
   3. Colar - cola o trecho que foi copiado ou recortado anteriormente;
   4. Selecionar - seleciona todo conteúdo do painel de edição;
   5. Desfazer - desfaz a última alteração realizada;
   6. Deletar - apaga o conteúdo selecionado;
   7. Localizar - localiza informação dentro do painel de edição. É necessário informar o conteúdo que deve ser localizado dentro do painel de edição;
   8. Substituir - substitui informação dentro do painel de edição. É necessário informar o conteúdo que deve ser substituído dentro do painel de edição.

Suporte e Melhorias do Assistente SQL

- Nova versão do Assistente de Relatório com suporte melhorado a instruções CASE complexas;
- Suporte a DISTINCT, e LIMIT no POSTGRESQL;
- Suporte a Extrair DDL das VIEWs no Firebird;
- Observe o caso abaixo:

SELECT CAMPO1, CAMPO2 FROM TABELA START WITH CAMPO1 IS NULL CONECT BY PRIOR CAMPO2 = CAMPO1

Por ser um comando específico do Banco de Dados Oracle, não há suporte no Maker. Para solucionar, é preciso:

- criar uma VIEW (visão) ;
- criar um Trigger (gatilho) vinculado à view criada. Exemplo:

Create VIEW nomeVIEW as

SELECT

ACO_CODIGO,

ACO_NOME

FROM FR_ACAO

START WITH ACO_CODIGO IS NULL CONNECT BY PRIOR ACO_CODIGO = ACO_CODIGO

Segue abaixo a descrição das extrações de DDL suportadas pelo Maker:

- View:
- - SQL Server
  - Oracle
  - FireBird
- Procedure:
- - SQL Server

Observação: O Maker ainda não oferece suporte para gerar DDL de entidades originárias de conexões adicionais e bancos do MySQL.
