---
title: "PostgreSQL 8.2.5/8.3/8.4/9.0/9.1"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/recursos_avancados/suporte_banco_de_dados/postgresql.htm"
---

# PostgreSQL PostgreSQL 8.2.5/8.3/8.4/9.0/9.1

- Acesso aos SCHEMA "information_schema".
- Suporte PLPGSQL no Banco de dados (o Maker tentará registrar esta linguagem durante a inicialização do Banco de Dados).
- Será criada uma Trigger Function em fr_sessao_hora() como trigger de fr_sessao.

## Schemas do PostgreSQL PostgreSQL 8.2.5/8.3/8.4/9.0/9.1

Por padrão, o Maker sempre cria as tabelas FR_* no Schema Public, mas é possível trabalhar com tabelas criadas em outros schemas na mesma base de dados. Também é possível criar as tabelas FR_* em um schema diferente do Public. Para isso, no momento de criar um novo projeto, é só clicar em Configurações Avançadas e, na propriedade RoleName, escolher em qual schema serão criadas as tabelas FR_*. Isso só funciona caso a base de dados já tenha sido criada e o schema selecionado também já esteja criado. O Maker não cria um novo schema, e caso o banco ainda não tenha sido criado, as tabelas FR_* seguirá em Public.

Quando for executar script de criação de tabelas, é necessário colocar o nome do schema antes da tabela.

Exemplo:

create table schema.pessoa

(

cod_pessoa Integer NOT NULL,

pes_nome char(20),

primary key ("cod_pessoa")

);

Para usar as tabelas de outros schemas além do Public, acesse a tela de Configurações (menu Projeto &gt; Configurações ou tecla F6) e, na propriedade RoleName, digite os nomes dos schemas separados por "," (vírgula). Para usar tabelas de todos os schemas presentes neste banco de dados, apenas deixe a propriedade RoleName em branco. Clique em OK nesta tela, salve o seu projeto, feche o Maker e abra novamente. Em Dicionário de Dados, clique no botão Sincronizar Dados para ter acesso às tabelas dos schemas selecionados.

Observações:

1. Ao utilizar Schemas no Maker, não é necessário a adição do nome do schema na frente da tabela.

Veja: [Versões Homologadas](../../Versoes%20Homologadas)
