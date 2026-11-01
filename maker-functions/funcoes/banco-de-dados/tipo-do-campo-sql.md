---
title: "Tipo do Campo SQL"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=5"
---

**Categoria:** [Banco de Dados](../../categorias/banco-de-dados)

**Compatibilidade:** Banco de Dados, Servidor

## Descrição

Função usada para retornar o tipo de campo da consulta e do campo passado por parâmetro, ambos como constantes do tipo Letras. Tem a mesma funcionalidade da função "Retornar Tipo Campo", com a diferença de que todos os seus parâmetros são constantes do tipo Letras. Vide descrição da função "Retornar Tipo Campo".

## Parâmetro(s)

1. Consulta. (Letras)
2. Campo. (Letras)

## Retorno

Retorna o tipo de campo (Varchar, inteiro). (Letras)

## Observação

O 2º parâmetro deve ser uma constante Letras, explicitando o nome do campo que deseja retornar o tipo.

## Exemplo

Utilize a função tipo do campo SQL, informe como 1º parâmetro: uma constante do tipo letras com a consulta, 2º parâmetro: O campo e atribua o valor de retorno a uma variável do tipo Letras.
