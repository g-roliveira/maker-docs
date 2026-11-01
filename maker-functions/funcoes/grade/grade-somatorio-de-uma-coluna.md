---
title: "Grade - Somatório de uma Coluna"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função obtém o somatório dos os valores de um determinado campo de uma coluna na grade.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Nome da Grade. (Componente)
3. Nome da Coluna. (Letras)

## Retorno

Somatório referente ao campo informado. (Número)

## Observações

1. Quando usada na camada cliente, retornará a soma dos valores de uma determinada coluna na grade.
1. 2. Quando estiver usando a "paginação" será retornado a soma dos valores da coluna e da página em questão/atual.
2. Na camada servidor o somatório dos valores da coluna é feita em todos os registros da grid (podendo estes estarem paginados ou não).
3. Essa função não pode ser utilizada em um fluxo servidor se for chamada a partir do evento "Ao modificar da Grade".

## Exemplos

1. Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo
"MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3 parâmetro
seja o campo PIB(Produto Interno Bruto), será retornado a soma de todos os PIBs da coluna desejada.
2. Assumindo que temos um campo IDADE e que os mesmos existes os seguintes valores ( 18,25,14,32,30,29 ).
O valor retornado será: (148), pois 18+25+14+32+30+29 = 148.
