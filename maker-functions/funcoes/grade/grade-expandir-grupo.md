---
title: "Grade - Expandir Grupo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Expande um grupo passado como parâmetro.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Nome do Grupo ou Objeto do Grupo. (Letras) (Ver Observação 1)

## Retorno

Não possui.

## Observações

1. Pode ser passado tanto o nome referente ao grupo, quanto o próprio Objeto do grupo, obtido através de regras de negócio.
2. Expande apenas grupos presentes da raiz, ou seja, subgrupos não são expandidos.

## Exemplo

Imagine uma árvore seguindo o princípio de pai (grupo) e filho (subgrupo) da seguinte forma:
&#123;
"grupo1": &#123;
"subgrupo1": "valor1"
&#125;,
"grupo2": &#123;
"subgrupo2": "valor2"
&#125;
&#125;
Apenas os grupos "grupo1" e "grupo2" podem ser expandidos (abertos).
