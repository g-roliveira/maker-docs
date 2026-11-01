---
title: "Abrir Consulta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Executa um comando de Seleção [SELECT] no Banco de Dados.

## Parâmetro(s)

1. Comando de Seleção ou Wizard. (SQL Consulta)
2. Conexão com o banco de dados. (Variante, Opcional) (Ver observação 6)

## Retorno

Retorna uma Consulta. (Tabela)

## Observações

1. A partir da versão 1.0.0.1 a função passa a validar se a consulta passada por parâmetro contém apenas a instrução SELECT.
2. Essa função é usada para fazer um SELECT (seleção) no banco de dados desejado. Utilize a função: "tabela para Lista" para visualizar todo o conteúdo do retorno.
3. Caso seja necessário executar a consulta em um outro banco de dados, é necessário passar a conexão no 2° Parâmetro.
4. Para criar essa conexão consulte a ajuda sobre a função "Abrir Conexão MSSQL" , "Abrir Conexão Firebird" ou qualquer outro banco.
5. Esta função não suporta :: para conversão de dados.
6. Se passado nulo, a função assume que a consulta será feita na conexão principal.

## Exemplo

Assumindo como 1º Parâmetro: Select fr_acao.aco_codigo, fr_acao.aco_nome From fr_acao e 2º Parâmetro (conexão) - sendo opcional.
o resultado será um resultset de uma tabela.
