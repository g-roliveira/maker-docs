---
title: "Tabelas FR's"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/estrutura_maker_e_webrun/tabelas_frs_version3.htm"
---

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
| FR_PERMISSAO_MAKER | Entidade responsável por armazenar as informações sobre as permissões dadas aos grupos criados no Maker para edição de regras, formulários e relatórios. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_USUARIO_GRUPO | Entidade responsável por relacionar os usuários com os grupos criados, tabela fr_grupo. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente ao controle de fluxos do Maker.

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_ATIVIDADES | Entidade responsável por armazenar as informações das funções do objeto interação do editor de fluxo de ações. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_BANCO | Entidade responsável por armazenar as regras da camada banco de dados que form compiladas. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_FUNCOES | Entidade responsável por armazenar as funções referentes a API do sistema. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_FUNCOES_TIPOS | Entidade responsável por armazenar os tipos das funções da API. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_CATEGORIAS | Entidade responsável por armazenar as informações das categorias das regras |
| Relacionamentos: | |
| Entidade:     - FR_REGRA vinculada ao campo CAT_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_REGRAS_TIPOS | Entidade responsável por armazenar os tipos de variáveis que podem ser utilizadas nas regras. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente ao visualizador de depedências.

| Entidade | Descrição |
| --- | --- |
| FR_DEP_FORMULARIO_CAMPO | Entidade responsável por relacionar as dependências entro o formulário e os campos. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_FORMULARIO_FORMULARIO | Entidade responsável por relacionar as dependências entre um objeto formulário para outros formulários |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_FORMULARIO_REGRA | Entidade responsável por relacionar as dependências entre o formulário e as regras |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_FORMULARIO_RELATORIO | Entidade responsável por relacionar as dependências entre o formulário e os relatórios |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_FORMULARIO_TABELA | Entidade responsável por relacionar as dependências entro o formulário e as tabelas |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_CAMPO | Entidade responsável por relacionar as dependências entre as regras e os campos. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_COMPONENTE | Entidade responsável por relacionar as dependências entre as regras e os componentes. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_FORMULARIO | Entidade responsável por relacionar as dependências entre as regras e os formulários |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_FUNCAO | Entidade reponsável por relacionar as dependências entre as regras e as funções. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_REGRA | Entidade reponsável por relacionar as dependências entre as regras e outras regras. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_RELATORIO | Entidade reponsável por relacionar as dependências entre as regras e os relatórios. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_TABELA | Entidade responsável por relacionar as dependências entre as regras e as tabelas |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente a manipulação do banco de dados.

| Entidade | Descrição |
| --- | --- |
| FR_COMPILADOR | Entidade responsável pelo armazenamento das informações sobre os descritores de sintaxes |
| Relacionamentos: | |
| Entidades:     - FR_COMPILADOR_DATABASE vinculada ao campo CPL_DESCRITOR - FR_DATABASE vinculada ao campo DBA_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_COMPILADOR_DATABASE | Entidade responsável por armazenar as linguagens e sintaxes do gerador de códigos |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DEP_REGRA_FORMULARIO | Entidade responsável pelo armazenamento dos relacionamentos entre os componentes e formulários |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_ACPTIPO | Entidade responsável pelo armazenamento de informações referente ao evento do componente. |
| Relacionamentos: | |
| Entidades:     - FR_ACAO_PARAMETRO vinculada ao campo ACT_CODIGO. | |

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
| FR_CONFIGURACAO | Entidade responsável pelo armazenamento das configurações dos sistemas da base |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_IMAGEM | Entidade responsável por armazenar as imagens da  galeria. |
| Relacionamentos: | |
| Entidade:     - FR_SISTEMA vinculada ao campo IMG_CODIGO. | |

| Entidade | Descrição |
| --- | --- |
| FR_MENU | Entidade responsável por armazenar as informações sobre o menu principal do sistema. |
| Relacionamentos: | |
| Entidade:     - FR_MENU vinculada aos campos SIS_CODIGO, MNU_CODIGO e MNU_INDICE | |

