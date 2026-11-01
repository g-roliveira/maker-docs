---
title: "JSON - Atualizar Valor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=68"
---

**Categoria:** [JSON](../../categorias/json)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função atualiza um elemento no objeto JSON passado no primeiro parâmetro.
Caso a chave passada no segundo parâmetro não exista a mesma será criada.

## Parâmetro(s)

1. Objeto JSON. (Variante)
2. Chave. (Letras)
3. Valor. (Variante)

## Retorno

Objeto JSON atualizado. (Variante)

## Observações

1. O primeiro parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".
2. Caso uma chave a ser atualizada tenha como valor um objeto Mapa, esta será convertida para JSON.

## Exemplo

Assumindo como parâmetro um objeto JSON criado a partir do Texto &#123;"Versão":"3.9","empresa":"Softwell"&#125;, ao chamar a função "JSON - Atualizar Valor" e passar como chave "Versão" (sem aspas) e valor (3º parâmetro) "4.0", o objeto JSON (1º parâmetro) terá a chave "Versão" atualizada de "3.9" para "4.0".
