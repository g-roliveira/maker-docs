---
title: "Habilitar Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esta função habilita o componente se a condição passada no segundo parâmetro for verdadeira, ou desabilita
caso a condição seja falsa. Se o componente estiver desabilitado, não será possível modificar seu conteúdo.

## Parâmetro(s)

1. Componente que será habilitado ou desabilitado (Letras).
2. Condição para habilitar o componente (Lógico).

## Retorno

Não possui.

## Observações

1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.
2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do
tipo "Componente" para uma constante do tipo "Letras".

## Exemplos

1. Assumindo como parâmetros o componente "Cidade" (MakerEdit1), e uma condição lógica "Ano Atual=
2000", quando a função for executada, caso o Ano atual seja 2000 o componente "MakerEdit1" será
habilitado, caso seja diferente de 2000 o campo será desabilitado.
2. Assumindo como parâmetros o componente "Cidade" (MakerEdit1), e uma condição lógica true, quando a
função for executada o componente sempre vai ser habilitado.
