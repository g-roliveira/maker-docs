---
title: "Utilizando a tabela FR_SESSAO em sistemas com MySQL e Oracle"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/dicas_e_truques/banco_de_dados/utilizando_tabela_fr_sessao_com_mysql_e_oracle.html"
---

[Manual Maker 3](../../bem_vindo) &gt;&gt; Dicas e Truques &gt;&gt; Banco de Dados &gt;&gt; Utilizando a tabela FR_SESSAO em sistemas com Mysql e Oracle

,

## MSQL:

As instruções informadas abaixo é necessária devido a restrição do banco de dados.

Para que as instruções abaixo entre em vigor é necessário alterar a permissão do usuário do banco de dados para que ele possa criar Triggers.

1. Criar no sistema a view "fr_sessao_vi", no menu (Utilitários), na opção Executor de Script SQL o seguinte script deve ser executado:

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bancoview.png)

   Script Executado:

   CREATE OR REPLACE VIEW name_database.fr_sessao_vi AS SELECT
     s.ses_conexao,
     s.ses_datahora_login,
     s.ses_usuario,
     s.ses_nome_usuario,
     s.ses_nome_maquina,
     s.ses_end_ip,
     s.sis_codigo
   FROM fr_sessao s
   WHERE
     s.ses_conexao = connection_id();

2. Criar no sistema a "trigger" que será disparada antes da inserção realizada pelo Webrun:

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bancoview1.png)

   Script Executado:

   O seguinte script deve ser executado

   DELIMITER $$
     CREATE TRIGGER trigger_name BEFORE INSERT
     ON fr_sessao FOR EACH ROW
     BEGIN
       set new.ses_conexao = connection_id();
       set new.ses_datahora_login = now();
     END; $$
   DELIMITER;

3. Alterar a tabela "fr_sessao" para que mesma tenha um valor "Default":

   ![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bancoview2.png)

   Script Executado:

   ALTER TABLE fr_sessao MODIFY COLUMN ses_conexao INT(11) NOT NULL DEFAULT 0;

## Oracle:

1. No ORACLE só é necessário a criação da TRIGGER no SCHEMA utilizado:

   ![bancovieworacle.png](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/bancovieworacle.png)

   Script Executado:

     CREATE OR REPLACE TRIGGER "SCHEMA_NAME"."FR_SESSAO"
     BEFORE INSERT ON "SCHEMA_NAME"."FR_SESSAO"
     REFERENCING NEW AS NEW OLD AS OLD FOR EACH ROW
     BEGIN
       DELETE FROM "SCHEMA_NAME"."FR_SESSAO"
       WHERE SES_CONEXAO = SYS_CONTEXT('userenv','sessionid');
       :NEW.ses_conexao := SYS_CONTEXT('userenv','sessionid');
       :NEW.ses_datahora_login := sysdate;
     END;
