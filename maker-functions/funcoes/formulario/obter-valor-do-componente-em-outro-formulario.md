---
title: "Obter Valor do Componente em Outro Formulário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=9"
---

**Categoria:** [Formulário](../../categorias/formulario)

**Compatibilidade:** Cliente

## Descrição

Função que obtém o valor do componente desejado em qualquer formulário aberto.

## Parâmetro(s)

1. Formulário onde se encontra o componente.
2. Componente desejado.

## Retorno

Conteúdo do campo passado como parâmetro. (Variante)

## Observações

1. Esta função só irá funcionar caso exista algum parentesco entre os formulários.
2. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do Sub
Form como parâmetro.
3. Quando o formulário se encontra dentro de um componente moldura, deve-se utilizar a função "Executar Fluxo
no Formulário" apontando para um fluxo que obtêm o valor do componente.
