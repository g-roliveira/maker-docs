---
title: "É Nulo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função verifica se o parâmetro for nulo.

Parâmetro:
1. Recebe um valor ou uma função para ser avaliada. (Variante)

## Retorno

Retorna verdadeiro se o valor for nulo, caso contrário o retorno será falso. (Lógico)

## Observações

1. Valores iguais a 0 (zero) são considerados como nulo.
2. Essa função não é válida para verificar se um Objeto Lista ou Mapa é nulo ou vazio, para tal, utilizar a função Tamanho da Lista ou Tamanho do Mapa verificando se o retorno da mesma é maior que 0 (zero).

## Exemplos

1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas funções a função É Nulo, caso a consulta não retorne valor de FOL_COD o retorno será verdadeiro, pois o campo está com o valor nulo.
2. Assumindo que tenhamos obtido o valor de um componente do formulário, se não tiver valor no componente o retorno será verdadeiro, caso o componente tenha algum valor atribuído a ele o retorno será falso.
