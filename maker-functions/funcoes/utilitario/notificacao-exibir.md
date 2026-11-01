---
title: "Notificação - Exibir"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Cliente, Servidor

## Descrição

Esse função exibe uma notificação ao usuário fora do contexto de uma página da web.

## Parâmetro(s)

1. Título. (Letras)
2. Mensagem. (Letras)
3. URL do Ícone. (Letras, Opcional)
4. URL da Imagem. (Letras, Opcional)
5. Tempo de Exibição em segundos. (Inteiro, Opcional)
6. ID. (Letras, Opcional)
7. Fluxo ao clicar na notificação. (Fluxo, Opcional)
8. Lista de parâmetros do fluxo. (Variante)

## Retorno

Não possui.

## Observações

1. Essa função só irá notificar o usuário, se o mesmo tiver concedido permissão.
2. Ao definir o 6º parâmetro, caso a notificação esteja em exibição e uma nova seja lançada esta será sobrescrita.
