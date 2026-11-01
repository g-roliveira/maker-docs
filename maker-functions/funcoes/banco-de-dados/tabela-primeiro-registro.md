---
title: "Tabela - Primeiro Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para mover a posição corrente da tabela passada por parâmetro para a primeira posição (primeiro registro).
Vide descrição das funções "Abrir Consulta" e "Existem Registros".

## Parâmetro(s)

1. Consulta navegável. (Tabela)

## Retorno

Não possui.

## Observação

A tabela que esta função recebe por parâmetro também pode ser obtida com a função
"Obter Tabela do Formulário" da categoria Formulário. Função muito usada quando deseja voltar ao primeiro registro depois de percorrer uma tabela.

## Exemplo

Define uma consulta usando a função "Abrir consulta navegável", atribua a consulta a uma variável do tipo tabela e use a função "Primeiro registro" no objeto decisão do fluxograma,
retornando em "sim" o primeiro registro da tabela e "não" uma mensagem de erro.
