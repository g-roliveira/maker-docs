---
title: "Executar Comandos SQL Sem Transação"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Servidor

## Descrição

Essa função executa um comando ou uma lista de comandos SQL no banco de dados que serão executados sem estar em uma transação.

## Parâmetro(s)

1. Comando ou lista de comandos SQL. (Variante)
2. Conexão com outro banco de dados. (Variante, Opcional)

## Retorno

Retorna NULO caso o comando SQL seja executado com sucesso. Caso haja algum erro, este será retornado. (Letras)

## Exemplo

Assumindo como Parâmetro 1° insert into empresa (codigo,descrição) values (1,"Softwell") o retorno será nulo caso o comando seja executado com sucesso ou letras caso haja algum erro.
