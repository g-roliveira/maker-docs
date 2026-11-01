---
title: "LDAP - Conectar"
source_url: "https://pm.softwell.com.br/WSGetCatAndFunc.rule?sys=DEV&category=54"
---

**Categoria:** [LDAP](../../categorias/ldap)

**Compatibilidade:** Servidor

## Descrição

Autentica um usuário via LDAP (Lightweight Directory Access Protocol).

## Parâmetro(s)

1. Servidor. (Letras)
2. Porta. (Letras)
3. Domínio. (Letras)
4. Usuário. (Letras)
5. Senha. (Letras)

## Retorno

Retorna a conexão LDAP se a autenticação foi efetuada com sucesso. Caso contrário, retorna Nulo.
Caso o Servidor ou a Porta estejam incorretos, um erro será lançado. (Variante)

## Exemplo

Assumindo os parâmetros como:
Servidor: authserv
Porta: 389
Domínio: softwell.local
Usuário: maker
Senha: 1
