---
title: "Estrutura de tabelas FR para o ambiente de produção (.war / .jar)"
source_url: "https://manual.softwell.com.br/docs/dicas-e-truques/diversos/exemplo_script_da_publicacao_war_jar"
---

Na base de dados que será utilizada com um sistema publicado (extensões war ou jar), devem ser mantidas as tabelas e objetos descritos abaixo.

## Tabelas referentes ao Agendador de tarefas

Necessário apenas para casos de utilização do Agendador de Tarefas.

| Entidade | Descrição |
| --- | --- |
| FR_TAREFA | Entidade responsável por armazenar as referências das tarefas que estão sendo executadas temporariamente pelo sistema. |
| FR_TAREFA_TEMPO | Entidade responsável por armazenar o tempo das tarefas agendadas. |

**Relacionamentos:**

- FR_TAREFA — FR_REGRAS vinculada ao campo REG_CODIGO.
- FR_TAREFA_TEMPO — FR_TAREFA vinculada ao campo TRF_CODIGO.

## Tabelas do Usuário

| Entidade | Descrição |
| --- | --- |
| FR_USUARIO | Entidade responsável pelo armazenamento dos usuários cadastrados no sistema. É utilizada tanto em modo de produção quanto em modo de desenvolvimento. |
| FR_GRUPO | Entidade responsável por armazenar os grupos criados para controle de permissões aos usuários. |
| FR_PERMISSAO | Entidade responsável por armazenar as permissões para acesso ao Maker referente a cada usuário, vinculada às tabelas FR_GRUPO, FR_RELATORIO e FR_FORMULARIO. |
| FR_USUARIO_GRUPO | Entidade responsável por relacionar os usuários com os grupos criados. |

**Relacionamentos:**

- FR_USUARIO — FR_USUARIO_GRUPO e FR_USUARIO_SISTEMA vinculadas ao campo USR_CODIGO.
- FR_GRUPO — FR_PERMISSAO vinculada aos campos GRP_CODIGO e SIS_CODIGO; FR_USUARIO_GRUPO vinculada aos campos GRP_CODIGO e SIS_CODIGO.

## Tabelas do Sistema

| Entidade | Descrição |
| --- | --- |
| FR_SISTEMA | Entidade responsável por armazenar as informações dos sistemas que pertencem à base de dados em uso. |
| FR_SESSAO | Entidade responsável por armazenar as informações da sessão dos usuários ao logar no sistema. |
| FR_LOG | Entidade responsável por armazenar um log de alterações identificando o usuário, data e hora e valores antigos e novos. |
| FR_USUARIO_SISTEMA | Entidade responsável por armazenar as informações de usuários para as permissões de acesso ao sistema. |
| FR_LOG_EVENT | Entidade responsável por armazenar todo o log referente a eventos do sistema. Ex.: inclusão, alteração, exclusão. |
| FR_LOG_ACCESS | Entidade responsável por armazenar todo o log de ações que o usuário desempenhou no sistema. Ex.: entrar e sair do sistema, abrir e fechar formulários, gerar relatórios, etc. [Saiba mais!](../../webrun/log_de_acesso) |
| FR_REGRAS | Entidade responsável por armazenar as informações sobre os fluxogramas criados. |

**Observação:** em FR_REGRAS, basta manter o conteúdo dos campos REG_COD e REG_NOME; o conteúdo dos demais campos pode ser apagado.

## Outros objetos

**Visões:**

- FR_SESSAO_VI

**Triggers:**

- FR_SESSAO_BI0 (SQL Server 2000/2005/2008, PostgreSQL, Oracle e FireBird)
- FR_SESSAO_BEFORE_INSERT (apenas MySQL)

**Funções:**

- FR_SESSAO_HORA (PostgreSQL)

## Script de publicação

O script abaixo exemplifica a linguagem de definição de dados dos objetos necessários, caso tenha sido utilizado o banco de dados PostgreSQL no projeto.

```sql
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

CREATE TABLE fr_log_access
(
    log_id integer NOT NULL,
    log_usuario character varying(30),
    log_data_hora timestamp without time zone NOT NULL,
    log_descricao character varying(500),
    log_sistema character varying(3),
    CONSTRAINT fr_log_access_pkey PRIMARY KEY (log_id),
    CONSTRAINT fr_log_access_log_id_key UNIQUE (log_id)
);

CREATE SEQUENCE fr_log_access_log_id_seq;

ALTER TABLE fr_log_access
    ALTER COLUMN log_id SET DEFAULT nextval('fr_log_access_log_id_seq');

ALTER SEQUENCE fr_log_access_log_id_seq
    OWNED BY fr_log_access.log_id;

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
    CONSTRAINT fr_usuario_usr_login_check CHECK ((btrim((usr_login)::text) <> ''::text)),
    CONSTRAINT fr_usuario_usr_nome_check CHECK ((btrim((usr_nome)::text) <> ''::text))
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
BEGIN
    DELETE FROM fr_sessao WHERE ses_conexao = pg_backend_pid();
    NEW.ses_conexao := pg_backend_pid();
    NEW.ses_datahora_login := current_timestamp;
    RETURN NEW;
END;
$$
LANGUAGE plpgsql;

CREATE TRIGGER fr_sessao_bi0
    BEFORE INSERT ON fr_sessao
    FOR EACH ROW
    EXECUTE PROCEDURE fr_sessao_hora();

ALTER TABLE ONLY fr_relatorio
    ADD CONSTRAINT fr_relatorio_usuario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo)
    ON UPDATE CASCADE ON DELETE SET NULL;

ALTER TABLE ONLY fr_usuario_grupo
    ADD CONSTRAINT fr_usuario_grupo_grupo_fk FOREIGN KEY (grp_codigo, sis_codigo) REFERENCES fr_grupo(grp_codigo, sis_codigo)
    ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_grupo
    ADD CONSTRAINT fr_usuario_grupo_usuario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo)
    ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_sistema
    ADD CONSTRAINT fr_usuario_sistema_sistema_fk FOREIGN KEY (sis_codigo) REFERENCES fr_sistema(sis_codigo)
    ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE ONLY fr_usuario_sistema
    ADD CONSTRAINT fr_usuario_sistema_ususario_fk FOREIGN KEY (usr_codigo) REFERENCES fr_usuario(usr_codigo)
    ON UPDATE CASCADE ON DELETE CASCADE;

-- Tabelas para o agendador de tarefas

CREATE TABLE fr_regras
(
    reg_cod integer NOT NULL,
    reg_nome character varying(255),
    CONSTRAINT fr_regras_pkey PRIMARY KEY (reg_cod)
);

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
);

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
);
```

## Observações

1. No ambiente de produção a tabela FR_PERMISSAO só tem integridade referencial com as tabelas FR_USUARIO e FR_GRUPO.
2. O Webrun utiliza as procedures SP_GEN_ID e SP_GEN_LOG para gerar os id's.
3. Somente será necessário a exportação da tabela **FR_REGRAS**, caso o usuário utilize tarefas agendadas em seu sistema.
4. [Servidores homologados](../../FAQ/versoes_homologadas#servidor_de_aplicacao)
