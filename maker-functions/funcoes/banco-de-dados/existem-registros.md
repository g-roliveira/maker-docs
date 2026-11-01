---
title: "Existem Registros"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Essa função recebe como parâmetro uma consulta SQL que vai estar armazenada em uma variável tabela e verifica se existem registros na consulta, ou seja, se retorna algum resultado.
Essa função tem o retorno do tipo lógico. Caso haja algum resultado retornará então verdadeiro, caso contrário retornará falso.

Parâmetro:
1. Consulta SQL. (Tabela)

## Retorno

Retorna verdadeiro ou falso. (Lógico)

## Observação

Essa função é mais usada para decisões por ter um retorno Lógico.

## Exemplo

Assumindo como 1° Parâmetro a tabela o retorno será true (se houver registros) ou false (se não houver).
