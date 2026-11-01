---
title: "Editando o Tipo de Select da consulta"
source_url: "https://suporte.softwell.com.br/Manual/Maker2_6/maker_2/formulario/assistente_sql/editando_o_tipo_de_select_da_consulta.htm"
---

Esta configuração disponibiliza recursos específicos de cada banco de dados no que tange ao aspecto da criação das consultas. Há como delimitar a quantidade de registros retornados pela consulta, dentre outras possibilidades que serão descritas nos tópicos abaixo.

Na janela do Assistente SQL, clique na área da aba Main e selecione Edit...:

![image1214.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image1214.jpg)

As configurações da tela Query Properties dependem do Tipo de Banco de Dados que esteja sendo utilizando.

São características do banco de dados:

Postgresql 8.2.5

- Select Type

![query properties](https://suporte.softwell.com.br/Manual/Maker2_6/image843.jpg)

- Default - o select funciona como o ALL. Retorna todas as linhas da consulta em questão, respeitando a cláusula Where.
- Distinct - o select retorna apenas as linhas não repetidas.
- All - o select retorna todas as linhas da consulta em questão, respeitando a cláusula Where.

- Limit - limita a quantidade de registros que retornarão após a execução da consulta (ordem em que estão gravados ou indexados na tabela).

- Offset - definida a quantidade no campo Limit, pode-se determinar também a partir de que índice (próximo índice) a consulta retornará os registros.

MySQL 5.0

- Aba General

![image840.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image840.jpg)

- High_Priority - efetua o select com alta prioridade, eliminando qualquer outra consulta/update em andamento para retornar o select feito;
- Straight_Join - força o otimizador para entrar na tabela na ordem em que foi listado na cláusula FROM'.
- Sql_Big_Result - pode ser usado com a cláusula group by ou distinct e informa ao otimizador que o resultado possui bastante registros, deixando o MySQL preparado para redirecionar os dados às tabelas temporárias, se for preciso.
- Sql_Buffer_Result - força o resultado a ser colocado em uma tabela temporária.
- Sql_Small_Result - pode ser usado com a cláusula group by ou distinct e informa ao otimizador que o resultado é pequeno. Neste, caso o MySQL utiliza tabelas temporárias rápidas para armazenar o resultado.
- Sql_Calc_Found_Rows - informa ao MySQL para calcular quantos registros terão no resultado, desconsiderando qualquer cláusula Limit.
- Cache Option:
- - Sql_Cache - informa ao MySQL para armazenar o resultado no cache.
  - Sql_No_Cache - informa ao MySQL para não armazenar o resultado no cache, utilizando, assim, tabelas temporárias.
  - Group By:
  - - With Rollup;

  Especifica que, em uma adição às linhas comuns fornecidas por GROUP BY, linhas de resumo são introduzidas no conjunto de resultados.

  São resumidos grupos em uma ordem hierárquica, do nível mais baixo no grupo para o mais alto.

  A hierarquia de grupo é determinada pela ordem na qual as colunas de agrupamento são especificadas. A alteração da ordem das colunas de agrupamento pode afetar o número de linhas produzido no conjunto de resultados.
- Aba Into Clause
- ![image841.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image841.jpg)

  - Into:
  - - campo para informar o nome do arquivo .dat de configurtação;
    - agrupamento Dumpfile - um arquivo pode ser utilizado como parâmetro para uma consulta;
    - agrupamento Outfile - o resultado de uma consulta pode ser colocado em um arquivo definido;
    - Fields:
    - Terminated by - adiciona uma string ao final de um campo;
    - Enclosed By Optionally - adiciona uma string antes e depois do campo;
    - Escaped By - utilizado para inserção de caracteres de escape.
- Lines:
- - Starting By - adiciona uma string no início de uma linha;
  - Terminated by - adiciona uma string ao final de uma linha.
  - Aba Limit & Lock

  ![image842.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image842.jpg)

  - Limit - limita a quantidade de registros que retornarão após a execução da consulta (ordem em que estão gravados ou indexados na tabela);
  - Offset - definida a quantidade no campo Limit, pode-se determinar também a partir de que índice (próximo índice) a consulta retornará os registros.

  SQL Server 2000/2005

  ![image844.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image844.jpg)
- Select
- - Default - o select funciona como o ALL. Retorna todas as linhas do select em questão, respeitando a cláusula Where.
  - Distinct - o select retorna apenas as linhas  não repetidas.
  - All - o select retorna todas as linhas da consulta em questão, respeitando a cláusula Where.
- Top
- - Percent - indica que a consulta retorna apenas os primeiros percentuais de linhas expression do conjunto de resultados;
  - With Ties - especifica que linhas adicionais são retornadas do conjunto de resultados base com o mesmo valor das colunas que aparecem na última das TOP n linhas (PERCENT). TOP... WITH TIES só pode ser especificado em instruções SELECT, e apenas se uma cláusula ORDER BY for especificada.
- Into - cria uma tabela nova e nela insere as linhas resultantes da consulta. No campo abaixo deste check, deve ser informado o nome da tabela.
- Group By
- - All:
  - - none;
    - With Cube.

  Especifica que, em uma adição às linhas comuns fornecidas por GROUP BY, linhas de resumo são introduzidas no conjunto de resultados.

  Uma linha de resumo GROUP BY é retornada para cada combinação possível de grupo e subgrupo no conjunto de resultados.

  Use a função GROUPING que serve para determinar se valores nulos no conjunto de resultados são valores resumidos GROUP BYs.

  - With Rollup:

  Especifica que, em uma adição às linhas comuns fornecidas por GROUP BY, linhas de resumo são introduzidas no conjunto de resultados.

  São resumidos grupos em uma ordem hierárquica, do nível mais baixo no grupo para o mais alto.

  A hierarquia de grupo é determinada pela ordem na qual as colunas de agrupamento são especificadas. A alteração da ordem das colunas de agrupamento pode afetar o número de linhas produzido no conjunto de resultados.

  Firebird 2.0

  ![image846.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image846.jpg)
- Select Type
- - Default - o select funciona como o ALL. Retorna todas as linhas do select em questão, respeitando a cláusula Where.
  - Distinct - o select retorna apenas as linhas  não repetidas.
  - All - o select retorna todas as linhas da consulta em questão, respeitando a cláusula Where.
- First - limita a quantidade de registros que retornarão após a execução da consulta (ordem em que estão gravados ou indexados na tabela);
- Skip - definida a quantidade no campo Limit, pode-se estabelecer também a partir de que índice (próximo índice) a consulta retornará os registros.
- Oracle 10G XE e 9i

  ![image845.jpg](https://suporte.softwell.com.br/Manual/Maker2_6/image845.jpg)
- Select
- - Default - o select funciona como o ALL. Retorna todas as linhas da consulta em questão, respeitando a cláusula Where.
  - Distinct - o select retorna apenas as linhas  não repetidas.
  - All - o select retorna todas as linhas da consulta em questão, respeitando a cláusula Where.
  - Unique - Funciona da mesma forma que o Distinct.

  Comum para todos os bancos de dados:
- Botão OK - todas as configurações feitas na tela desde a última vez em que ela foi aberta serão confirmadas e gravadas;
- Botão Cancelar - todas as configurações feitas na tela desde a última vez em que ela foi aberta serão desconsideradas.
- Editando o tipo de select da consulta - Esse exemplo demonstra como editar o Select de uma consulta SQL.
