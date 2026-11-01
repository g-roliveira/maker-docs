---
title: "ReCaptcha - Validar Resposta"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=63"
---

**Categoria:** [ReCaptcha](../../categorias/recaptcha)

**Compatibilidade:** Servidor

## Descrição

Esta função verifica se a resposta enviada pelo usuário está correta ou não (Validação do reCAPTCHA).

## Parâmetro(s)

1. Chave Secreta. (Letras)
2. Token. (Letras)

## Retorno

Objeto Json contendo as seguintes chaves: &#123;
"success": true|false,
"challenge_ts": timestamp,
"hostname": string,
"score": string
&#125;

## Observação

O reCAPTCHA é um serviço anti-spam gratuito e mantido pelo Google. Para obter informações, criação de chaves
públicas e privadas, acesse: "http://www.google.com/recaptcha".
