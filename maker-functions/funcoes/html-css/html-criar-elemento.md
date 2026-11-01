---
title: "HTML - Criar Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=61"
---

**Categoria:** [HTML/CSS](../../categorias/html-css)

**Compatibilidade:** Cliente

## Descrição

Esta função cria um elemento HTML especificado pelos parâmetros da função e seus atributos e retorna sua referência.

## Parâmetro(s)

1. Elemento a ser criado. (Letras)
2. Lista de Lista de atributos e valores. (Variante, Opcional)
3. Elemento que receberá o elemento criado. (Variante, Opcional)

## Retorno

Elemento criado. (Variante)

## Observação

O elemento não deve possuir os sinais de &lt; e &gt;, caso deseja inserir o elemento paragrafo &lt;p&gt; por exemplo:
use somente 'p'.

## Exemplo

Suponhamos que queremos obter o elemento 'p' passado por parâmetro, o retorno será: [object HTMLParagraphElement]
