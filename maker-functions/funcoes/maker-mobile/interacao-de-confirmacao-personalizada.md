---
title: "Interação de Confirmação Personalizada"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Esta função é usada para exibir uma Interação de Confirmação com personalização do título.
Será executado um fluxo quando o usuário clicar em OK ou CANCELAR, caso o usuário clique OK, o fluxo receberá como parâmetro de entrada a constante "1" ou "0" caso clique em CANCELAR.

## Parâmetro(s)

1. Posição do botão CANCELAR. (Informe "D" para Direita ou "E" para Esquerda). (Letras)
2. Título da Interação. (Letras)
3. Mensagem a ser exibida. (Letras)
4. Fluxo que será executado ao clicar em OK ou CANCELAR. (Fluxo)
5. Lista de Parâmetros adicionais para o fluxo. (Variante, Opcional)

## Observação

O fluxo do 4º deverá ter obrigatoriamente 1 parâmetro para receber o resultado do clique.
