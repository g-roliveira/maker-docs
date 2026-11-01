---
title: "Copy of Tabelas FR's"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/estrutura_maker_e_webrun/Copy_of_Tabelas_FR_s.htm"
---

# Tabelas FR's

As tabelas FR's são responsáveis por armazenar todas as informações do sistema desde a biblioteca de funções aos objetos utilizados no projeto. Abaixo, segue detalhamento sobre a função de cada tabela FR utilizada em projetos feitos com Maker

- Tabelas referente ao Agendador de tarefas.

| Entidade | Descrição |
| --- | --- |
| FR_TAREFA_TEMPO | Entidade responsável por armazenar o tempo das tarefas agendadas. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente ao objeto formulário.

| Entidade | Descrição |
| --- | --- |
| FR_ACAO | Entidade responsável pelo armazenamento das ações pré-definidas. Esta entidade é utilizada apenas em modo de desenvolvimento. Ex.: Abrir Janela. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_ACAOCOMPONENTE | Entidade responsável pelo armazenamento de informações referente aos evento do componente. |
| Relacionamentos: | |
| Entidades:     - FR_PARAMETRO vinculada aos campos FRM_CODIGO, COM_CODIGO, ACO_CODIGO. ACC_MOMENTO_VARCHAR, PAR_NOME_VARCHAR. | |

| Entidade | Descrição |
| --- | --- |
| FR_FORMULARIO | Entidade responsável por armazenar as informações dos formulários do sistema. |
| Relacionamentos: | |
| Entidade:     - FR_COMPONENTE vinculada ao campo FRM_CODIGO. - FR_CONSULTA_AVANCADA vinculada ao campo FRM_CODIGO. - FR_FONTEDADOS vinculada ao campo FRM_CODIGO. - FR_FORMULARIO_CATEGORIA vinculada ao campo FRM_ CODIGO. - FR_FORMULARIO_SISTEMA vinculada ao campo FRM_CODIGO. - FR_MENU vinculada ao campo FRM_CODIGO. - FR_PERMISSAO vinculada ao campo FRM_CODIGO. | |

| Entidade | Descrição |
| --- | --- |
| FR_FORMULARIO_SISTEMA | Entidade responsável por relacionar o formulário com o sistema. Para bases de dados que contém mais de um projeto. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_FORMULARIO_CATEGORIA | Entidade responsável por relacionar o formulário a uma categoria. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_PROPRIEDADE | Entidade responsável por armazenar as propriedades dos componetes do formulário. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente ao controle de usuários.

| Entidade | Descrição |
| --- | --- |
| FR_USUARIO | Entidade responsável pelo armazenamento dos usuários cadastrados no sistema. É utilizada tanto em modo de produção quanto em modo de desenvolvimento. |
| Relacionamentos: | |
| Entidades     - FR_USUARIO_GRUPO vinculada ao campo USR_CODIGO. - FR_USUARIO_SISTEMA vinculada ao campo USR_CODIGO. | |

| Entidade | Descrição |
| --- | --- |
| FR_GRUPO | Entidade responsável por armazenar os grupos criados para controle de permissões aos usuários. |
| Relacionamentos: | |
| Entidade:     - FR_PERMISSAO vinculada aos campos GRP_CODIGO e SIS_CODIGO - FR_USUARIO_GRUPO vinculada aos campos GRP_CODIGO E SIS_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_PERMISSAO | Entidade responsável por armazenar as permissões para acesso ao Maker referente a cada usuário, vinculada a tabela fr_grupo, fr_relatorio e fr_formulario |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_USUARIO_GRUPO | Entidade responsável por relacionar os usuários com os grupos criados, tabela fr_grupo. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente a manipulação do banco de dados.

| Entidade | Descrição |
| --- | --- |
| FR_DATABASE | Entidade responsável por armazenar informações sobre os descritores de sintaxes. |
| Relacionamentos: | |
| Entidade:     - FR_COMPILADOR_DATABASE vinculada ao campo DBA_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_TRIGGERS | Entidade responsável por relacionar as tabelas com as regras da camada banco de dados que são gatilhos. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente ao dicionário de dados.

| Entidade | Descrição |
| --- | --- |
| FR_CAMPO | Entidade responsável pelo armazenamento de informações referente ao dicionário de dados |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_COMPONENTE_CATEGORIA | Entidade responsável pelo armazenamento da categoria do componente |
| Relacionamentos: | |
| Não possui | |

 - Tabelas referente aos sistemas do Maker.

| Entidade | Descrição |
| --- | --- |
| FR_SISTEMA | Entidade responsável por armazenar as informações dos sistemas que pertencem a base de dados em uso |
| Relacionamentos: | |
| Entidade:     - FR_DOC_PRINCIPAL vinculada ao campo SIS_CODIGO - FR_FORMULARIO_SISTEMA vinculada ao campo SIS_CODIGO. - FR_HISTORICO_SQLl vinculada ao campo SIS_CODIGO - FR_MENU vinculada ao campo SIS_CODIGO - FR_TAREFA vinculada ao campo SIS_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_SESSAO | Entidade responsável por armazenar as informações da sessão dos usuários ao logar no sistema. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_LOG | Entidade responsável por armazenar um log de alterações indentificando o usuário, data e hora e valores antigos e novos. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_USUARIO_SISTEMA | Entidade responsável por armazenar as informações de usuários para as permissões de acesso ao sistema. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_LOG_EVENT | Entidade responsável por armazenar todo o log referente a eventos do sistema. Ex: Inclusão, alteração e etc |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_TAREFA | Entidade responsável por armazenar as referências das tarefas que estão sendo executadas temporiariamente pelo sistema |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente aos relatórios do sistema.

| Entidade | Descrição |
| --- | --- |
| FR_RELATORIO | Entidade reponsável por armzenar a categoria dos relatórios |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_RELATORIO_CATEGORIA | Entidade reponsável por armzenar a categoria dos relatórios |
| Relacionamentos: | |
| Não possui | |

Observações:

- A tabela FR_DIAGRAMA foi descontinuada.
- As tabelas FR_OPERADOR e FR_OPERANDO só serão utilizadas, caso o usuário selecione a opção Suporte aos recursos do Maker 1.x na tela de configurações.
