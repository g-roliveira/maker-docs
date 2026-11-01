---
title: "Obter variável da sessão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o conteúdo da variável criada pela função "Definir variável de sessão" passando no 1º parâmetro o nome da
variável e no 2º parâmetro o valor lógico verdadeiro ou falso, indicando se é ou não uma variável global. Para variáveis
globais usa-se verdadeiro, para não globais usa-se falso.

## Parâmetro(s)

1. Nome da Variável. (Letras)
2. Valor Lógico.

## Retorno

Retorna o conteúdo da variável passada no primeiro parâmetro caso ela já exista. Caso ela ainda não tenha sido definida,
retorna nulo. (Variante)

## Observação

Para obter uma variável de sessão é necessário antes definir essa variável utilizando a função "Definir variável de sessão"
da categoria Utilitários.

## Exemplo

Assumindo como parâmetros "Contador" (Letras) e verdadeiro (Lógico). Se existir uma variável global com o nome
"Contador" o retorno seria o conteúdo dessa variável. Caso não exista, o retorno seria nulo.
