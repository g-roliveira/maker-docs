---
title: "Tabela - Próximo Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para mover a posição corrente da tabela passada por parâmetro para a próxima posição. Vide descrição das funções "Abrir Consulta" e "Existem Registros".

## Parâmetro(s)

1. Consulta. (Tabela)

## Retorno

Não possui.

## Observação

Função muito usada quando deseja fazer loop com os registros de uma tabela (consulta), vinculado a uma condição com a função "Existem Registros".

## Exemplo

Define uma consulta usando a função (Abrir consulta navegável), atribua a consulta a uma variável do tipo tabela e use a função primeiro registro para ir ao primeiro registro.
