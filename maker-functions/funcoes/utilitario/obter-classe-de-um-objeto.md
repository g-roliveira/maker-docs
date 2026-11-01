---
title: "Obter Classe de um Objeto"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Obtém a Classe do objeto passado como parâmetro.

Parâmetro:
1. Objeto (qualquer tipo).

## Retorno

Retorna o nome da classe do Objeto.

## Observação

Deve-se sempre ficar atento ao retorno na camada cliente, devido a cada browser ter suas peculiaridades o tipo de retorno pode mudar.

## Exemplos

1. Se o objeto passado como parâmetro for uma lista, o retorno será 'ArrayList'. (Camada Servidor)
2. Se o objeto passado como parâmetro for uma lista, o retorno será 'array'. (Camada Cliente)
