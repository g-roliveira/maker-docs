---
title: "JWT - Gerar Token"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Essa função gera um JSON Web Token de acordo com os valores inseridos por parâmetro.

## Parâmetro(s)

1. Objeto JSON. (Variante)
2. Chave privada. (Letras)
3. Charset. (Letras, Opcional)
4. Tempo de expiração. (Inteiro)

## Retorno

JWT Token. (Variante)

## Observações

1. O tempo de expiração deve ser informado em segundos como unidade de tempo.
2. A chave privada será criptografada utilizando o padrão SHA-256 e deverá conter no mínimo 32 caracteres.
3. O terceiro parâmetro aceito o charset ISO-8859-1 ou UTF-8.
