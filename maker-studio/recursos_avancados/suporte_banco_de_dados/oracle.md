---
title: "Oracle 9i/10g/11g"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/suporte_banco_de_dados/oracle.htm"
---

A Softwell nos últimos anos tem se empenhado em homologar todas as versões do Oracle liberadas por seu fabricante tão logo elas sejam consideradas "versões estáveis". Atualmente são suportadas para desenvolvimento e produção as seguintes versões do Oracle:

- Oracle 9i/10g/11g;

## Permissões necessárias

O Maker (IDE) faz diversas consultas aos metadados do Oracle para identificar tabelas, colunas, tipos de dados, restrições de PK, FK, UNQ, entre diversas outras, para conseguir obter essas informações do SGDB é necessário permissão de leitura (SELECT) nas seguintes tabelas/views do SGDB:

1. SYS.IND$
2. SYS.ICOL$
3. SYS.OBJ$
4. SYS.USER$
5. SYS.COL$
6. SYS.CDEF$
7. SYS.CCOL$
8. SYS.USER_SYS_PRIVS
9. ALL_TABLES
10. ALL_VIEWS
11. ALL_TAB_COLUMNS
12. SYS.ALL_CONS_COLUMNS
13. SYS.ALL_CONSTRAINTS
14. SYS.ALL_CONS_COLUMNS
15. ALL_IND_COLUMNS
16. ALL_CONSTRAINTS
17. ALL_COL_COMMENTS
18. ALL_OBJECTS

São feitas consultas diretas às tabelas e views do sistema do banco por questões de performance, já que em testes internos obtivemos melhorias de performance muito grandes, em média conseguimos recuperar as informações 9,8 vezes mais rápido que usando as VIEWS mais comumente usadas como "ALL_TABLES", "USER_VIEWS" e similares.

O Maker tentará modificar os seguintes atributos da sessão:

- ALTER SESSION SET NLS_TIMESTAMP_FORMAT='DD/MM/RRRR HH24:MI:SS'
- ALTER SESSION SET NLS_DATE_FORMAT='DD/MM/RRRR HH24:MI:SS'
- ALTER SESSION SET NLS_LANGUAGE='BRAZILIAN PORTUGUESE'
- ALTER SESSION SET NLS_TERRITORY='BRAZIL'

Dica: Ao criar um formulário, caso exista um campo do tipo CLOB, que serve para gravar texto longo, o componente que dá suporte é [Texto Longo](../../maker_3/formulario/componentes/texto_longo). Se o usuário desejar utilizar este campo em uma [Grade](../../maker_3/formulario/componentes/grade), não será possível editar.

## Alocação e liberação de recursos

Na configuração padrão do Webrun, para cada usuário conectado ao sistema é criado uma conexão com o Oracle que será usada exclusivamente para executar os comandos do usuário, essa conexão é liberada assim que a sessão do usuário é encerrada na aplicação, as sessões de usuário expiram automaticamente após 30 minutos de inatividade (parâmetro configurável). Há ainda a possibilidade de utilização de pool de conexões discutido adiante.

## Versionamento de objetos (FR_VERSAO)

Por questões de retrocompatibilidade com versões legadas (de projetos criados com as versões iniciais do Maker 2.6/2.7 e anteriores), O Maker realiza uma consulta com "Max" na coluna VER_CODIGO para obter o próximo ID para versionamento de um objeto. Esta operação atende a maioria dos casos e não é necessário intervenção do desenvolvedor Maker.

Caso durante o desenvolvimento do projeto apresente erros constantes (geralmente ORA-00001 restrição exclusiva ou Field 'VER_TIPO' must have a value), recomendamos o uso de uma trigger para efetuar o gerenciamento do campo VER_CODIGO.
Siga as instruções abaixo:

- Criação da SEQUENCE 'FR_VERSAO_VER_CODIGO_SEQ': Caso não exista esta sequence no banco de dados, utilize o script create sequence FR_VERSAO_VER_CODIGO_SEQ START WITH 1 INCREMENT BY 1 NOMAXVALUE; É recomendado que o valor "WITH 1" seja atualizado para o maior valor do campo VER_CODIGO, exemplo "WITH 1021".
- Criação da TRIGGER:

  CREATE TRIGGER FR_VERSAO_VER_CODIGO_NEXTVAL
  BEFORE INSERT ON FR_VERSAO
  REFERENCING NEW AS NEW OLD AS OLD FOR EACH ROW
  begin

  select FR_VERSAO_VER_CODIGO_SEQ.nextval into :new.VER_CODIGO from dual;

  end;

