---
title: "WebSocket - Abrir Conexão"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=29"
---

**Categoria:** [Depreciado](../../categorias/depreciado)

**Compatibilidade:** Cliente

## Descrição

Abre uma conexão com o WebSocket a partir do Endpoint indicado no 1º parâmetro.

## Parâmetros

1. Endpoint (Letras).
2. Fluxo que será executado ao receber uma mensagem (Fluxo).

Retono: Referência da conexão.

## Exemplo

1. Assumindo como parâmetros "websocket" (Letras) e "ruleOnMessage" (Fluxo), o retorno seria a referência da conexão criada
a partir do Endpoint indicado e, ao receber uma messagem o fluxo indicado será chamado, recebendo no primeiro parâmetro
um texto JSON contendo as seguintes informações:

Quando um cliente loga.
Texto JSON contento as chaves:
"action" - Contendo a ação, neste caso, "newClient";
"clientId" - Contendo o ID do cliente na conexão;
"connections" - Lista de ID's das conexões ativas;

Quando um cliente desloga.
Texto JSON contento as chaves:
"action" - Contendo a ação, neste caso, "lostClient";
"clientId" - Contendo o ID do cliente na conexão;
"connections" - Lista de ID's das conexões ativas;

Ao receber uma mensagem.
Texto JSON contento as chaves:
"action" - Contendo a ação, neste caso, "message";
"clientId" - Contendo o ID do cliente na conexão;
"message" - Contendo a mensagem enviada;
"destination" = Contendo a conexão de destino(Caso a mensagem contenha um destinatário específico);
