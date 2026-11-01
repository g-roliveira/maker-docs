---
title: "HTML - Obter Elemento"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=61"
---

**Categoria:** [HTML/CSS](../../categorias/html-css)

**Compatibilidade:** Cliente

## Descrição

Retorna o primeiro elemento que corresponde ao grupo especificado de seletores.

## Parâmetros

1. Seletor CSS. (Letras)
2. Referência do Elemento HTML em que será feita a busca dos elementos filhos pelo nome do seletor. (Variante)(Opcional)

## Retorno

Referência do Elemento. (Variante)

## Observações

1. Caso o segundo parâmetro não seja especificado, a busca do elemento será realizada dentro da página.
2. O retorno será nulo, caso o elemento não seja encontrado.

## Exemplo

Assumindo como primeiro parâmetro o ".menu", será retornado o primeiro elemento que possua a classe "menu".
