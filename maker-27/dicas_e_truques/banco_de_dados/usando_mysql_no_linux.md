---
title: "Usando o MySQL no Linux"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/banco_de_dados/usando_mysql_no_linux.htm"
---

Para a utilização do MySQL no linux, é necessário atualizar o Maker para a versão 2.4.1.44 ou superior, e configurar o servidor para trabalhar com identificadores case insensitive. Para forçar o MySQL a trabalhar com os identificadores case insensitive, defina a variável de sistema lower_case_table_names system variable na inicialização do mysqld.

Caso não tenha permissão para a opção acima, outra alternativa consiste em executar o script adicional listado abaixo:

--Aliases para compatibilidade com o LINUX (Unix-Like)

create view FR_ACAO as select * from fr_acao;

create view FR_ACAOCOMPONENTE as select * from fr_acaocomponente;

create view FR_ACAOPARAMETRO as select * from fr_acaoparametro;

create view FR_ACPTIPO as select * from fr_acptipo;

create view FR_CAMPO as select * from fr_campo;

create view FR_CATEGORIA as select * from fr_categoria;

create view FR_COMPILADOR as select * from fr_compilador;

create view FR_COMPILADOR_DATABASE as select * from fr_compilador_database;

create view FR_COMPONENTE as select * from fr_componente;

create view FR_COMPONENTE_CATEGORIA as select * from fr_componente_categoria;

create view FR_CONFIGURACAO as select * from fr_configuracao;

create view FR_CONSULTA_AVANCADA as select * from fr_consulta_avancada;

create view FR_DATABASE as select * from fr_database;

create view FR_DIAGRAMA as select * from fr_diagrama;

create view FR_DICIONARIO_VI as select distinct

't'.'TABLE_NAME' AS 'tabela',

'c'.'COLUMN_NAME' AS 'campo',

coalesce(convert('fr_campo'.'cmp_descricao' using utf8),'c'.'COLUMN_NAME') AS 'descricao',

'c'.'DATA_TYPE' AS 'tipo'

from

(('information_schema'.'tables' 't'

join 'information_schema'.'columns' 'c' on(('c'.'TABLE_NAME' = 't'.'TABLE_NAME')))

left join 'fr_campo' on(((convert('fr_campo'.'tab_nome' using utf8) = 't'.'TABLE_NAME') and

(convert('fr_campo'.'cmp_nome' using utf8) = 'c'.'COLUMN_NAME'))))

where

(('t'.'TABLE_SCHEMA' = database()) and ('t'.'TABLE_TYPE' in (_utf8'VIEW',_utf8'BASE TABLE')));

create view FR_FONTEDADOS as select * from fr_fontedados;

create view FR_FORMULARIO as select * from fr_formulario;

create view FR_FORMULARIO_CATEGORIA as select * from fr_formulario_categoria;

create view FR_FORMULARIO_SISTEMA as select * from fr_formulario_sistema;

create view FR_GRUPO as select * from fr_grupo;

create view FR_IMAGEM as select * from fr_imagem;

create view FR_LOG as select * from fr_log;

create view FR_LOG_EVENT as select * from fr_log_event;

create view FR_MENU as select * from fr_menu;

create view FR_OPERADOR as select * from fr_operador;

create view FR_OPERANDO as select * from fr_operando;

create view FR_PARAMETRO as select * from fr_parametro;

create view FR_PERMISSAO as select * from fr_permissao;

create view FR_PERMISSAO_MAKER as select * from fr_permissao_maker;

create view FR_PROPRIEDADE as select * from fr_propriedade;

create view FR_REGRAS as select * from fr_regras;

create view FR_REGRAS_ATIVIDADES as select * from fr_regras_atividades;

create view FR_REGRAS_BANCO as select * from fr_regras_banco;

create view FR_REGRAS_CATEGORIAS as select * from fr_regras_categorias;

create view FR_REGRAS_FUNCOES as select * from fr_regras_funcoes;

create view FR_REGRAS_FUNCOES_TIPOS as select * from fr_regras_funcoes_tipos;

create view FR_REGRAS_TIPOS as select * from fr_regras_tipos;

create view FR_REGRAS_TRIGGERS as select * from fr_regras_triggers;

create view FR_RELATORIO as select * from fr_relatorio;

create view FR_RELATORIO_CATEGORIA as select * from fr_relatorio_categoria;

create view FR_SESSAO as select * from fr_sessao;

create view FR_SESSAO_VI as select

'fr_sessao'.'ses_conexao' AS 'ses_conexao',

'fr_sessao'.'ses_datahora_login' AS 'ses_datahora_login',

'fr_sessao'.'ses_usuario' AS 'ses_usuario',

'fr_sessao'.'ses_nome_usuario' AS 'ses_nome_usuario',

'fr_sessao'.'ses_nome_maquina' AS 'ses_nome_maquina',

'fr_sessao'.'ses_end_ip' AS 'ses_end_ip',

'fr_sessao'.'sis_codigo' AS 'sis_codigo'

from

'fr_sessao'

where

('fr_sessao'.'ses_conexao' = connection_id());

create view FR_SISTEMA as select * from fr_sistema;

create view FR_SISTEMA_CATEGORIA as select * from fr_sistema_categoria;

create view FR_TABELA as select * from fr_tabela;

create view FR_TAREFA as select * from fr_tarefa;

create view FR_TAREFA_TEMPO as select * from fr_tarefa_tempo;

create view FR_TIPO_EVENT as select * from fr_tipo_event;

create view FR_TIPODADO as select * from fr_tipodado;

create view FR_USUARIO as select * from fr_usuario;

create view FR_USUARIO_GRUPO as select * from fr_usuario_grupo;

create view FR_USUARIO_SISTEMA as select * from fr_usuario_sistema;

create view FR_VERSAO as select * from fr_versao;

Observação : As demais tabelas proprietárias do sistema devem ser executado um select dependendo de como esteja o nome da tabela no banco

Exemplo: Se os nomes das tabelas estiverem em maiúsculo, o select terá que ser executado com o nome da tabela em maiúsculo e vice-versa.
