---
title: "Traduzir"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Traduz um texto para um determinado idioma.

## Parâmetro(s)

1. Texto a ser traduzido. (Letras)
2. Lista de parâmetros do texto. (Variante)

## Retorno

Retorna o texto traduzido para o idioma definido no parâmetro. (Letras)

## Observações

1. Quando utilizada na camada servidor, a função irá buscar o texto passado na Tabela de Traduções. Se for utilizada
na camada cliente, o texto já tem que estar determinado no fluxo para que ele possa buscar na tabela antes da chamada da função.
2. O segundo parâmetro é para definir nomes próprios que não possuem tradução.

## Exemplo

Se definirmos o 1° Parâmetro = Meu nome é &#123;0&#125; e meu pai é &#123;1&#125;,
o 2° parâmetro uma lista com os valores correspondentes a posição no texto (Lista [Maria, João]),
desta forma, a função irá retornar: My name is Maria and my father is João.
