---
title: "XML - Obter Filhos de um Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém todos os filhos de um determinado Elemento XML informado. Os Filhos do elemento no caso seria então os subelementos do elemento.

## Parâmetro(s)

1. Objeto XML. (Raiz, Nó, etc.) (Variante)
2. Nome do Elemento. (Letras, Opcional)

## Retorno

A variável de Retorno deverá ser do tipo Variante.

## Exemplo

Tendo um XML onde o elemento é
"&lt;TEXTO&gt;
&lt;SQL&gt;Sequel&lt;/SQL&gt;
&lt;MAKER&gt;Flow&lt;/MAKER&gt;
&lt;/TEXTO&gt;"
Então o retorno seria o que estivesse dentro do nó "&lt;TEXTO&gt;", no caso, "&lt;SQL&gt;" e "&lt;MAKER&gt;".

## Observação

1. Essa função não funciona quando o elemento possui namespace.
