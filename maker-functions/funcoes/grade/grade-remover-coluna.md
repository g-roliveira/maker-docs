---
title: "Grade - Remover Coluna"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função remove uma coluna da Grade.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Nome da Coluna. (Letras)

## Retorno

Não possui.

## Observação

Caso esta função seja utilizada em um formulário que possua barra de navegação, será necessário utiliza-la no evento
"Ao Navegar" do formulário, pois ao navegar a coluna que foi removida, será exibida novamente.

## Exemplo

Assumindo que o nome da grade sendo "Estado" e o nome da coluna sendo "UF". Ao chamar esta função a coluna "UF"
será removida da grade "Estado".
