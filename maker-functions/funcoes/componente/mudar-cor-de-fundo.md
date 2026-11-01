---
title: "Mudar Cor de Fundo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função altera a cor de fundo do componente.

## Parâmetro(s)

1. Componente cujo fundo mudará de cor.
2. Nova cor de fundo do componente. (Cor)

## Retorno

Não possui.

## Observações

1. No 2º parâmetro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor preta (000000).
2. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Início" do fluxo.
3. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo
"componente" para uma constante do tipo "Letras".

## Exemplo

Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e a cor Azul (0000FF), quando o fluxo for executado
o fundo do componente "MakerEdit1" passará a ser azul.
