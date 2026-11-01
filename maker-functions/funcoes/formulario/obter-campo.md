---
title: "Obter Campo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o conteúdo do campo passado por parâmetro.

Parâmetro:
1. Campo qual deseja obter o conteúdo. (Formulário)

## Retorno

Conteúdo do campo. (Variante)

## Observações

1. Para selecionar o campo é necessário indicar o nome do formulário no de trabalho no "Início" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do campo mudando a constante do tipo
"formulário" para uma constante do tipo "Letras".
3. É necessário que o componente esteja associado a um campo da tabela.
4. Caso o formulário que se deseja obter o campo esteja dentro de um componente moldura, deve-se utilizar a
função "Executar Fluxo no Formulário" apontar para um fluxo que contenha esta função.

## Exemplo

Em um formulário cujo conteúdo do campo "Cidade" é "Salvador", assumindo como parâmetro este campo
("Cidade"), o retorno seria "Salvador".
