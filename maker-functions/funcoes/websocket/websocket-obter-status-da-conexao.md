---
title: "WebSocket - Obter Status da Conexão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Cliente, Servidor

## Descrição

Retorna o status da conexão.

Parâmetro:
1. Referência da conexão. (Variante)

## Retorno

Status. (Inteiro)
0 - Conectando
1 - Conectado
2 - Fechando
3 - Fechado

## Observação

O 1º Parâmetro é o retorno da função "WebSocket - Conectar ao Servidor".