## Ambiente de produção

Aqui considerado como o ambiente (Hardware e Softwares) onde a aplicação final ficará hospedada depois de concluída, e também o ambiente utilizado para homologação de novas versões do software. Neste ambiente somente o Webrun é instalado e utiliza um driver JDBC fornecido pela própria Oracle para realizar a comunicação com os bancos de dados, não sendo necessárias as permissões de DBA, ou qualquer tipo de privilégio especial. Os requisitos de permissões devem se basear nas necessidades das aplicações desenvolvidas, liberando-se o acesso de SELECT, UPDATE, INSERT, DELETE entre outros somente sobre os objetos que a aplicação usa.

Tabelas necessárias para a publicação das aplicações com JAR ou WAR.

| Controle de acesso | FR_SISTEMA | Lista de sistemas |
| FR_USUARIO |  | Lista de usuários do sistema |
| FR_GRUPO |  | Grupos de usuário |
| FR_USUARIO_GRUPO |  | Usuários x Grupos |
| FR_USUARIO_SISTEMA |  | Usuários x Sistemas |
| FR_PERMISSAO |  | Permissões |
| Log de atividades | FR_LOG | Usada para gravar um log de alterações, identificando o usuário, data e hora e valores antigos e novos. |
| FR_LOG_EVENT |  |  |
| Agendador de tarefas | FR_TAREFA | Permite agendar tarefas que são executadas temporariamente pelo sistema. |
| FR_TAREFA_TEMPO |  |  |
| FR_REGRAS |  |  |
| Identificação do usuário no SGBD | FR_SESSAO | Usada para identificar o usuário em procedures e outros objetos do banco de dados. |

Observações:

- Caso seja necessário adicionar um alias na tabela é necessario a ativação do parâmetro OracleExtendedMetadada no arquivo [Maker3.ini](../../estrutura_maker_e_webrun/arquivo_maker3_ini).
- O número de tabelas envolvidas pode cair ainda mais de acordo com os recursos utilizados por cada aplicativo.
- No ambiente de produção não há a necessidade de instalação do Maker (IDE).
- O Maker ignora os objetos (tabelas/views) nas seguintes table space: SYSTEM, SYSAUX;
- O table space DEFAULT do usuário não pode ser SYSTEM ou SYSAUX:
- Os campos-chave que tenham Sequences associados a eles não podem ser obrigatórios.
- Caso o filtro do componente Lista dinâmica esteja case sensitive, localize o grupo "Oracle" no arquivo databases.xml (diretório de instalação\Webrun 3\config\) e adicione a seguinte chave:

&lt;item&gt;

   &lt;item-name&gt; CaseSensitive&lt;/item-name&gt;

   &lt;item-param&gt;1&lt;/item-param&gt;

 &lt;/item&gt;

Abaixo, script para criação de usuário/banco.

CREATE USER "&lt;nome do usuário&gt;"

IDENTIFIED BY "&lt;senha do usuário&gt;"

DEFAULT TABLESPACE USERS

TEMPORARY TABLESPACE TEMP

PROFILE "DEFAULT"

ACCOUNT UNLOCK;

GRANT UNLIMITED TABLESPACE TO "&lt;nome do usuário&gt;";

GRANT "CONNECT" TO "&lt;nome do usuário&gt;";

GRANT DBA TO "&lt;nome do usuário&gt;";

GRANT "RESOURCE" TO "&lt;nome do usuário&gt;";

Desempenho

1. A partir da versão 3 do Maker é possível adicionar no arquivo Maker3.ini um parâmetro chamado "OptimizeOracle" que instrui a IDE a utilizar consultas de baixo nível ao metadado do Oracle ignorando as VIEWS do sistema. Para tal edite o Maker3.ini e defina o parâmetro como 1 (True) conforme o exemplo abaixo:

[MAKER] OptimizeOracle=1

2. No WFRE, adicione o parâmetro SchemaList e como valor informe o nome do(s) esquema(s) que será(ão) utilizado(s).

Exemplo:

WFRE

SchemaList=MAKER,SYSTEM,SYS

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
