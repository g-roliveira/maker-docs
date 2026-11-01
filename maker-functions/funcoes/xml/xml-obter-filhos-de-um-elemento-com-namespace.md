---
title: "XML - Obter Filhos de um Elemento Com Namespace"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Servidor

## Descrição

Obtém todos os filhos de um determinado Elemento XML informado. Os Filhos do elemento no caso seria então os subelementos do elemento.

## Parâmetro(s)

1. Objeto XML. (Raiz, Nó, etc.) (Variante)
2. Nome do Elemento. (Letras, Opcional)
3. Namespace (Letras) (Observação 1)

## Retorno

A variável de Retorno deverá ser do tipo Variante.

## Observação

1. Caso a segundo parâmetro seja informado é necessário informar o namespace do elemento.

## Exemplo

Assumindo como parâmetros:

1. &lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;RootElement xmlns="http://www.exemplo.com/ns1"
xmlns:ns2="http://www.exemplo.com/ns2"&gt;

&lt;ChildElement id="1"&gt;
&lt;Nome&gt;Produto A&lt;/Nome&gt;
&lt;Preco moeda="BRL"&gt;100.00&lt;/Preco&gt;
&lt;/ChildElement&gt;

&lt;ns2:ChildElement id="2"&gt;
&lt;Nome&gt;Produto B&lt;/Nome&gt;
&lt;Descricao&gt;Item importado&lt;/Descricao&gt;
&lt;/ns2:ChildElement&gt;

&lt;ChildElement id="3"&gt;
&lt;Nome&gt;Produto C&lt;/Nome&gt;
&lt;Preco moeda="USD"&gt;50.00&lt;/Preco&gt;
&lt;ns2:Observacao&gt;Entrega rápida&lt;/ns2:Observacao&gt;
&lt;/ChildElement&gt;

&lt;/RootElement&gt;

2. ChildElement

3. http://www.exemplo.com/ns2

Então o retorno seria a referência para o nó:
&lt;ns2:ChildElement id="2"&gt;
&lt;Nome&gt;Produto B&lt;/Nome&gt;
&lt;Descricao&gt;Item importado&lt;/Descricao&gt;
&lt;/ns2:ChildElement&gt;
