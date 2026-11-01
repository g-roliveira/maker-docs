---
title: "Associar Evento ao componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Esta função associa um evento no padrão W3C (DOM Events Specification) ao componente.

## Parâmetro(s)

1. Componente cujo evento será associado.
2. Descrição do evento. (Letras) (Ver observação 3)
3. Fluxo que será executado quando o evento ocorrer. (Letras)
4. Lista com os parâmetros a serem passados para o fluxo. (Variante)

## Retorno

Não possui.

## Observações

1. Caso o componente passado no primeiro parâmetro seja nulo, o evento será associado ao formulário.
2. O fluxo que será associado ao componente deve obrigatoriamente ser do tipo cliente.
3. Alguns eventos utilizados pelo Webrun no padrão W3C (Dom Events):
1 - onclick;
2 - onkeypress;
3 - onchange;
4 - onblur;
5 - onfocus;
6 - onmouseover.

## Exemplo

1. Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usuário passar o mouse sobre um componente Texto chamado "MakerLabel1", a função ficaria:
1º Parâmetro: MakerLabel1 (Componente).
2º Parâmetro: onmouseover (Letras).
3º Parâmetro: Fluxo Observador de eventos (Letras).
4º Parâmetro: nulo.
