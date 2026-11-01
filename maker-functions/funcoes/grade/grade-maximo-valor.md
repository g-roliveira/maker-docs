---
title: "Grade - Máximo Valor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o máximo valor de uma coluna.

## Parâmetro(s)

1. Formulário que contém a grade. (Formulário)
2. Nome da Grade. (Componente)
3. Nome do Campo. (Letras)

## Retorno

Valor máximo referente ao campo informado. (Número)

## Observações

1. Quando usada na camada cliente, retornará o máximo valor encontrado apenas dos dados visualizados na grade.
1. 2 Quando estiver usando a "paginação" será retornado o valor da pagina em questão/atual.
2. Na camada servidor a verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não).
2. 1 O retorno será do tipo 'Fracionado'. Independente se o campo for do tipo inteiro ou numérico.
3. Modo de Inserção/Alteração:
3. 1 Caso a função venha a ser usada com o formulário estando no modo de inserção ou alteração,
deverá ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.

## Exemplo

Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo
"MakerGradeEstados" e na grade temos os campo: "Código", "Nome do Estado", "PIB". Assumindo que o 3] parâmetro
seja o campo PIB (Produto Interno Bruto), será retornado o maior PIB encontrado.
