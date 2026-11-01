---
title: "XML - Obter Raiz"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém um elemento raiz de um XML. (O Elemento raiz seria o elemento pai de um arquivo XML)

Parâmetro:
1. Objeto XML. (Variante)

## Retorno

Referência da Raiz do XML. (Variante)

## Exemplo

Se tivermos o XML:
"&lt;?xml version="1.0" encoding="ISO-8859-1"?&gt;
&lt;software&gt;
&lt;titulo&gt;Maker&lt;/titulo&gt;
&lt;direitos&gt;SOFTWELL&lt;/direitos&gt;
&lt;ano&gt;2007&lt;/ano&gt;
&lt;/software&gt;"
Então o retorno será: "&lt;software&gt;".
