---
title: "É Nulo ou Vazio"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=48"
---

**Categoria:** [Lógica](../../categorias/logica)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função verifica se o parâmetro é nulo ou vazio. A depender do resultado, retorna verdadeiro ou falso.

Parâmetro:
1. Recebe um valor ou uma função para ser avaliada. (Variante)

## Retorno

Retorna verdadeiro se o valor for nulo ou vazio, caso contrário o retorno será falso. (Lógico)

## Observação

Essa função não é válida para verificar se um Objeto Lista ou Mapa é nulo ou vazio, para tal, utilizar a função "Tamanho da Lista" ou "Tamanho do Mapa" verificando se o retorno da mesma é maior que 0 (zero).

## Exemplos

1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas funções a função É Nulo, caso a consulta não retorne valor de FOL_COD o retorno será verdadeiro, pois o campo está com o valor nulo.
2. Assumindo que tenhamos obtido o valor de um componente do formulário, se não tiver valor no componente o retorno será verdadeiro, caso o componente tenha algum valor atribuído a ele o retorno será falso.
3. Verificando se um campo no formulário está em branco, a função retornará verdadeiro caso o campo esteja vazio caso contrário retornará falso.
