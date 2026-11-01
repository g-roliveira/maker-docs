---
title: "JSON - Obter Valor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=68"
---

**Categoria:** [JSON](../../categorias/json)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função obtém o valor de um elemento de acordo a chave passada no segundo parâmetro.

## Parâmetro(s)

1. Objeto JSON. (Variante)
2. Chave. (Letras)

## Retorno

Retorna o valor da Chave ou Nulo caso não exista. (Variante)

## Observação

O 1º Parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".

## Exemplo

Assumindo como parâmetro um objeto JSON criado a partir do Texto &#123;"Versão":"3.9","empresa":"Softwell"&#125;, ao chamar a função "JSON - Obter Valor" e passar como chave "empresa" (sem aspas), o retorno será "Softwell" (sem aspas).
