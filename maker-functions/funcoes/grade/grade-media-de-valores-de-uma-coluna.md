---
title: "Grade - Média de Valores de uma Coluna"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente, Servidor

## Descrição

Calcula a média de valores contidos em uma coluna.

## Parâmetro(s)

1. Formulário que contém a grade.
2. Nome da Grade. (Componente)
3. Nome do Campo. (Letras)

## Retorno

Média entre os valores referente ao campo informado. (Número)

## Observações

1. Quando usada na camada cliente, retornará a Média entre os valores encontrados na grade.
1. 1. Quando estiver usando a "paginação" será retornado a média da coluna e da página em questão/atual.
2. Na camada servidor a verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não).
3. Modo de Inserção/Alteração:
3. 1. Caso a função venha a ser usada com o formulário estando no modo de inserção ou alteração,
deverá ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.

## Exemplo

Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo
"MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3º parâmetro
seja o campo PIB (Produto Interno Bruto), será retornado a média dos valores de uma coluna.
