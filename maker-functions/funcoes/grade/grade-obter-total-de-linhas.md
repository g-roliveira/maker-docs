---
title: "Grade - Obter Total de Linhas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna o total de linha que existe na grade. Informando apenas a Grade.

Parâmetro:
1. Nome da Grade. (Componente)

## Retorno

Retorna o total de linha da Grade.(Inteiro)

## Observações

1. Caso a propriedade paginação esteja ativada é retornado o total de linhas da paginação em questão
2. Para retornar o total geral de linhas, desative a propriedade paginação.

## Exemplo

Assumindo que o nome da grade sendo "Usuários". Passando esse parâmetro, ao chamar a função, o retorno será o total de
linhas da Grade "Usuários".
