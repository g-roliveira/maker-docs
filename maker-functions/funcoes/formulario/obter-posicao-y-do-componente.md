---
title: "Obter Posição Y do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Obtém e retorna a posição vertical (Y) do componente passado por parâmetro.

Parâmetro:
1. Componente que se deseja obter a posição vertical (Y). (Componente)

## Retorno

Retorna a posição vertical do componente passado como parâmetro. (Inteiro)

## Observações

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Início" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do
tipo "formulário" para uma constante do tipo "Letras".

## Exemplo

Em um formulário com um componente "Cidade" cuja posição vertical é 250, assumindo como parâmetros este
componente ("Cidade"), o retorno será 250 (Inteiro).
