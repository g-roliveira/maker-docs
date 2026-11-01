---
title: "Grade - Obter Linhas Selecionadas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=28"
---

**Categoria:** [Grade](../../categorias/grade)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna as informações das linhas selecionadas ou apenas o index das linhas.

## Parâmetro(s)

1. Nome da Grade. (Componente)
2. Somente Índices? (Lógico)

## Retorno

Lista de JSON com informações ou lista de índices. (Variante)

## Observações

1. Para que essa função tenha o funcionamento correto o componente deve permitir a seleção de múltiplas linhas, que pode ser habilitado por meio da função "Grade - Permitir Múltipla Seleção de Linhas".
2. Quando informado o valor como verdadeiro para o segundo parâmetro a função retornará uma lista com os índices das linhas selecionadas, quando falso retornará uma lista de JSON com informações das linhas.
