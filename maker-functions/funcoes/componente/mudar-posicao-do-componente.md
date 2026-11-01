---
title: "Mudar Posição do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função altera a posição do componente passado por parâmetro.

## Parâmetro(s)

1. Componente que mudará de posição.
2. Nova posição X (Horizontal) do componente. (Inteiro)
3. Nova posição Y (Vertical) do componente. (Inteiro)

## Retorno

Não possui.

## Observações

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "InÍcio" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo
"componente" para uma constante do tipo "Letras".

## Exemplo

Assumindo como parâmetros o componente "Cidade"(MakerEdit1), o valor 150 e o valor 250, quando o fluxo for executado a posição X do componente será 150 e a Y será 250.
