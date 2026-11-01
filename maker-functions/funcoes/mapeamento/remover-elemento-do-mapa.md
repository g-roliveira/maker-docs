---
title: "Remover Elemento do Mapa"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=18"
---

**Categoria:** [Mapeamento](../../categorias/mapeamento)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função remove o elemento de um objeto mapa a partir da chave (ou Referência).

## Parâmetro(s)

1. Objeto Mapa. (Variante)
2. Chave (ou Referência). (Variante)

## Retorno

Retorna o elemento removido de um determinado objeto mapa a partir da chave (ou referência) do elemento. Caso o
elemento seja removido retorna Verdadeiro, caso contrário Falso. (Lógico)

## Exemplo

Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: "Maker/Flow"; "Freire/Softwell", "Banco/SQL" e o 2º parâmetro contendo a chave Freire. A partir desses valores o elemento a ser removido será o valor "Flow".
