---
title: "Hoje"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=4"
---

**Categoria:** [Data e Hora](../../categorias/data-e-hora)

**Compatibilidade:** Todas as camadas

## Descrição

Essa função obtém a data atual e retorna.

Parâmetro:
Não possui.

## Retorno

Retorna a data atual com as horas. (Data)

## Observações

1. Ao utilizar a função em um fluxo na camada Servidor, a hora retornada será a definida no relógio do servidor de aplicações (Webrun).
2. Ao utilizar a função em um fluxo na camada Cliente, a hora retornada será a definida no relógio do cliente (não confiável).
3. Ao utilizar a função em um fluxo na camada Banco de Dados, a hora retornada será a definida no relógio do servidor de banco de dados.
