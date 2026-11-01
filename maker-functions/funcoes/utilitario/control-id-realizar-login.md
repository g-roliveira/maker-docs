---
title: "Control iD - Realizar login"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=14"
---

**Categoria:** [Utilitário](../../categorias/utilitario)

**Compatibilidade:** Servidor

## Descrição

Realiza uma requisição POST para autenticar um usuário no sistema de gerenciamento do relógio de ponto.

## Parâmetros

1. URL da requisição. (Letras)
2. Login do usuário. (Letras)
3. Senha do usuário. (Letras)

## Retorno

JSON com o retorno do servidor sobre a autenticação. (Variante)

## Observações

1. O retorno pode conter um token de autenticação caso o login seja bem-sucedido.
2. Se as credenciais forem inválidas, o servidor retornará um erro.
