---
title: "Grade - Criar Dependência entre Grades"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Cria relação de dependência entre duas grades.

## Parâmetro(s)

1. Grade Pai. (Componente)
2. Grade Filha. (Componente)
3. Filtro de ligação. (Letras)

## Retorno

Não possui.

## Observação

No terceiro parâmetro o formato do filtro é:
&lt;Tabela da Grid Filha&gt;.&lt;Campo 1 da Grid Filha&gt;=&lt;Campo da Grid Master&gt;
[;&lt;Tabela da Grid Filha&gt;.&lt;Campo 2 da Grid Filha&gt;=&lt;Campo da Grid Master&gt;[;&lt;Tabela da Grid Filha&gt;.
&lt;Campo N da Grid Filha&gt;=&lt;Campo da Grid Master&gt;]].

## Exemplo

1. TB_FILHA.CAMPO_FILHA=CAMPO_MASTER
2. TB_CIDADE.COD_PAIS=COD_PAIS
3. TB_CIDADE.COD_PAIS=COD_PAIS;TB_CIDADE.COD_CIDADE=COD_CIDADE
