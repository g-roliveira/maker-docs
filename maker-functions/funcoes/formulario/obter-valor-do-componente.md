---
title: "Obter Valor do Componente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Obtém o conteúdo do componente passado no segundo parâmetro e o retorna.

## Parâmetro(s)

1. Nome do Formulário.
2. Nome do Componente.

## Retorno

Retorna o conteúdo do componente passado como parâmetro. (Variante)

## Observações

1. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do
Sub Form como parâmetro.
2. Para obter o valor de um componente que se encontra em outro formulário, utilize a função "Obter Valor do
Componente do Formulário".
3. Para obter o valor de um componente que se encontra em uma moldura, deve ser utilizada a função
"Executar Fluxo no Formulário" e apontar para um fluxo que chama esta função.
