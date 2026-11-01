---
title: "XPath - Obter Nós"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Servidor

## Descrição

Esta função obtém o nó com o filtro/expressão indicado.

## Parâmetro(s)

1. XML. (Variante)
2. Caminho do nó a obter com o filtro/expressão.

## Retorno

Uma lista com todos os elementos (XML) encontrados com o filtro indicado (Variante)

## Exemplo

&lt;?xml version="1.0" encoding="iso-8859-1" standalone="yes"?&gt;
&lt;clientes&gt;
&lt;cliente id="1" tipoPessoa="F"&gt;
&lt;nome&gt;Eliezer Rodrigues&lt;/nome&gt;
&lt;/cliente&gt;
&lt;cliente id="2" tipoPessoa="J"&gt;
&lt;nome&gt;Empresa Abz teste&lt;/nome&gt;
&lt;/cliente&gt;
&lt;cliente id="3" tipoPessoa="F"&gt;
&lt;nome&gt;Maria da Silva&lt;/nome&gt;
&lt;/cliente&gt;
&lt;/clientes&gt;

No 1º parâmetro é informado a raiz do XML acima e no 2º parâmetro é informado o nó cliente junto com o filtro '//clientes/cliente[@tipoPessoa = 'F']'.
No exemplo acima, o retorno é uma lista com dois elementos e em cada elemento da lista contém a referência do respectivo nó XML.

Em um exemplo mais complexo temos o seguinte XML:
&lt;?xml version="1.0" encoding="iso-8859-1" standalone="yes"?&gt;
&lt;clientes xmlns="http://www.softwell.com.br"&gt;
&lt;cliente id="1" tipoPessoa="F"&gt;
&lt;nome&gt;Eliezer Rodrigues&lt;/nome&gt;
&lt;/cliente&gt;
&lt;cliente id="2" tipoPessoa="J"&gt;
&lt;nome&gt;Empresa Abz teste&lt;/nome&gt;
&lt;/cliente&gt;
&lt;cliente id="3" tipoPessoa="F"&gt;
&lt;nome&gt;Maria da Silva&lt;/nome&gt;
&lt;/cliente&gt;
&lt;/clientes&gt;

Note que nesse exemplo temos um namespace definido na raiz do XML, sendo assim a expressão(filtro) do exemplo anterior não serviria nesse caso.
Para o exemplo em questão temos duas formas de chegar no mesmo valor:
1. Montar a expressão validando o namespace que foi definido:
Expressão: `/*[name()='clientes' and namespace-uri()='http://www.softwell.com.br']/*[name()='cliente' and @tipoPessoa='F']`

2. Montar a expressão ignorando o namespace:
Expressão: `/*[name()='clientes']/*[name()='cliente' and @tipoPessoa='F']`

Ambas as expressões foram montadas a partir da documentação de syntax do XPath no link a seguir:
https://www.w3schools.com/xml/xpath_syntax.asp
