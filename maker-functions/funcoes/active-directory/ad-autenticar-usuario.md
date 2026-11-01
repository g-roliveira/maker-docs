---
title: "AD - Autenticar Usuário"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=53"
---

**Categoria:** [Active Directory](../../categorias/active-directory)

**Compatibilidade:** Servidor

## Descrição

Autentica um usuário no Active Directory.

## Parâmetro(s)

1. Servidor. (Letras)
2. Porta. (Letras)
3. Domínio. (Letras)
4. Usuário. (Letras)
5. Senha. (Letras)

## Retorno

Retorna Verdadeiro se a autenticação foi efetuada com sucesso. Caso contrário, retorna Falso. (Lógico)

## Exemplo

Assumindo os parâmetros Servidor: "urano", Porta: "389", Domínio: "softwell.local", Usuário: "maker" e Senha: "1", o retorno será Verdadeiro caso a autenticação seja realizada com sucesso ou falso caso contrário.
