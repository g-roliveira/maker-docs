---
title: "HTML - Obter Elementos"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=61"
---

**Categoria:** [HTML/CSS](../../categorias/html-css)

**Compatibilidade:** Cliente

## Descrição

Essa função retorna uma lista de elementos que coincidam com o grupo de seletores especificado.

## Parâmetros

1. Seletor CSS.(Letras)
2. Referência do Elemento HTML em que será feita a busca dos elementos filhos pelo nome do seletor.(Variante)(Opcional)

## Retorno

Lista de elementos. (Variante)

## Observações

1. Caso o segundo parâmetro não seja especificado, a busca do elemento será realizada dentro da página.
2. O retorno será nulo, caso o elemento não seja encontrado.

## Exemplo

Assumindo como primeiro parâmetro o ".primary", será retornada uma lista com todos os elementos que possuam a classe "primary".
