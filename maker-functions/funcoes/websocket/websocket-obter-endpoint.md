---
title: "WebSocket - Obter EndPoint"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Servidor

## Descrição

Essa função obtém um EndPoint disponível e retorna a sua referência, caso não exista EndPoints disponíveis o retorno será nulo.

## Parâmetro(s)

1. Fluxo ao entrar. (Opcional)
2. Lista de Parâmetros do Fluxo. (Variante, Opcional)
3. Fluxo ao Receber Mensagem. (Opcional)
4. Lista de Parâmetros do Fluxo. (Variante, Opcional)
5. Fluxo ao Sair. (Opcional)
6. Lista de Parâmetros do Fluxo. (Variante, Opcional)
7. Fluxo de Erro. (Opcional)
8. Lista de Parâmetros do Fluxo. (Variante, Opcional)
9. Modo Restrito (Lógico, Opcional)(Ver observação 1)

## Retorno

Referência do EndPoint. (Variante)

Observação(ões):
1. Com o Modo Restrito ativo, somente o servidor tem acesso às mensagens enviadas para o socket, caso o mesmo
esteja desabilitado, quando uma mensagem for enviada para o socket, todos que estão conectados recebem a mensagem.
Se não for informado um valor, o padrão será desativado.
