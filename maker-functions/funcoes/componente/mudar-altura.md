---
title: "Mudar Altura"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função altera a altura do componente do formulário.

## Parâmetro(s)

1. Componente que mudará de tamanho.
2. Nova altura do componente. (Inteiro)

## Retorno

Não possui.

## Observações

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do
tipo "componente" para uma constante do tipo "Letras".

## Exemplo

Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e o valor 100(inteiro), quando o fluxo for
executado a altura do componente passará a ser 100.
