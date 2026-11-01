---
title: "WebSocket - Enviar Mensagem"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=29"
---

**Categoria:** [Depreciado](../../categorias/depreciado)

**Compatibilidade:** Cliente

## Descrição

Envia uma mensagem para o WebSocket indicado no primeiro parâmetro.

## Parâmetros

1. Referência da conexão(Retorno da função "WebSocket - Abrir Conexão") (Variante).
2. Mesangem que deseja enviar (Letras).
3. Lista com o ID dos Destinatários (Letras) (Opcional) (Ver observação 1).

Retono: Não possui.

Observação(ões):
1. Caso lista com o ID dos usuários seja informado, apenas os mesmos receberam a mensagem. Caso não informe, a mensagem será enviada
para todos os clientes da conexão.
