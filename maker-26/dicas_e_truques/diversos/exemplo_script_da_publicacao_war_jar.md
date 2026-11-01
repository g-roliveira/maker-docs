---
title: "Exemplo Script da Publicação (.war / .jar)"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/dicas_e_truques/diversos/exemplo_script_da_publicacao_war_jar.htm"
---

Na base de dados que será utilizada com um sistema publicado (extensões war ou jar), devem ser mantidas:

Tabelas:

FR_GRUPO

FR_LOG

FR_LOG_EVENT

FR_PERMISSAO

FR_RELATORIO (se for utilizada a versão 2.5.0.28 ou superior do Webrun para a geração do arquivo war ou do pacote jar, esta tabela pode ser desconsiderada. Os relatórios são levados junto ao .WAR em arquivos .rtm. Estes arquivos estão em "contexto\reports\system_sigla\*.rtm")

Caso deseje efetuar alguma alteração nos relatórios em um sistema já publicado, basta substituir o arquivo .rtm pelo novo.

FR_SESSAO

FR_SISTEMA

FR_USUARIO

FR_USUARIO_GRUPO

FR_USUARIO_SISTEMA

FR_TAREFA*

FR_TAREFA_TEMPO*

FR_REGRAS**

*Se houver algum agendamento cadastrado (tela Agendador de Tarefas do Maker).

**Também a tabela FR_REGRAS, contendo os registros dos fluxos de ações utilizados nos agendamentos (basta manter o contéudo dos campos REG_COD e REG_NOME, o conteúdo dos demais campos pode ser apagado).

Visões:

FR_SESSAO_VI

Triggers:

FR_SESSAO_BI0 (SQL Server 2000/2005/2008, PostgreSQL, Oracle e FireBird)

FR_SESSAO_BEFORE_INSERT (Apenas MySQL)

Funções:

FR_SESSAO_HORA (PostgreSQL)

O script abaixo exemplifica a linguagem de definição de dados dos objetos necessários, caso tenha sido utilizado o banco de dados Postgresql no projeto.

CREATE TABLE fr_grupo

(

grp_codigo integer NOT NULL,

sis_codigo character varying(3) NOT NULL,

grp_nome character varying(40) NOT NULL

);

CREATE TABLE fr_log

(

log character varying(6000)

);

CREATE TABLE fr_log_event

(

log_id integer NOT NULL,

log_data timestamp without time zone,

log_hora character(8),

log_codform integer,

log_descform character varying(100),

log_operacao character(1),

log_usuario character varying(30),

log_sistema character(3),

log_chave character varying(200),

log_chavecont character varying(128),

log_conteudo text

);

CREATE TABLE fr_permissao

(

per_codigo integer NOT NULL,

grp_codigo integer NOT NULL,

sis_codigo character varying(3) NOT NULL,

rel_codigo integer,

frm_codigo integer,

com_codigo integer,

mnu_codigo integer,

per_adicionar character(1) DEFAULT 'N'::bpchar,

per_excluir character(1) DEFAULT 'N'::bpchar,

per_editar character(1) DEFAULT 'N'::bpchar NOT NULL,

per_visualizar character(1) DEFAULT 'N'::bpchar NOT NULL,

per_habilitado character(1) DEFAULT 'N'::bpchar NOT NULL

);

CREATE TABLE fr_relatorio

(

rel_codigo integer NOT NULL,

sis_codigo character(3) NOT NULL,

rel_nome character varying(255) NOT NULL,

rel_conteudo text,

rel_modificado timestamp without time zone,

rel_tamanho integer,

usr_codigo integer

);

CREATE TABLE fr_sessao

(

ses_conexao integer NOT NULL,

ses_datahora_login timestamp without time zone,

ses_usuario character varying(20),

ses_nome_usuario character varying(40),

ses_nome_maquina character varying(40),

ses_end_ip character varying(20),

sis_codigo character(3)

);

CREATE VIEW fr_sessao_vi AS

SELECT s.ses_conexao, s.ses_datahora_login, s.ses_usuario, s.ses_nome_usuario, s.ses_nome_maquina, s.ses_end_ip, s.sis_codigo

