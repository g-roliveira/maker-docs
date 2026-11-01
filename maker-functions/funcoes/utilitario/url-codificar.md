---
title: "URL - Codificar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função codifica uma URL passada por parâmetro.

## Parâmetro(s)

1. URL. (Letras)
2. Charset. (Letras, Opcional) (Ex.: UTF-8, ISO-8859-1)

## Retorno

Retorna a URL codificada. (Letras)

## Observações

1. Caso o 2º parâmetro seja nulo, a função utiliza o Charset da aplicação.
2. Ao codificar uma URL na camada cliente a mesma deve ser decodificada na mesma camada.
