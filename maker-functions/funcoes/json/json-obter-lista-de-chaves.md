---
title: "JSON - Obter Lista de Chaves"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=68"
---

**Categoria:** [JSON](../../categorias/json)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função obtém a lista de chaves do objeto JSON passado no primeiro parâmetro.

Parâmetro:
1. Objeto JSON. (Variante)

## Retorno

Lista contendo as chaves. (Variante)

## Observação

O primeiro parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".

## Exemplo

Assumindo como parâmetro um objeto JSON criado a partir do Texto &#123;"Versão":"3.9","empresa":"Softwell"&#125;, ao chamar a função "JSON - Obter Lista de Chaves" o retorno será um objeto Lista com os valores "Versão" e "empresa".
