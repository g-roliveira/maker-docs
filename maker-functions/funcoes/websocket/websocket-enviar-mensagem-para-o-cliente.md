---
title: "WebSocket - Enviar Mensagem para o Cliente"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Servidor

## Descrição

Esta função envia uma mensagem do servidor para todos os clientes conectados ao Endpoint.

## Parâmetro(s)

1. Nome do Endpoint do servidor. (Letras)
2. Mensagem a ser enviada aos clientes. (Letras)

## Retorno

Não possui.

## Observações

1. O primeiro parâmetro é o retorno da função "WebSocket - Obter EndPoint"
2. Ao enviar mensagem do servidor para os clientes conectados a ele, fluxo de "Ao receber mensagem" do cliente será acionado automaticamente caso especificado.