FROM fr_sessao s

WHERE (s.ses_conexao = pg_backend_pid());

CREATE TABLE fr_sistema

(

sis_codigo character varying(3) NOT NULL,

sis_descricao character varying(30) NOT NULL,

img_codigo integer,

img_codigo_icone integer,

sis_sqldatalimite character varying(2000),

sis_sqldadosentidade character varying(2000),

sis_sqlinformacoes character varying(2000),

sis_check character varying(30),

sis_grupoexterno integer,

sis_resumo character varying(1000)

);

CREATE TABLE fr_usuario

(

usr_codigo integer NOT NULL,

usr_login character varying(20) NOT NULL,

usr_senha character varying(64),

usr_administrador character(1) DEFAULT 'N'::bpchar,

usr_tipo_expiracao character(1) NOT NULL,

usr_dias_expiracao integer,

usr_imagem_digital bytea,

usr_foto bytea,

usr_nome character varying(60) NOT NULL,

usr_email character varying(60),

usr_digital integer,

usr_inicio_expiracao timestamp without time zone,

CONSTRAINT fr_usuario_usr_login_check CHECK ((btrim((usr_login)::text) &lt;&gt; ''::text)),

CONSTRAINT fr_usuario_usr_nome_check CHECK ((btrim((usr_nome)::text) &lt;&gt; ''::text))

);

CREATE TABLE fr_usuario_grupo

(

grp_codigo integer NOT NULL,

sis_codigo character varying(3) NOT NULL,

usr_codigo integer NOT NULL

);

CREATE TABLE fr_usuario_sistema

(

usr_codigo integer NOT NULL,

sis_codigo character varying(3) NOT NULL,

uss_acesso_externo character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_administrador character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_acesso_maker character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_criar_formulario character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_criar_relatorio character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_acessar character(1) DEFAULT 'N'::bpchar NOT NULL,

uss_criar_regra character(1) DEFAULT 'N'::bpchar NOT NULL

);

ALTER TABLE ONLY fr_grupo

ADD CONSTRAINT fr_grupo_grp_nome_unq UNIQUE (grp_nome, sis_codigo);

ALTER TABLE ONLY fr_grupo

ADD CONSTRAINT fr_grupo_pk PRIMARY KEY (grp_codigo, sis_codigo);

ALTER TABLE ONLY fr_permissao

ADD CONSTRAINT fr_permissao_pk PRIMARY KEY (per_codigo);

ALTER TABLE ONLY fr_relatorio

ADD CONSTRAINT fr_relatorio_nome_sis_unq UNIQUE (sis_codigo, rel_nome);

ALTER TABLE ONLY fr_relatorio

ADD CONSTRAINT fr_relatorio_pk PRIMARY KEY (rel_codigo);

ALTER TABLE ONLY fr_relatorio

ADD CONSTRAINT fr_relatorio_rel_codigo_key UNIQUE (rel_codigo, sis_codigo);

ALTER TABLE ONLY fr_usuario

ADD CONSTRAINT fr_usuario_usr_login_key UNIQUE (usr_login);

ALTER TABLE ONLY fr_sistema

ADD CONSTRAINT pk_fr_sistema PRIMARY KEY (sis_codigo);

ALTER TABLE ONLY fr_usuario

ADD CONSTRAINT pk_fr_usuario PRIMARY KEY (usr_codigo);

ALTER TABLE ONLY fr_usuario_grupo

ADD CONSTRAINT pk_fr_usuario_grupo PRIMARY KEY (grp_codigo, sis_codigo, usr_codigo);

ALTER TABLE ONLY fr_usuario_sistema

ADD CONSTRAINT pk_fr_usuario_sistema PRIMARY KEY (usr_codigo, sis_codigo);

CREATE INDEX fki_fr_relatorio_usuario_fk2 ON fr_relatorio USING btree (usr_codigo);

CREATE INDEX fki_fr_sistema_imagem_fk ON fr_sistema USING btree (img_codigo);

CREATE INDEX fki_fr_usuario_grupo_grupo_fk ON fr_usuario_grupo USING btree (grp_codigo, sis_codigo);

