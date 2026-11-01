---
title: "Grade - Obter Valor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna o valor que está na Grade, a partir da informação da linha (a primeira linha da Grade é a linha "0" (zero)) e a coluna que deseja obter o valor.

## Parâmetro(s)

1. Componente Grade.
2. Número da Linha (N-1). (Inteiro)
3. Nome da Coluna. (Letras)

## Retorno

Retorna o valor obtido em uma determinada linha do componente. (Letras)

## Observação

O primeiro parâmetro desta função também pode ser modificado para a "Constante" do tipo "Letras",
sendo informado manualmente o nome do componente "Grade".

## Exemplo

Assumindo que o componente grade sendo "Grade de Cidades", o número da linha sendo 0(zero)
e o nome da coluna sendo"PIB"(Produto Interno Bruto). O retorno será o valor que está na linha 0 da coluna "PIB"
na "Grade de Cidades".
