---
title: "Abrir Conexão Definindo Porta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função abre uma conexão com um banco de dados informado por parâmetro na qual o usuário define a porta em que deseja abrir conexão,
uma vez a conexão aberta o usuário poderá executar comandos ou seleções no banco de dados.

## Parâmetros

1. Servidor de banco de dados (Observação 1)
2. Hostname
3. Nome do Banco
4. Usuário
5. Senha
6. Porta
7. Fechar automaticamente

## Retorno

Retorna a referência da conexão MSSQL (Variante).

## Exemplo

Assumindo como:
1º Parâmetro: POSTGRESQL
2° Parâmetro: 127.0.0.1
3° Parâmetro: bd_treinamento
4° Parâmetro: postgres
5° Parâmetro: softwell
6° Parâmetro: 5491
7° Parâmetro: true

O retorno será a referência para uma conexão, caso efetuada com sucesso.

## Observação

1. O primeiro parâmetro dessa função possui suporte para os seguintes valores:
1º DB2
2° FIREBIRD
3° MSSQL
4° MYSQL
5° ORACLE
6° POSTGRESQL
