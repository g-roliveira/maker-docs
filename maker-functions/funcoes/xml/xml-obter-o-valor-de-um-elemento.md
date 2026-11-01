---
title: "XML - Obter o valor de um Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém todo o conteúdo e todos os subelementos que estão dentro do Elemento.

Parâmetro:
1. Objeto XML. (Nó do elemento)

## Retorno

Valor do Elemento. (Variante)

## Exemplo

Se temos:
"&lt;TEXTO&gt;
Maker Flow
&lt;SQL&gt;Sequel&lt;/SQL&gt;
&lt;MAKER&gt;Flow&lt;/MAKER&gt;
&lt;/TEXTO&gt;"
então o retorno será:
"Maker Flow , &lt;SQL&gt;Sequel&lt;/SQL&gt; e &lt;MAKER&gt;Flow&lt;/MAKER&gt;".
