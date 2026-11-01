---
title: "Grade - Obter Linha Selecionada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna o número da linha selecionada na grade.

Parâmetro:
1. Nome da Grade. (Componente)

## Retorno

Retorna o número da linha selecionada. (Inteiro)

## Observações

1. A numeração das colunas começam de 0 à N.
2. Caso nenhuma linha esteja selecionada, será retornado o valor -1.
3. Caso a paginação esteja ativa, será retornado o número da linha da paginação ativa.

## Exemplo

Assumindo que o nome da grade é "Sistemas". Passando esse parâmetro, ao selecionar alguma linha da Grade
"Sistemas", o retorno será o número da linha selecionada.