| Entidade | Descrição |
| --- | --- |
| FR_IDIOMA | Entidade responsável por armazenar a relação dos idiomas que podem ser utilizador para tradução do sistema |
| Relacionamentos: | |
| Entidade:     - TRADUCAO_IDIOMA vinculada ao campo IDI_CAMPO | |

| Entidade | Descrição |
| --- | --- |
| FR_SISTEMA | Entidade responsável por armazenar as informações dos sistemas que pertencem a base de dados em uso |
| Relacionamentos: | |
| Entidade:     - FR_DOC_PRINCIPAL vinculada ao campo SIS_CODIGO - FR_FORMULARIO_SISTEMA vinculada ao campo SIS_CODIGO. - FR_HISTORICO_SQLl vinculada ao campo SIS_CODIGO - FR_MENU vinculada ao campo SIS_CODIGO - FR_TAREFA vinculada ao campo SIS_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_TABELA | Entidade responsável por armazenar o nome das tabelas do sistema. |
| Relacionamentos: | |
| Entidade:     - FR_CAMPO vinculada ao campo TAB_NOME | |

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
| FR_VERSAO | Entidade responsável por armazenar as versões de formulários, fluxos, relatórios e outros objetos que foram alterados. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_PARAMETRO | Entidade responsável por relacionar os eventos de formulários e componentes e regras correspondentes. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| fr_sistema_categoria | Entidade responsável por armazenar as categorias o qual os sistemas instalados na base dados estão relacionados. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_TIPODADO | Entidade responsável por armazenar as mascaras criadas para a opção tipo de dados. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_LOG_EVENT | Entidade responsável por armazenar todo o log referente a eventos do sistema. Ex: Inclusão, alteração e etc |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente a documentação automática.

