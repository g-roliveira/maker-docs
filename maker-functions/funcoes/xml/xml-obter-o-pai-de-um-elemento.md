---
title: "XML - Obter o Pai de um Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o Elemento acima do subelemento.

Parâmetro:
1. Objeto XML. (Nó, Elemento, etc.) (Variante)

## Retorno

Elemento pai. (Variante)

## Exemplo

Tendo uma XML onde o subelemento é "&lt;MAKER&gt;Flow&lt;/MAKER&gt;" e acima dele há um elemento pai
"&lt;TEXTO&gt;
&lt;MAKER&gt;Flow&lt;/MAKER&gt;
&lt;/TEXTO&gt;"
então o seu elemento pai é "&lt;TEXTO&gt;".
