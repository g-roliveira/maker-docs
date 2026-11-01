---
title: "Apagar Registros Tabela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função recebe como parâmetro o nome de uma tabela, e executa o comando [DELETE FROM] e apagando assim todos os registros da mesma.
Nessa função é possível acrescentar mais parâmetros, ou seja, passar mais tabelas para a exclusão do seu conteúdo.

Parâmetro:
1. Nome da Tabela. (N' Letras)

## Retorno

Não Possui.

## Observações

1. Essa função é usada para apagar todos os registros das tabelas passadas por parâmetro.
2. A função pode receber vários parâmetros. (Tabelas)

## Exemplo

Assumindo como 1° Parâmetro: NOME_TABELA e 2° Parâmetro: NOME_TABELA_2L
