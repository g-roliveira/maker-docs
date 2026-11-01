---
title: "Criar Nome de Variável"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Criar o nome de uma variável.

## Parâmetro(s)

1. Nome da Variável. (Letras)
2. Valor lógico. (Verdadeiro ou falso)

## Retorno

Retorna o nome da variável sem acentos nem cedilhas. (Letras)

## Observações

1. Se o nome passado por parâmetro possuir acentos ou cedilhas, a função retornará valores diferentes conforme o 2° parâmetro Lógico.
2. Se o 2° parâmetro for "true" o retorno será a variável sem acentos ou cedilhas, caso seja "false" o retorno será a variável
sem acentos ou cedilhas e em formato uppercase (em maiúsculo).

## Exemplo

Assumindo como parâmetro "Ação" (Letras), se o segundo parâmetro for Falso, o resultado será "ACAO", se for verdadeiro
será "Acao".
