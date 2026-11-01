---
title: "Push - Enviar Mensagem - Firebase V1"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=2"
---

**Categoria:** [Maker Mobile](../../categorias/maker-mobile)

**Compatibilidade:** Servidor

## Descrição

Essa função envia mensagens via Push utilizando o FCM V1.
Ao utilizar essa função para envio de mensagens Push, o aplicativo deve estar compilado com a versão 3.6.35 ou superior. A versão 3.6.35 foi disponibilizada no dia 25/01/2024, qualquer aplicativo compilado depois dessa data já tem suporte ao recebimento de mensagens Push via FCM V1.

## Parâmetro(s)

1. Token do Dispositivo. (Letras)
2. Chave de API (Arquivo .json fornecido pela Google)(Ver Observação 4) (Letras)
3. ID do Projeto do Firebase (projectId) (Letras)
4. Título da mensagem que será enviada. (Letras)
5. Mensagem que será enviada. (Letras)
6. Mapa com parâmetros extras. (Variante)(Opcional)

## Retorno

JSON retornado do Firebase. (Variante)

## Observações

1. Na versão V1 do Firebase Cloud Functions(FCM), o envio de mensagens para múltiplos dispositivos foi depreciado.
2. A função retorna um JSON com o resultado do envio da mensagem.
3. O sexto parâmetro é opcional.
4. O Arquivo .json é fornecido pela Google quando você habilita a API do Firebase Cloud Messaging V1 e cria sua própria chave de API. Informe o caminho desse arquivo no parâmetro correspondente.
