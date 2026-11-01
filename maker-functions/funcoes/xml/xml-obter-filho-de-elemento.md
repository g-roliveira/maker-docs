---
title: "XML - Obter Filho de Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=12"
---

**Categoria:** [XML](../../categorias/xml)

**Compatibilidade:** Cliente, Servidor

## Descrição

Retorna o primeiro elemento do Objeto XML passado por parâmetro.

## Parâmetro(s)

1. Objeto XML. (Variante)
2. Nome do Elemento. (Letras)
3. NameSpace. (Letras, Opcional)

## Retorno

Retorna a referência do elemento passado como parâmetro. (Variante)

## Exemplos

1. Tendo um XML onde o nome do elemento a ser obtido é "SQL"
&lt;TEXTO&gt;
&lt;SQL&gt;Sequel&lt;/SQL&gt;
&lt;MAKER&gt;Flow&lt;/MAKER&gt;
&lt;SQL&gt;Sequel2&lt;/SQL&gt;
&lt;/TEXTO&gt;
Então o retorno seria a referência para o primeiro elemento "SQL".
2. Tendo um XML onde o nome do elemento a ser obtido é "MAKER" onde o mesmo possui o NameSpace "flow"
&lt;TEXTO&gt;
&lt;SQL&gt;Sequel&lt;/SQL&gt;
&lt;MAKER xmlns="flow"&gt;Flow&lt;/MAKER&gt;
&lt;SQL&gt;Sequel2&lt;/SQL&gt;
&lt;/TEXTO&gt;
Então o retorno seria a referência para o primeiro elemento "MAKER".
