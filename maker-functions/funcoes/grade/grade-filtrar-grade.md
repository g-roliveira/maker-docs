---
title: "Grade - Filtrar Grade"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Filtra um componente grade de acordo com a condição passada.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Filtro de ligação. (Letras) (Ver observação 1)

## Retorno

Não possui.

## Observações

1. O segundo parâmetro deve estar no formato: &lt;Tabela da Grid&gt;.&lt;Campo 1 da Grid&gt;=&lt;Valor&gt;[;&lt;Tabela da Grid&gt;.&lt;Campo 2 da Grid &gt;=&lt;valor&gt;
[;&lt;Tabela da Grid&gt;.&lt;Campo N da Grid&gt;=&lt;valor&gt;]].
2. O único operador que pode ser utilizado como filtro é o operador "=" (igual).
3. Para utilizar tipos específicos de dados como data, o valor deve ser concatenado com algumas constantes.
Os tipos possíveis são: long, double, boolean, date, timestamp.

## Exemplos

1. TB_FILHA.CAMPO_FILHA=Teste
2. TB_CIDADE.COD_PAIS=55
3. TB_CIDADE.COD_PAIS=55;TB_CIDADE.COD_CIDADE=856
4. TABELA.CAMPO = 05/12/2009@date
