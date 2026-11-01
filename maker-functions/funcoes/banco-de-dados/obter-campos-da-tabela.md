---
title: "Obter Campos da Tabela"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para obter em uma lista (variante) com os nomes de todos os campos da tabela passada como parâmetro. Para obter o nome do campo da lista deve usar a função "Obter Objeto numa Lista".
Vide descrição da função "Obter Objeto numa Lista".

Parâmetro:
1. Consulta. (Tabela)

## Retorno

Retorna uma lista com o nome dos campos da tabela passada como parâmetro. (Variante)

## Observação

A lista de retorno é iniciada a partir da posição 0 (zero).

## Exemplo

Defina uma consulta com a função "Abrir consulta", usando o Wizard SQL, inseria acima a função "obter Campos da tabela" e clique no botão salvar. Atribua seu retorno a uma variável do tipo variante e observe que a variável escolhida receberá o retorno da função.
