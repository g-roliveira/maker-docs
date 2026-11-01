---
title: "Utilizando a tabela FR_SESSAO em sistemas com MySQL e Oracle"
source_url: "https://manual.softwell.com.br/docs/dicas-e-truques/banco_de_dados/utilizando_tabela_fr_sessao_com_mysql_e_oracle"
---

## MSQL:

As instruções informadas abaixo é necessária devido a restrição do banco de dados.

Para que as instruções abaixo entre em vigor é necessário alterar a permissão do usuário do banco de dados para que ele possa criar Triggers.

1. Criar no sistema a view "fr_sessao_vi", no menu (Utilitários), na opção Executor de Script SQL o seguinte script deve ser executado:

   ![image776.jpg](https://manual.softwell.com.br/assets/images/bancoview-c897ea65b32b76d17f6d45d725269307.png)

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

   ![image776.jpg](https://manual.softwell.com.br/assets/images/bancoview1-52e4e3f6765edd69f3dd8d0d8820e95b.png)

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

   ![image776.jpg](https://manual.softwell.com.br/assets/images/bancoview2-6c4d17f1fa6eaa4d739fdfe4d361f7ed.png)

   Script Executado:

   ALTER TABLE fr_sessao MODIFY COLUMN ses_conexao INT(11) NOT NULL DEFAULT 0;

## Oracle:

1. No ORACLE só é necessário a criação da TRIGGER no SCHEMA utilizado:

   ![bancovieworacle.png](https://manual.softwell.com.br/assets/images/bancovieworacle-2d6df28f3f7fbaffb691ddc8d54cc42e.png)

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
