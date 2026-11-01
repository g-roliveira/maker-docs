---
title: "Obter Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Esta função obtém a referência da janela do formulário informado como parâmetro.

## Parâmetro(s)

1. Formulário.
2. Levantar Exceção? (Caso o formulário não encontrado). (Lógico)

## Retorno

1. Referência (DOM) da janela (Window) do formulário (Variante).

## Observações

1. Esta função não dá suporte a formulários com as propriedades "Popup = SIM" e "Modal = SIM".
2. Esta função obtém apenas formulários abertos em forma de janela (Popup Sim ou Não). Para obter formulários na
moldura, utilize a função "Obter Formulário da Moldura".