| Entidade | Descrição |
| --- | --- |
| FR_DOC_BENEFICIO | Entidade responsável por armazenar informações sobre os atores do sistema para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_CASO_USO | Entidade responsável por armazenar informações sobre os atores do sistema para documentação automática |
| Relacionamentos: | |
| Entidade:     - FR_DOC_CASO_USO_EXTENSAO vinculada aos campos DOC_CODIGO e USO_CODIGO. - FR_DOC_CASO_USO_GENERALIZACAO vinculada ao campo USO_CODIGO_HERDADO - FR_DOC_CASO_USO_INCLUSAO vinculada ao campo vinculada aos campos DOC_CODIGO e USO_CODIGO_PRINCIPAL | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_ATOR | Entidade responsável pela documentação automática, guarda as informaçoes sobre os atores do sistema. |
| Relacionamentos: | |
| Entidade:     - FR_DOC_CASO_USO_ATORr vinculada aos campos ATO_CODIGO_ATIVO e DOC_CODIGO - FR_DOC_HIPOTESE_TRABALHO vinculada aos campos ATO_CODIGO_ATIVO e DOC_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_CASO_USO_EXTENSAO | Entidade responsável por relacionar os casos de uso a atores para documentção automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_CASO_USO_GENERALIZACAO | Entidade responsável pela documentação automática, guarda as informações sobre as generalizações do caso de uso do sistema. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_CASO_USO_INCLUSAO | Entidade responsável por armazenar informações sobre inclusões do caso de uso do sistema para a documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_DIAG_CONT_CAS_USO_ATO | Entidade responsável por armazenar informações sobre os atores do sistema para a documentação automática. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_DIAGRAMA_CONTEXTO | Entidade responsável por armazenar informações sobre os diagramaas de conexto para documentação automática. |
| Relacionamentos: | |
| Entidade:     - FR_DOC_DIAG_CONT_CAS_USO_ATO vinculada ao campo CON_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_FORMULARIO | Entidade responsável pela documentação automática, guarda as informaçoes sobre as observações dos formulários |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_FORMULARIO_COMANDO_VI | Entidade responsável por armazenar informações sobre os comandos dos formulários para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_FORMULARIO_IMAGEM | Entidade responsável por armazenar as imagenos dos formulários para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_HIPOTESE_TRABALHO |  |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_INTERFACE | Entidade responsável pela documentação automática, guarda as informações sobre as interfaces necessárias para a utilização do sistema. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_INTERPRETACAO_CAMPO |  |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_INTERPRETACAO_CAMPO |  |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_LIMITE | Entidade responsável por armazenar informações sobre os limites do sistema para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_MATERIAL_REFERENCIA | Entidade responsável por armazenar informações sobre os materias de referências para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_MODO_OPERACAO | Entidade responsável por armazenar informações sobre os modos de operação para a construção do sistema |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_PRINCIPAL | Entidade responsável por armazenar informações sobre os dados gerais da documentação do sistema para documentação automática. |
| Relacionamentos: | |
| Entidade:     - FR_COD_APROVACAO vinculada ao campo DOC_CODIGO. - FR_DOC_ATOR vinculada ao campo DOC_CODIGO - FR_DOC_BENEFICIO vinculada ao campo DOC_CODIGO - FR_DOC_CASO_USO vinculado ao campo DOC_CODIGO - FR_DIAGRAMA_CONTEXTO - FR_DOC_FORMULARIO vinculada ao campo DOC_CODIGO - FR_DOC_FORMULARIO_IMAGEM vinculada ao campo DOC_CODIGO - FR_COD_INTERFACE vinculada ao campo DOC_CODIGO - FR_DOC_INTERPRETACAO_CAMPO vinculada ao campo DOC_CODIGO - FR_DOC_LIMITE vinculada ao campo DOC_CODIGO - FR_DOC_MATERIAL_REFERENCIA vinculada ao campo DOC_CODIGO - FR_DOC_MODO_OPERACAO vinculada ao campo DOC_CODIGO - FR_DOC_REGRAS_IMAGEM vinculada ao campo DOC_CODIGO - FR_DOC_RELATORIO vinculada ao campo DOC_CODIGO - FR_DOC_REQUISITO vinculada ao campo DOC_CODIGO - FR_DOC_RESTRICAO vinculada ao campo DOC_CODIGO - FR_DOC_VERSAO vinculada ao campo DOC_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_REGRAS_IMAGEM | Entidade responsável por armazenar imagens dos fluxos para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_RELATORIO | Entidade responsável por armazenar informações sobre os relatórios do sistema para documentação automática |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_REQUISITO | Entidade responsável por armazenar informações sobre os requisitos do sistema para documentação automática. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_RESTRICAO | Entidade responsável por armazenar informações sobre as restrições do sistema para documentação automática. |
| Relacionamentos: | |
| Não possui | |

| Entidade | Descrição |
| --- | --- |
| FR_DOC_VERSAO | Entidade responsável por armazenar informações sobre a versão do sistema para documentação automática. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente as traduções do sistema.

| Entidade | Descrição |
| --- | --- |
| FR_TRADUCAO | Entidade responsável por armazenar a referência para as frases. |
| Relacionamentos: | |
| Entidade:     - FR_TRADUCAO_IDIOMA vinculada ao campo TRA_CODIGO | |

| Entidade | Descrição |
| --- | --- |
| FR_TRADUCAO_IDIOMA | Entidade por armazenar a tradução das frases, da tabela fr_traducao. |
| Relacionamentos: | |
| Não possui | |

- Tabelas referente aos relatórios do sistema.

| Entidade | Descrição |
| --- | --- |
| FR_RELATORIO_CATEGORIA | Entidade reponsável por armzenar a categoria dos relatórios |
| Relacionamentos: | |
| Não possui | |

Observações:

- A tabela FR_DIAGRAMA foi descontinuada.
- As tabelas FR_OPERADOR e FR_OPERANDO só serão utilizadas, caso o usuário selecione a opção Suporte aos recursos do Maker 1.x na tela de configurações.
