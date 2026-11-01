---
title: "ReCaptcha - Criar Captcha"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=63"
---

**Categoria:** [ReCaptcha](../../categorias/recaptcha)

**Compatibilidade:** Cliente

## Descrição

Esta função cria uma instância do ReCaptcha (Ferramenta de verificação anti-spam).

## Parâmetro(s)

1. Chave de Site do reCAPTCHA (Letras).
2. Função de callback que receberá o token do reCAPTCHA (Fluxo).

## Retorno

Não possui.

## Observação

O reCAPTCHA é um serviço anti-spam gratuito e mantido pelo Google. Para obter informações, criação de chaves
públicas e privadas, acesse: "http://www.google.com/recaptcha".
Ao utilizar a função "ReCaptcha - Criar Captcha" , o desenvolvedor deverá passar um fluxo que receberá o token gerado pela Google para que o mesmo possa fazer a validação da reposta do usuário no servidor.
