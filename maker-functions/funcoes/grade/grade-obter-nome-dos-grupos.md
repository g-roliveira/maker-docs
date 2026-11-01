---
title: "Grade - Obter Nome dos Grupos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Obtém os grupos que estão visíveis na grade.

Parâmetro:
1. Nome da Grade. (Componente)

## Retorno

Retorna uma lista contendo o nome de todos os grupos visíveis na grade. (Variante)

## Observação

Obtém apenas os nomes dos grupos da raiz, ou seja, subgrupos não são obtidos.

## Exemplo

Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma:
&#123;
"grupo1": &#123;
"subgrupo1": "valor1"
&#125;,
"grupo2": &#123;
"subgrupo2": "valor2"
&#125;
&#125;
Apenas os valores "grupo1" e "grupo2" vão ser retornados.
