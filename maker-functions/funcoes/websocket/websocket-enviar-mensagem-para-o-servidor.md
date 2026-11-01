---
title: "WebSocket - Enviar Mensagem para o Servidor"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função envia uma mensagem para o servidor de acordo os parâmetros passados.

## Parâmetro(s)

1. Referência da Conexão. (Variante)
2. Mensagem. (Letras)

Retorno
Não possui.

## Observações

1. O primeiro parâmetro é o retorno da função "WebSocket - Conectar.
2. A mensagem enviada ao servidor será automaticamente enviada pelo mesmo para todos os clientes, acionando o fluxo "Ao enviar mensagem" de cada um.
