---
title: "Interação de Confirmação"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente

## Descrição

É passado um parâmetro que será um texto, onde esse será confirmado ou negado conforme a escolha do usuário.
Essa função abre uma caixa com opções "Ok" ou "Cancel".
Ao clicar em "Ok" usuário confirmará uma operação retornando verdadeiro, ou cancelará a mesma retornando falso.

Parâmetro:
1. Texto que servirá para interagir com o usuário. (Letras)

## Retorno

Se o usuário clicar em "OK" retorna "verdadeiro", se clicar em "Cancel", retorna "falso". (Lógico)

## Exemplo

Passando como parâmetro "Confirmar operação?", o resultado será uma caixa de diálogo com os botões "OK" e "Cancel". Se o usuário clicar "Ok" o retorno será verdadeiro, caso contrário, será falso.
