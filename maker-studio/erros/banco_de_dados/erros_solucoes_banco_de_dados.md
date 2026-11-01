---
title: "Erros & Soluções - Banco de dados"
source_url: "https://suporte.softwell.com.br/Manual/MakerStudio/erros/banco_de_dados/erros_solucoes_banco_de_dados.htm"
---

A Softwell Solutions busca através deste guia, apresentar ao usuário uma lista de erros mais comuns no Banco de dados e sua solução. Este tópico estará em constante atualização.

- [Lost connection to MYSQL server during query socket error on write. WSAGetLastError return 1004($2746)](#Lost)
- [O assistente não conseguiu criar o novo banco de dados.](#Dados)
- [Ao processar a consulta! Observe se todos os filtros foram passados com valores corretos!](#Processar)
- [No Suitable Driver](#Suitable)
- [Operator does not exist: integer = character varying.](#Operator)

## Lost connection to MYSQL server during query socket error on write. WSAGetLastError return 1004($2746)

![image1769.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco1.png)

Para corrigir, defina um novo tamanho máximo para pacotes de dados no servidor através das seguintes opções:

Primeira opção - por meio da linha de comando de inicialização do servidor:

shell&gt;mysql--max_allowed_packed=16M

Segunda opção - por meio da adição de um parâmetro no INI de configuração do servidor:

[mysqld]

max_allowed_packet=16M

ou

[mysqld]

set-variable = max_allowed_packet=10240000

## O assistente não conseguiu criar o novo banco de dados

![image1811.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco2.png)

Causa: Ocorre porque o Charset Latin1 não está disponível nesta versão do Postgres.

Solução: Ir até Configurações Avançadas e modificar o parâmetro CharSet de Latin1 para Win1252.

## Ao processar a consulta! Observe se todos os filtros foram passados com valores corretos!

Quando aparecer a mensagem:

![image1772.jpg](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco3.png)

Ocorrida na aba "Localizar" do formulário, significa que o charset usado não é compatível com o SGBD.
Para evitar o erro, utilize o charset compatível com o SGBD. Clique aqui para visualizar os tipos de charset suportado pelos SGBD´s.

Para casos com o DB2 9.5 os seguintes ajustes devem ser feitos:

- **No databases.xml**, que por padrão fica no diretório: **C:\Program Files (x86)\Softwell Solutions\Maker Studio\Webrun Studio\config** utilizado, localize o grupo DB2 e em seguida localize o parâmetro AppendSQL4MetaData Substitua o valor da chave item-param de FETCH FIRST 1 ROWS ONLY para ) FETCH FIRST 1 ROWS ONLY.
- Insira os seguintes itens:

&lt;item&gt;
      &lt;item-name&gt;InsertOnStarSQL4MetaData&lt;/item-name&gt;
      &lt;item-param&gt;SELECT * FROM (&lt;/item-param&gt;
&lt;/item&gt;

&lt;item&gt;
      &lt;item-name&gt;ConcatOperator&lt;/item-name&gt;
      &lt;item-param&gt;||&lt;/item-param&gt;
&lt;/item&gt;

&lt;item&gt;
      &lt;item-name&gt;CaseSensitive&lt;/item-name&gt;
      &lt;item-param&gt;1&lt;/item-param&gt;
&lt;/item&gt;

- Salvar o databases.xml e reiniciar o Webrun.

Para casos com Postgres UTF8, remover o to_ascii do parâmetro UpperFunctionStart no grupo PostgreSQL e o parênteses ")" do parâmetro UpperFunctionEnd. Após remoção, os parâmetros devem ficar conforme o modelo abaixo:

&lt;item&gt;
      &lt;item-name&gt;UpperFunctionStart&lt;/item-param&gt;
      &lt;item-param&gt;UPPER(&lt;/item-param&gt;
&lt;/item&gt;

&lt;item&gt;
      &lt;item-name&gt;UpperFunctionEnd&lt;/item-name&gt;
      &lt;item-param&gt;)&lt;/item-param&gt;
&lt;/item&gt;

Para ambos os casos, é necessário reiniciar o Webrun após salvar o databases.xml

Observações:

- Este problema também ocorre quando um UNION estiver associado a um formulário.
- Ao ser removido o to_ascii é necessário alterar o seguinte parâmetro:

Antes:

&lt;item&gt;
      &lt;item-name&gt;removeNonAsciiCharsOnTextSearch&lt;/item-name&gt;
      &lt;item-param&gt;1&lt;/item-param&gt;
&lt;/item&gt;

Depois:

&lt;item&gt;
      &lt;item-name&gt;removeNonAsciiCharsOnTextSearch&lt;/item-name&gt;
      &lt;item-name&gt;0&lt;/item-param&gt;
&lt;/item&gt;

## No Suitable Driver

Causa: A mensagem de erro *No Suitable Driver* é apresentada ao tentar acessar no Webrun um projeto criado sobre o banco de dados *Postgres*. O erro é apresentado nas versões anteriores do **Webrun 3**, ao tentar acessar os projetos de exemplos que acompanham o "**Instalador do Maker**" ou um novo projeto no Webrun.

Solução: Para a correção do erro, acesse a tela Configurações do Sistema no Webrun. No campo Servidor, informe o IP ou o nome do computador no qual está o banco de dados e, no campo Banco, informe o nome do banco de dados. Em seguida, clique no botão ![image1915.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1915.gif) e na sequência, clique em ![image1916.gif](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/image1916.gif).

## Operator does not exist: integer = character varying

Ao exportar um banco criado no postgres 8.x para a versão 9, poderá apresentar erro de operador de comparação de inteiro com string(varchar), isso ocorre pois as versões do postgres a partir da 8.3 não fazem conversões Implícitas de valores.

Executando o script abaixo é possível fazer com que haja uma conversão de tipos, forçando um CAST que converte o valor de um tipo de dado para outro.

Para executar o script, siga os seguintes passos

### Maker

No projeto selecionado, abra o menu Utilitários, selecione a opção Executor de Scripts SQL... e insira o script abaixo:

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco4.png)

![](https://suporte.softwell.com.br/Manual/MakerStudio/imagens/banco5.png)

Script:

CREATE OR REPLACE FUNCTION public.int_equal_string(i integer, s character varying)
RETURNS boolean AS
'select cast($1 as varchar(20)) = $2'
LANGUAGE 'sql' VOLATILE
COST 100;

CREATE OPERATOR public.=(
PROCEDURE = "int_equal_string",
LEFTARG = int4,
RIGHTARG = varchar);

---
CREATE OR REPLACE FUNCTION public.bigint_equal_string(i bigint, s character varying)
RETURNS boolean AS
'select cast($1 as varchar(20)) = $2'
LANGUAGE 'sql' VOLATILE
COST 100;

CREATE OPERATOR public.=(
PROCEDURE = "bigint_equal_string",
LEFTARG = bigint,
RIGHTARG = varchar);

Informado o script , execute-o, salve o projeto e observe que os problemas de conversões de tipos será solucionado.

Observação: caso o erro de conversão do volte a ocorrer recomendamos utilizar a solução que consta na documentação do PostgreSQL.
