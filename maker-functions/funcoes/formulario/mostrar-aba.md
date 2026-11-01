---
title: "Mostrar Aba"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função mostra ou oculta a aba a depender da condição lógica passada. Caso a condição seja verdadeira,
mostra a aba, caso seja falsa, oculta.

## Parâmetro(s)

1. Aba. (Letras)
2. Mostrar Aba? (Lógico)

## Retorno

Não possui.

## Observação

A aba passada como parâmetro deve estar no formulário que chama o fluxo.

## Exemplos

1. Caso um formulário esteja em modo de inserção, após a função ser chamada, o formulário passará para o
modo de alteração.
2. A função apenas mostrará a ABA. Isso significa que a ABA não será ativada. Para isto utilize a função "Ativar
Aba".
