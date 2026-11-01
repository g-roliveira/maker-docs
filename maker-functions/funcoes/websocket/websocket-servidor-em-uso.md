---
title: "WebSocket - Servidor em Uso?"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Servidor

## Descrição

Essa função recebe como parâmetro o nome do EndPoint e retorna "true" caso esteja em uso ou '"false" caso
esteja livre.

Parâmetro:
1. Nome do EndPoint. (Letras)

## Retorno

Status. (Variante)
Nulo - Servidor inexistente.
True - Servidor em uso.
False - Servidor não está em uso.

## Observação

O 1º Parâmetro é o retorno da função "WebSocket - Obter EndPoint".
