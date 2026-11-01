---
title: "Push - Registrar Dispositivo"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Cliente

## Descrição

Essa função realiza um registro para que a aplicação possa receber notificações via Push.

## Parâmetro(s)

1. Fluxo que será executado ao registrar o dispositivo/usuário.
2. ID do Projeto (Utilizado para o Google Cloud Message/Firebase). (Letras)

## Retorno

Não possui.

## Observações

1. Para obter o registro da aplicação no Google, utilize o link https://console.firebase.google.com/
2. Para obter o registro da aplicação na Apple (APNS), utilize o link https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194-CH3-SW1
3. O fluxo associado no primeiro parâmetro, receberá automaticamente o código do dispositivo registrado no servidor de push. Caso ocorra falha, o fluxo receberá o código -403, que indica que ocorreu um erro no registro
