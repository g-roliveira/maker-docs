---
title: "Importando dados de arquivos *.DBF"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_7/dicas_e_truques/maker/importando_dados_de_arquivos_dbf.htm"
---

Para fazer a importação de dados de arquivos com a extensão *.DBF, é necessário criar [uma conexão ODBC](../banco_de_dados/configurando_uma_fonte_de_dados_odbc), no padrão Fonte de dados de Sistema (não usar a opção Usuário), apontando para o arquivo que será importado.

Após a criação das Conexões ODBC, crie, no seu banco, uma tabela com a mesma estrutura do arquivo que será importado.

Para este exemplo, utilizaremos duas tabelas:

Primeira Tabela:

/* CADASTRO DE ALUNOS */

CREATE TABLE [dbo].[ALUNOS] (

[MATRICULA] [nvarchar] (6) COLLATE Latin1_General_CI_AS NULL ,

[NOME] [nvarchar] (40) COLLATE Latin1_General_CI_AS NULL ,

[GRAU] [nvarchar] (1) COLLATE Latin1_General_CI_AS NULL ,

[SERIE] [nvarchar] (1) COLLATE Latin1_General_CI_AS NULL ,

[TURNO] [nvarchar] (1) COLLATE Latin1_General_CI_AS NULL ,

[TURMA] [nvarchar] (1) COLLATE Latin1_General_CI_AS NULL ,

[DT_MATR] [smalldatetime] NULL

) ON [PRIMARY]

GO

Segunda Tabela:

/* CADASTRO DE NOTAS */

CREATE TABLE [dbo].[NOTAS] (

[MATRICULA] [nvarchar] (6) COLLATE Latin1_General_CI_AS NULL ,

[NOTA1] [decimal](18, 0) NULL ,

[NOTA2] [decimal](18, 0) NULL ,

[NOTA3] [decimal](18, 0) NULL ,

[NOTA4] [decimal](18, 0) NULL

) ON [PRIMARY]

GO

Observação: A criação das tabelas acima servirão como destino dos dados vindo de um arquivo DBF (Origem. É necessário que os campos das tabelas criadas possuam as mesmas características do arquivo DBF).

Utilizando o Assistente de criação de formulários, defina o nome para o formulário e não defina Fonte de Dados. Utilize o componente Botão:

![image619.jpg](../../image619.jpg)

Crie um fluxo para importar os dados do arquivo:

1. Pela tela Identificadores (variáveis), crie duas variáveis do tipo Tabela:

![image620.jpg](../../image620.jpg)

2. Salve o fluxo para o Destino Servidor.

O fluxo ficará da seguinte forma:

![image621.jpg](../../image621.jpg)

3. Coloque um ![image622.jpg](../../image622.jpg) para fazer a Conexão ODBC. Utilize as funções Abrir Consulta Dinâmica e Abrir Conexão ODBC:

![image623.jpg](../../image623.jpg)

Observações:

1. No primeiro parâmetro (select matricula, nome,...) da função Abrir Consulta Dinâmica, os campos devem estar na mesma ordem do arquivo DBF. Neste exemplo, a conexão é na tabela Aluno.
2. No segundo parâmetro (Aluno) da função Abrir Conexão ODBC, é o nome dado ao Nome da Fonte de Dados durante a configuração ODBC.

4. Coloque um componente ![image624.jpg](../../image624.jpg) para verificar se existem registros na tabela:

![image747.gif](../../image747.gif)

5. Coloque um componente ![image625.jpg](../../image625.jpg) para fazer inserção dos dados no banco. Utilize a função Executar Atualização. No primeiro parâmetro (SQL Atualização), defina Tipo do SQL e selecione Inserção na tela Propriedade:

![image626.jpg](../../image626.jpg)

6. Em seguida, clique no botão ![image748.gif](../../image748.gif)  e na tela Construtor SQL: Inserção, escolha a tabela que você criou no seu banco e selecione os campos correspondentes:

![image627.jpg](../../image627.jpg)

Observação: Para cada campo selecionado, no Montador de Expressão, use as funções: Remover Espaços, Para Letras e Campo.

Exemplo:

Campo Matrícula:

![image628.jpg](../../image628.jpg)

Observação: Na função Campo, no segundo parâmetro, na tela Propriedade, é necessário clicar em Tipo: Letras e escrever o nome do campo da mesma forma que está na tabela.

7. Coloque um componente ![image625.jpg](../../image625.jpg) para o próximo registro. Utilize a função Próximo Registro:

![image749.gif](../../image749.gif)

8. Coloque um ![image625.jpg](../../image625.jpg) para fazer a Conexão ODBC. Utilize as funções Abrir Consulta Dinâmica e Abrir Conexão ODBC:

![image629.jpg](../../image629.jpg)

Observações:

1. No primeiro parâmetro (select matricula, materia,...) da função Abrir Consulta Dinâmica, os campos devem estar na mesma ordem do arquivo DBF. Neste exemplo, a conexão é na tabela Nota.
2. No segundo parâmetro (Notas) da função Abrir Conexão ODBC, é o nome dado ao Nome da Fonte de Dados durante a configuração ODBC.

9. Coloque um componente ![image630.jpg](../../image630.jpg) para verificar se existem registros na tabela:

![image750.gif](../../image750.gif)

10. Coloque um componente ![image625.jpg](../../image625.jpg) para fazer inserção dos dados no banco. Utilize a função Executar Atualização. No primeiro parâmetro (SQL Atualização), defina Tipo do SQL selecione Inserção na tela Propriedade:

![image631.jpg](../../image631.jpg)

11. Em seguida, clique no botão ![image751.gif](../../image751.gif) e, na tela Construtor SQL: Inserção, escolha a tabela que você criou no seu banco e selecione os campos correspondentes:

![image632.jpg](../../image632.jpg)

Observação: Para cada campo selecionado, no Montador de Expressão, use as funções: Remover Espaços, Para Letras e Campo.

Exemplo:

Campo Matéria:

![image633.jpg](../../image633.jpg)

Observação: Na função Campo, no segundo parâmetro, na tela Propriedade, é necessário clicar em Tipo: Letras e escrever o nome do campo da mesma forma que está na tabela.
