---
title: "Captcha - Validar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Esta função valida o captcha criado através da função Captcha - Criar.

## Parâmetro(s)

1. Resposta. (Letras)
2. GUID (Retorno da função Captcha - Criar). (Letras)

## Retorno

Verdadeiro caso a resposta seja válida, falso caso contrário. (Lógico)

## Observação

Caso o GUID informado não exista na lista de Captchas, o retorno será falso.