CREATE INDEX fki_fr_usuario_grupo_usuario_fk ON fr_usuario_grupo USING btree (usr_codigo);

CREATE INDEX fki_fr_usuario_sistema_sistema_fk ON fr_usuario_sistema USING btree (sis_codigo);

CREATE INDEX fki_fr_usuario_sistema_ususario_fk ON fr_usuario_sistema USING btree (usr_codigo);

CREATE UNIQUE INDEX ix_fr_sessao ON fr_sessao USING btree (ses_conexao);

CREATE FUNCTION fr_sessao_hora() RETURNS "trigger"

AS $$

BEGIN delete from fr_sessao where ses_conexao = pg_backend_pid(); NEW.ses_conexao := pg_backend_pid(); NEW.ses_datahora_login := current_timestamp; RETURN NEW; END;

$$

LANGUAGE plpgsql;

CREATE TRIGGER fr_sessao_bi0

BEFORE INSERT ON fr_sessao

FOR EACH ROW

EXECUTE PROCEDURE fr_sessao_hora();

ALTER TABLE ONLY fr_relatorio

ADD CONSTRAINT fr_relatorio_usuario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo) ON

UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE ONLY fr_usuario_grupo

ADD CONSTRAINT fr_usuario_grupo_grupo_fk FOREIGN KEY (grp_codigo, sis_codigo) REFERENCES fr_grupo(grp_codigo, sis_codigo) ON UPDATE RESTRICT ON

DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_grupo

ADD CONSTRAINT fr_usuario_grupo_usuario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo) ON

UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_sistema

ADD CONSTRAINT fr_usuario_sistema_sistema_fk FOREIGN KEY (sis_codigo) REFERENCES fr_sistema(sis_codigo) ON

UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_sistema

ADD CONSTRAINT fr_usuario_sistema_ususario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo) ON

UPDATE CASCADE ON DELETE CASCADE;

CREATE TABLE fr_tarefa

(

trf_codigo integer NOT NULL,

trf_descricao character varying(255) NOT NULL,

sis_codigo character varying(3) NOT NULL,

reg_codigo integer NOT NULL,

trf_data_inicial date,

trf_data_final date,

trf_ativa character(1) NOT NULL,

trf_regra_parametros text,

trf_tipo_agendamento character varying(15),

CONSTRAINT fr_tarefa_pkey PRIMARY KEY (trf_codigo),

CONSTRAINT fk_fr_tarefa_fr_sistem FOREIGN KEY (sis_codigo)

REFERENCES fr_sistema (sis_codigo) MATCH SIMPLE

ON UPDATE NO ACTION ON DELETE NO ACTION,

CONSTRAINT fk_fr_tarefa_fr_sistemfk_fr_tarefa_fr_regra FOREIGN KEY (reg_codigo)

REFERENCES fr_regras (reg_cod) MATCH SIMPLE

ON UPDATE NO ACTION ON DELETE NO ACTION,

CONSTRAINT fr_tarefa_trf_descricao_key UNIQUE (trf_descricao)

)

CREATE TABLE fr_tarefa_tempo

(

trt_codigo integer NOT NULL,

trf_codigo integer NOT NULL,

trt_tipo character varying(15) NOT NULL,

trt_valor integer NOT NULL,

CONSTRAINT fr_tarefa_tempo_pkey PRIMARY KEY (trt_codigo),

CONSTRAINT fk_fr_tarefa_tempo_fr_taref FOREIGN KEY (trf_codigo)

REFERENCES fr_tarefa (trf_codigo) MATCH SIMPLE

ON UPDATE NO ACTION ON DELETE NO ACTION

)

Observações:

1. No ambiente de produção a tabela FR_PERMISSAO só tem integridade referencial com as tabelas FR_USUARIO e FR_GRUPO e o relacionamento entre as tabelas FR_SISTEMAS e FR_IMAGEM é responsável por armazenar as imagens do sistema.
2. Em alguns casos, os sistemas publicados que utilizam SQL Server, a funcionalidade de log's não armazena as informações. Neste caso, será necessário ir até a tabela FR_LOG_EVENT e alterar a coluna LOG_ID, setando-a como IDENTITY.
