---
title: "Schemas do PostgreSQL 8.2.5"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/configuracao_das_conexoes/schemas_do_postgresql.htm"
---

Por padrão, o Maker sempre cria as tabelas FR_* no Schema Public, mas é possível trabalhar com tabelas criadas em outros schemas na mesma base de dados. Também é possível criar as tabelas FR_* em um schema diferente do Public. Para isso, no momento de criar um novo projeto é só clicar em Configurações Avançadas e na propriedade RoleName escolher em qual schema serão criadas as tabelas FR_*. Isso só funciona caso a base de dados já tenha sido criada e o schema selecionado também já esteja criado. O Maker não cria um novo schema, e caso o banco ainda não tenha sido criado, as tabelas FR_* seguirá em Public.

Quando for executar script de criação de tabelas, é necessário colocar o nome do schema antes da tabela.

Exemplo:

create table schema.pessoa

(

cod_pessoa Integer NOT NULL,

pes_nome char(20),

primary key ("cod_pessoa")

);

Para usar as tabelas de outros schemas além do Public, acesse a tela de Configurações (menu Projeto &gt; Configurações ou tecla F6) e na propriedade RoleName digite os nomes dos schemas separados por "," (vírgula). Para usar tabelas de todos os schemas presentes neste banco de dados, apenas deixe a propriedade RoleName em branco. Clique em OK nesta tela, salve o seu projeto, feche o Maker e abra novamente. Em Dicionário de Dados, clique no botão Sincronizar Dados para ter acesso às tabelas dos schemas selecionados.
