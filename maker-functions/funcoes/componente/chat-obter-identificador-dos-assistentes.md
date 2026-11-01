---
title: "Chat - Obter Identificador dos Assistentes"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Servidor

## Descrição

Essa função obtém o identificador único de um ou mais assistentes virtuais adicionados ao componente.

## Parâmetros

1. Formulário
2. Componente

## Retorno

Objeto JSONArray contento os indentificadores obtidas.

## Observações

1. Caso o componente não tenha nenhum assistente adicionado, será retornado um objeto vazio.
2. Exemplo de retorno da função:

[
&#123;
"name":"nome do assistente",
"botId":"UUID do assisten"
&#125;
]
