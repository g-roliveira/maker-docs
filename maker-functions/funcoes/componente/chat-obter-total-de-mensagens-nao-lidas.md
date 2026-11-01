---
title: "Chat - Obter Total de Mensagens não Lidas"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=26"
---

**Categoria:** [Componente](../../categorias/componente)

**Compatibilidade:** Cliente

## Descrição

Obtém o total de mensagens não lidas (em cache).

## Parâmetro(s)

1. Componente Chat.
2. ID do Usuário. (Inteiro)

## Retorno

Total de mensagens não lidas entre o usuário logado e o usuário especificado no 2º parâmetro ou com o chat inteiro. (Inteiro)

## Observações

1. Essa função utiliza a cache do componente chat.
2. Se nenhum valor for especificado no 2º parâmetro, a função irá retornar o total de mensagens não lidas para o chat inteiro.
3. Quando o 2º parâmetro for especificado e o usuário não estiver na lista do chat, a função irá retornar 0.
