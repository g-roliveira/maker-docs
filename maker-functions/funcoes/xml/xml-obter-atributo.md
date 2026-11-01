---
title: "XML - Obter Atributo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém o atributo do Elemento XML informado (Atributos são informações adicionais que são acrescentadas a uma tag (delimitadores)).

## Parâmetro(s)

1. Objeto XML. (Variante)
2. Nome do Atributo. (Letras)

## Retorno

Atributo do Elemento XML. (Letras)

## Exemplo

Se tivermos então um elemento XML:
&lt;?xml version="1.0"?&gt;
&lt;aviso date="25/10/2007"&gt;
&lt;para&gt;Janice&lt;/para&gt;
&lt;de&gt;Jefferson&lt;/de&gt;
&lt;cabecalho&gt;Lembre-se&lt;/cabecalho&gt;
&lt;corpo&gt;Lançamento do oficial do Maker&lt;/corpo&gt;
&lt;/aviso&gt;
e obtemos o atributo "date" o retorno será "25/10/2007".
