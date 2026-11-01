---
title: "Mudar Largura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função altera a largura do componente do formulário.

## Parâmetro(s)

1. Componente que mudará de tamanho.
2. Nova largura do componente. (Inteiro)

## Retorno

Não possui.

## Observações

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Início" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo
"componente" para uma constante do tipo "Letras".

## Exemplo

Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e o valor 350 (Inteiro), quando o fluxo for
executado a largura do componente passará a ser 350.
