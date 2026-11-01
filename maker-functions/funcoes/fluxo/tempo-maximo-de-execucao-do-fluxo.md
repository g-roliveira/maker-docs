---
title: "Tempo máximo de execução do fluxo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=10"
---

**Categoria:** [Fluxo](../../categorias/fluxo)

**Compatibilidade:** Servidor

## Descrição

O valor passado por parâmetro será o tempo máximo que o fluxo poderá ser executado, caso o fluxo atinja o tempo máximo o mesmo será encerrado.

Parâmetro:
1. Tempo em segundos. (Inteiro)

## Retorno

Não possui.

## Observação

1. O Tempo normal de uma regra, antes de ser interrompida pelo sistema, é de 90 segundos.
2. Havendo subfluxos, a função tem que ficar no fluxo principal.

## Exemplo

Assumindo como parâmetro 100 (Inteiro), o tempo máximo de execução da regra deixaria de ser 90 segundos(padrão) para ser 100 segundos.
