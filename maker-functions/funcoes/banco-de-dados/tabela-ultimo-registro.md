---
title: "Tabela - Último Registro"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para mover a posição corrente da tabela passada como parâmetro para a última posição. Vide descrição das funções "Abrir Consulta" e "Existem Registros".

Parâmetro:
1. Consulta navegável. (Tabela)

## Retorno

Não possui.

## Observação

A tabela que esta função recebe por parâmetro deve ser obtida apenas com a função "Obter Tabela do Formulário" da categoria Formulário.

## Exemplo

Defina uma consulta usando a função "Abrir consulta navegável", atribua a consulta a uma variável do tipo tabela e use a função "Último registro" para passar para o último registro.
