---
title: "Grade - Obter Grupo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Obtém o grupo referente ao nome passado por parâmetro.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Nome do Grupo. (Letras)

## Retorno

Retorna o objeto do grupo. (Variante)

## Observações

1. O retorno dessa função não suporta a conversão para letras.
2. Obtém apenas grupos contidos na raiz, ou seja, subgrupos não são obtidos.

## Exemplo

1. Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma:
&#123;
"grupo1": &#123;
"subgrupo1": "valor1"
&#125;,
"grupo2": &#123;
"subgrupo2": "valor2"
&#125;
&#125;
Apenas os grupos "grupo1" e "grupo2" poder ser obtidos.
