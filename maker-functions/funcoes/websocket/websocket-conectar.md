---
title: "WebSocket - Conectar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=74"
---

**Categoria:** [WebSocket](../../categorias/websocket)

**Compatibilidade:** Cliente, Servidor

## Descrição

Essa função conecta ao Endpoint disponível.

## Parâmetro(s)

1. URL. (Letras)
2. Fluxo Ao Abrir Conexão. (Opcional)
3. Parâmetros Opcionais (Ao abrir conexão). (Variante, Opcional)
4. Fluxo ao receber mensagem. (Opcional)
5. Parâmetros opcionais (Ao receber mensagem). (Variante, Opcional)
6. Fluxo ao Ocorrer Erro. (Opcional)
7. Parâmetros opcionais (Ao ocorrer erro). (Variante, Opcional)
8. Fluxo Ao Fechar Conexão. (Opcional)
9. Parâmetros Opcionais (Ao fechar conexão). (Variante, Opcional)

## Retorno

Referência da conexão. (Variante)

## Observações

1. Caso o fluxo "Ao abrir conexão" seja passado, o primeiro parâmetro deve ser reservado para a referência da conexão, mesmo que não vá usar.
2. Caso o fluxo "Ao receber mensagem", o primeiro elemento dos parâmetros de entrada sempre será a mensagem recebida.
3. O segundo parâmetro é o retorno da função "WebSocket - Obter EndPoint"
4. No fluxo "Ao fechar conexão" não utilize funções que precisem da referência da conexão, pois neste estado a conexão já está sendo fechada e não funcionarão.
5. Caso queira enviar mensagem do servidor para os clientes sem que seja uma mensagem enviada por um cliente, utilize a função "WebSocket - Enviar mensagem servidor p/ clientes" da camada Servidor.

## Exemplos

1. Passando um fluxo "Ao abrir conexão" e uma lista de parâmetro com 2 (dois) elementos, o primeiro parâmetro do fluxo passado será reservado para a referência, o segundo sera reservado para o primeiro elemento da lista e o terceiro será reservado para o segundo elemento da lista.
2. Passando um fluxo "Ao receber mensagem" e uma lista de parâmetro com 1 (um) elemento, o primeiro parâmetro do fluxo passado será reservado para a mensagem recebida e o segundo sera reservado para a mensagem recebida do servidor.
