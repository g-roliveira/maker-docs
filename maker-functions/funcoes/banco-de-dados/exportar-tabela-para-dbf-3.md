---
title: "Exportar tabela para DBF 3"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Exporta uma tabela passada como parâmetro para um arquivo dBASE (O formato de arquivo do dBase, o DBF).

## Parâmetro(s)

1. Tabela.
2. Caminho do Arquivo de Destino. (Letras)

## Retorno

Não possui.

## Observação

No diretório passado no 2° parâmetro é criado dois arquivos com as extensões .DBF e .DBT. Ex. BANCO.DBF e BANCO.DBT.

## Exemplos

1. No 1º Parâmetro o retorno da função abrir Consulta.
2. Assumindo o uso da função Abrir Consulta, efetuando uma consulta na tabela "fr_acao", o seu retorno será atribuído a uma variável do tipo tabela,
esta variável do tipo tabela será usada como 1° parâmetro, e no 2° parâmetro o do arquivo C:/Banco.dbf
